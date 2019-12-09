const feed = (_, args, ctx) => {
  return prisma.feed({ id: args.id });
};

const feeds = (root, args, context, info) => {
  return context.prisma.feeds();
};

const info = () => `This is the API of a hackernews clone`;

module.exports = {
  feed,
  feeds,
  info
};
