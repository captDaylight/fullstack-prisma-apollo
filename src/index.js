const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding')
const donenv = require('dotenv');
const Mutations = require('../resolvers/Mutations');
const Query = require('../resolvers/Query');

if (!process.env.NODE_ENV) {
  donenv.config();
}

const resolvers = {
  Mutations,
  Query,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
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
