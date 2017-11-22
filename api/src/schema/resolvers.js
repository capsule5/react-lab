// const links = [
//   {
//     id: 1,
//     url: 'http://localhost:3002/graphiql',
//     description: 'GraphiQL'
//   },
//   {
//     id: 2,
//     url: 'http://localhost:3002/graphiql?variables=null&query=mutation%7B%0A%20%20createLink(%0A%20%20%20%20url%3A%22http%3A%2F%2Ftest.com%22%2C%0A%20%20%20%20description%3A%22blabla%22%0A%20%20)%7B%0A%20%20%20%20id%0A%20%20%20%20url%0A%20%20%20%20description%0A%20%20%7D%0A%7D',
//     description: 'Try a mutation'
//   },
// ];

// module.exports = {
//   Query: {
//     allLinks: () => links,
//   },
//   Mutation: {
//     createLink: (_, data) => {
//       const newLink = Object.assign({id: links.length + 1}, data);
//       links.push(newLink);
//       return newLink;
//     }
//   },
// };

const { ObjectID } = require('mongodb');
const { GraphQLUpload } = require('apollo-upload-server')
const { createWriteStream } = require('fs')
const mkdirp = require('mkdirp')
const shortid = require('shortid')
const util = require('util');
const exec = util.promisify(require('child_process').exec);


// UPLOAD FILE
//------------------
const uploadPath= 'uploads'

const processUpload = async (file,Files) => {
  const { stream, filename, mimetype, encoding } = await file
  const { id, path, fname } = await storeUpload({ stream, filename })
  const svg = await generateSVG(id, filename, path, fname)
  return recordFile(Files, { id, filename, mimetype, encoding, path })
}

const storeUpload = async ({ stream, filename }) => {
  const id = shortid.generate()
  
  const path = `${uploadPath}/${id}-${filename}`
  const fname = `${id}-${filename.split(".")[0]}`

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => {
        
        return resolve({ id, path, fname })
      })
      .on('error', reject)
  )
}

const generateSVG = async (id, filename, path, fname) => {

  const file = `${id}-${filename}`

  const cmd = `convert ${uploadPath}/${file} ${uploadPath}/temp.ppm`
  const cmd2 = `potrace -s ${uploadPath}/temp.ppm -o ${uploadPath}/${fname}.svg --color=#cccccc --flat -u 1 --longcoding --turdsize=100 --opttolerance 0.4 --turnpolicy majority`
  //const cmd3 = `svgo temp ${uploadPath}/${fname}.svg` // optimize svg size
  const cmdF = `${cmd} && ${cmd2}`
  
  const {err, stdout, stderr} = await exec(cmdF)

  if (err) {
    console.log('err', err);
    // node couldn't execute the command
    return;
  }
  // the *entire* stdout and stderr (buffered)
  // console.log(`stdout: ${stdout}`);
  // console.log(`stderr: ${stderr}`);

  return;
}

const recordFile = async (Files,file) => {
  const response = await Files.insert(file);
  return Object.assign({ id: response.insertedIds[0] }, file);
}
//------------------




module.exports = {
  Query: {
    allLinks: async (root, data, { mongo: { Links } }) => { // 1
      return await Links.find({}).toArray(); // 2
    },
    allFiles: async (root, data, { mongo: { Files } }) => {
      return await Files.find({}).toArray();
    },
  },

  Mutation: {
    // Links
    createLink: async (root, data, { mongo: { Links } }) => {
      const response = await Links.insert(data); // 3
      return Object.assign({ id: response.insertedIds[0] }, data); // 4
    },
    deleteLink: async (root, data, { mongo: { Links } }) => {
      const response = await Links.deleteOne({ "_id": ObjectID(data.id) });
    },
    // Files
    uploadFile: (root, data, { mongo: { Files } }) => processUpload(data.file, Files),
    deleteFile: async (root, data, { mongo: { Files } }) => {
      const response = await Files.deleteOne({ "_id": ObjectID(data.id) });
    },
  },

  Upload: GraphQLUpload,

  Link: {
    id: root => root._id || root.id, // 5
  },

  File: {
    id: root => root._id || root.id,
  },
};

/*
1 - The context object you’ve specified in that call to graphqlExpress is the third argument passed down to each resolver.
2 - For the allLinks query all you need is to call MongoDB’s find function in the Links collection, and then turn the results into an array.
3 - For the createLink mutation you save the data via Links.insert.
4 - Still inside createLink, use insertedIds from MongoDB to return the final Link object from the resolver.
5 - MongoDB will automatically generate ids for you, which is great! 
Unfortunately, it calls them _id, while your schema calls them id. 
You could change the schema to use _id as well instead, but this is the perfect opportunity to talk about other kinds of resolvers. 
As you can see, you can have resolvers for any GraphQL type in your schema, it doesn’t have to be just for Query and Mutation. 
In this case, you’ve created one for the id field in the Link type. 
The server will now trigger that function whenever this field is requested, so you can have it grab _id instead there. 
The first argument in a resolver (called root) is an object with the current data for that type. 
It should be null for Query and Mutation, but for other types it will already have whatever your other resolvers have returned for them.
*/