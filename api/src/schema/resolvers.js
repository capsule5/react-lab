const links = [
  {
    id: 1,
    url: 'http://localhost:3002/graphiql',
    description: 'GraphiQL'
  },
  {
    id: 2,
    url: 'http://localhost:3002/graphiql?variables=null&query=mutation%7B%0A%20%20createLink(%0A%20%20%20%20url%3A%22http%3A%2F%2Ftest.com%22%2C%0A%20%20%20%20description%3A%22blabla%22%0A%20%20)%7B%0A%20%20%20%20id%0A%20%20%20%20url%0A%20%20%20%20description%0A%20%20%7D%0A%7D',
    description: 'Try a mutation'
  },
];

module.exports = {
  Query: {
    allLinks: () => links,
  },
  Mutation: {
    createLink: (_, data) => {
      const newLink = Object.assign({id: links.length + 1}, data);
      links.push(newLink);
      return newLink;
    }
  },
};