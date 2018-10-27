# Fullstack Prisma & Apollo

## Prerequisites
Install dependencies with `npm i`.

Be sure to have prisma installed globally.
```shell
npm install -g prisma graphql-cli
```

Place a .env file in database listing the variables missing in prisma.yml
For example:
```
APP_SECRET=mysecret123
```

## Running the dev server
```shell
node src/index.js
```

Then go to `localhost:4000` to access the playground.

## Generating
First setting up:
```shell
cd database
prisma deploy
```

Select Demo server.
you should get a endpoint like `https://us1.prisma.sh/myusername-1acc8b/my-project/dev`

Your graphqlconfig.yml is source of information for the GraphQL CLI.

After adding the post deploy prisma hook, you're database generated schema in `src/generated`.

## Why Sessions


## Error Handling


## Testing
