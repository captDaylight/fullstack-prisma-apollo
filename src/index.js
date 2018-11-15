const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const session = require('express-session');
const dotenv = require('dotenv');
const ms = require('ms');
const Mutation = require('../resolvers/Mutation');
const Query = require('../resolvers/Query');

const isProduction = process.env.NODE_ENV === 'production';

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
    }),
  }),
});

console.log(process.env.NODE_ENV, process.env.NODE_ENV === 'production');

server.express.use(session({
  name: 'qid',
  secret: `some-random-secret-here`,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: ms('1d'),
  },
}));

server.start(() => console.log('server is running on localhost:4000'));
