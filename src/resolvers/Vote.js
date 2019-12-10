function feed(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).feed();
}

function user(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).user();
}

module.exports = {
  feed,
  user
};
