const postedBy = (parent, args, context) => {
  return context.prisma.feed({ id: parent.id }).postedBy();
};

function votes(parent, args, context) {
  return context.prisma.feed({ id: parent.id }).votes();
}

module.exports = {
  postedBy,
  votes
};
