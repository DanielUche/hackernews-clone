const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const feed = (_, args, ctx) => {
  return prisma.feed({ id: args.id });
};

const resolvers = {
  Query: {
    info: () => `This is the API of a hackernews clone`,
    feeds: (root, args, context, info) => {
      return prisma.feeds();
    },
    feed
  },
  Mutation: {
    newFeed: async (parent, args, ctx, info) => {
      const link = await prisma.createFeed(args);
      return link;
    },
    updateFeed: async (parent, args) => {
      const { id } = args;
      delete args.id;
      const feed = await prisma.updateFeed({
        data: args,
        where: {
          id
        }
      });
      return feed;
    },
    deleteFeed: (parent, args) => {
      const index = links.findIndex(link => link.id === args.id);
      const feed = links.find(link => link.id === args.id);
      links.splice(index, 1);
      return feed;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schemas/index.graphql",
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
