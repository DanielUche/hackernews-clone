const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const feed = (_, args, ctx) => {
  return prisma.feed({ id: args.id });
};

const resolvers = {
  Query: {
    info: () => `This is the API of a hackernews clone`,
    feeds: (root, args, context, info) => {
      return context.prisma.feeds();
    },
    feed
  },
  Mutation: {
    newFeed: async (parent, args, ctx, info) => {
      const link = await ctx.prisma.createFeed(args);
      return link;
    },
    updateFeed: async (parent, args, ctx) => {
      const { id } = args;
      delete args.id;
      const feed = await ctx.prisma.updateFeed({
        data: args,
        where: {
          id
        }
      });
      return feed;
    },
    deleteFeed: async (parent, args, ctx, info) => {
      const { id } = args;
      const feed = await ctx.prisma.deleteFeed({
        id
      });
      return feed;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schemas/index.graphql",
  resolvers,
  context: { prisma }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
