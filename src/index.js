const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const session = require('express-session');
const dotenv = require('dotenv');
const ms = require('ms');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
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

server.express.use(session({
  name: 'pid',
  secret: 'some-random-secret-here',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: isProduction,
    maxAge: ms('1d'),
  },
}));

server.start({
  cors: {
    credentials: true,
    origin: 'http://localhost:1234',
  },
}, () => console.log('server is running on localhost:4000'));
