const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  },
  {
    id: "link-1",
    url: "www.google.com",
    description: "Web Search"
  }
];

const feed = (_, args, ctx) => {
  return links.find(link => link.id === args.id);
};

const resolvers = {
  Query: {
    info: () => `This is the API of a hackernews clone`,
    feeds: () => links,
    feed
  },
  Mutation: {
    newFeed: (parent, args) => {
      let idCount = links.length;
      const link = {
        id: `link-${idCount}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    },
    updateFeed: (parent, args) => {
      const index = links.findIndex(link => link.id === args.id);
      links[index] = args;
      return args;
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

const setPrisma = async () => {
  const newLink = await prisma.createLink({
    url: "www.prisma.io",
    description: "Prisma replaces traditional ORMs"
  });

  console.log(`Created new link: ${newLink.url} (ID: ${newLink.id})`);

  // Read all links from the database and print them to the console
  const allLinks = await prisma.links();
  console.log(allLinks);
};

try {
  setPrisma();
} catch (err) {
  console.log(err);
}

server.start(() => console.log(`Server is running on http://localhost:4000`));
