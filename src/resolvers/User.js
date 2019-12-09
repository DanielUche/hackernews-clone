function feeds(parent, args, context) {
  return context.prisma.user({ id: parent.id }).feeds();
}

module.exports = {
  feeds
};
