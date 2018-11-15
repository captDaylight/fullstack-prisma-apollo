const bcrypt = require('bcrypt');

async function login(parent, args, context) {
  const user = await context.db.query.user({ where: { email: args.email } });
  if (!user) throw new Error('wrong_credentials');

  const isValidPass = await bcrypt.compare(args.password, user.password);
  if (!isValidPass) throw new Error('wrong_credentials');

  context.req.session.user = user.id;

  return user;
}

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);

  return context.db.mutation.createUser({ data: { ...args, password } }, info);
}

module.exports = {
  login,
  signup,
};
