const isLoggedIn = (parent, args, { request }) => typeof request.session.user !== 'undefined';

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
