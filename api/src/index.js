const express = require('express');

// This package automatically parses JSON requests.
const bodyParser = require('body-parser');

// This package will handle GraphQL server requests and responses
// for you, based on your schema.
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const schema = require('./schema');

var app = express();

//enables cors
app.use("/graphql", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));


const PORT = 3002
app.listen(PORT, () => {
  console.log(`JT React Lab GraphQL server running on port ${PORT}.`)
});

/* 

$ node ./src/index.js
> http://localhost:3002/graphiql
   > docs (top right) 
   
*/