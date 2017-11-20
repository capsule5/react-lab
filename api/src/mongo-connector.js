const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017/jtreactlab';

module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL);

  // db.collection('files').drop()

  // db.collection('links').insert(
  //   [{
  //     url: 'http://localhost:3002/graphiql',
  //     description: 'GraphiQL'
  //   },
  //   {
  //     url: 'http://localhost:3002/graphiql?variables=null&query=mutation%7B%0A%20%20createLink(%0A%20%20%20%20url%3A%22http%3A%2F%2Ftest.com%22%2C%0A%20%20%20%20description%3A%22blabla%22%0A%20%20)%7B%0A%20%20%20%20id%0A%20%20%20%20url%0A%20%20%20%20description%0A%20%20%7D%0A%7D',
  //     description: 'Try a mutation'
  //   }]
  // )

  return { 
    Links: db.collection('links'), 
    Files: db.collection('files') 
  };
}