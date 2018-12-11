# Fullstack Prisma & Apollo
I'm building this to create a _dead simple_ 'fullstack' example of Graphql. Its demonstrating React, Apollo, graphql-yoga, and Prisma.

Whenever I come to these kind of examples I always look to see how they handle user authentication, so all this app does is handles user signup and login. It persists user state using a session cookie, the goal is for this to serve a good base template to add whatever flavor or application on top of it.

## Prerequisites
Install dependencies with `npm install` or `yarn install`.

Be sure to have prisma and nodemon installed globally.
```shell
npm install -g prisma graphql-cli nodemon
```
or
```shell
yarn global prisma graphql-cli nodemon
```

## Generating Prisma
After logging into Prisma's CLI:
```shell
prisma deploy database
```

Select Demo server which will give you an endpoint like `https://us1.prisma.sh/myusername-12345/my-project/dev`.

Place a `.env` file in the database folder listing the variables in `database/prisma.yml`. For example:
```
APP_SECRET=mysecret123
DB_URL=https://us1.prisma.sh/myusername-12345/my-project/dev
```

## Running the dev server
```shell
node src/index.js
```

Then go to `localhost:4000` to access the playground.

## Authorization
I'm saving the user's id in a session using express-session.
graphql-yoga
https://github.com/prisma/graphql-yoga/tree/master/examples/authentication/express-session


## Why Sessions
[Many](https://www.apollographql.com/docs/react/recipes/authentication.html) [examples](https://www.howtographql.com/graphql-js/6-authentication/) of using Apollo or graphql demonstrate saving a the user's JWT packet in respnse header or ... localstorage 😳. After reading quite a [few](https://www.rdegges.com/2018/please-stop-using-local-storage/) [posts](http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/) on the subject, I wanted to show a production ready, battle tested solution like sessions. This required a few caveats in the codebase such as query for checking if the user is logged in on page load.

- For ApolloClient, had to switch from using apollo-boost because of [sessions not being persisted](https://github.com/apollographql/apollo-client/issues/4018#issuecomment-439654182). Manually installing `apollo-boost`'s constituent parts fixed the problem.
