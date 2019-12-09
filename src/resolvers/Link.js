const postedBy = (parent, args, context) => {
  return context.prisma.feed({ id: parent.id }).postedBy();
};

module.exports = {
  postedBy
};
