function user(parent, args, context, info) {
  return context.db.query.user({
    where: {
      id: args.userId,
    }
  }, info);
}

module.exports {
  user,
};
