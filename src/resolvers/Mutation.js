const bcrypt = require('bcrypt');

async function login(parent, args, context) {
  const user = await context.db.query.user({ where: { email: args.email } });
  if (!user) throw new Error('wrong_credentials');

  const isValidPass = await bcrypt.compare(args.password, user.password);
  if (!isValidPass) throw new Error('wrong_credentials');

  context.request.session.userId = user.id;

  return user;
}

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.db.mutation.createUser({ data: { ...args, password } }, info);

  context.request.session.userId = user.id;

  return user;
}

function logout(parent, args, context) {
  if (!context.request.session) throw new Error('auth_error');

  context.request.session.destroy();

  return { status: false };
}

module.exports = {
  login,
  signup,
  logout,
};
