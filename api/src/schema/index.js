const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');


// Define your types here.
const typeDefs = `
  scalar Upload

  type File {
    id: ID!
    path: String!
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Link {
    id: ID!
    url: String!
    description: String!
  }

  type Query {
    allLinks: [Link!]!
    allFiles: [File!]!
  }

  type Mutation {
    createLink(url: String!, description: String!): Link,
    deleteLink(id: ID!): Link,
    uploadFile(file: Upload!): File!
    deleteFile(id: ID!): File,
  }
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});