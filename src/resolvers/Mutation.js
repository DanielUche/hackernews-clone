const newFeed = async (parent, args, ctx, info) => {
  const link = await ctx.prisma.createFeed(args);
  return link;
};
const updateFeed = async (parent, args, ctx) => {
  const { id } = args;
  delete args.id;
  const feed = await ctx.prisma.updateFeed({
    data: args,
    where: {
      id
    }
  });
  return feed;
};
const deleteFeed = async (parent, args, ctx, info) => {
  const { id } = args;
  const feed = await ctx.prisma.deleteFeed({
    id
  });
  return feed;
};

module.exports = {
  newFeed,
  updateFeed,
  deleteFeed
};
