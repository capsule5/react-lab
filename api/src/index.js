const express = require('express');
// This package automatically parses JSON requests.
const bodyParser = require('body-parser');
// This package will handle GraphQL server requests and responses
// for you, based on your schema.
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const schema = require('./schema');
// to connect to MongoDB
const connectMongo = require('./mongo-connector');
const {apolloUploadExpress} = require('apollo-upload-server');


const start = async () => {

  // Call the MongoDB connect function and wait for it to finish.
  const mongo = await connectMongo();

  var app = express();

  //enables cors
  app.use("/graphql", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      setTimeout(next, 200) // simulates network latency of 200ms
    }
  });
  app.use('/graphql', bodyParser.json(), apolloUploadExpress(), graphqlExpress({
    // Put the MongoDB collections into the GraphQL context object
    context: { mongo }, 
    schema
  }));
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));


  const PORT = 3002
  app.listen(PORT, () => {
    console.log(`JT React Lab GraphQL server running on port ${PORT}.`)
  });

  };

start();