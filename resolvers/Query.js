const isLoggedIn = (parent, args, { req }) => typeof req.session.user !== 'undefined';

async function user(parent, args, context, info) {
  return context.db.query.user({
    where: {
      id: args.id,
    },
  }, info);
}

module.exports = {
  isLoggedIn,
  user,
};
