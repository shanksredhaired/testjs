const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  """
  <img src=x onerror=alert('XSS')>
  """
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
