const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding')
const dotenv = require('dotenv');
const Mutation = require('../resolvers/Mutation');
const Query = require('../resolvers/Query');

if (!process.env.NODE_ENV) {
  dotenv.config();
}

const resolvers = {
  Mutation,
  Query,
};

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: process.env.DB_URL,
      secret: process.env.APP_SECRET,
    })
  }),
})

server.start(() => console.log('server is running on localhost:4000'));
