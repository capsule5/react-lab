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

const { ObjectID } = require('mongodb');

module.exports = {
  Query: {
    allLinks: async (root, data, { mongo: { Links } }) => { // 1
      return await Links.find({}).toArray(); // 2
    },
  },

  Mutation: {
    createLink: async (root, data, { mongo: { Links } }) => {
      const response = await Links.insert(data); // 3
      return Object.assign({ id: response.insertedIds[0] }, data); // 4
    },
    deleteLink: async (root, data, { mongo: { Links } }) => {
      const response = await Links.deleteOne({ "_id": ObjectID(data.id) });
    },
  },

  Link: {
    id: root => root._id || root.id, // 5
  },
};