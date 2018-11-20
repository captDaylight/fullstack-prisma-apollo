const isLoggedIn = (parent, args, { request }) => ({ status: typeof request.session.userId !== 'undefined' });

async function user(parent, args, context, info) {
  const id = context.request.session.userId;

  if (typeof id === 'undefined') throw new Error('auth_error');

  return context.db.query.user({
    where: { id },
  }, info);
}

module.exports = {
  isLoggedIn,
  user,
};
