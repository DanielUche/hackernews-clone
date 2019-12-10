const feed = (_, args, ctx) => {
  return prisma.feed({ id: args.id });
};

const feeds = async (root, args, context, info) => {
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    : {};
  const feeds = await context.prisma.feeds({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  const count = await context.prisma
    .feedsConnection({
      where
    })
    .aggregate()
    .count();
  return {
    feeds,
    count
  };
};

const info = () => `This is the API of a hackernews clone`;

module.exports = {
  feed,
  feeds,
  info
};
