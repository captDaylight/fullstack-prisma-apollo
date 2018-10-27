async function user(parent, args, context, info) {
  return await context.db.query.user({
    where: {
      id: args.id,
    }
  }, info);
}

module.exports = {
  user,
};
