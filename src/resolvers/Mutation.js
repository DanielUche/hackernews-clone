const { APP_SECRET, getUserId } = require("../utils");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const newFeed = async (parent, args, ctx, info) => {
  const userId = getUserId(ctx);
  const link = await ctx.prisma.createFeed({
    ...args,
    postedBy: { connect: { id: userId } }
  });
  return link;
};

const updateFeed = async (parent, args, ctx) => {
  const { id } = args;
  delete args.id;
  const userId = getUserId(ctx);
  const feed = await ctx.prisma.updateFeed({
    data: { ...args, postedBy: { connect: { id: userId } } },
    where: {
      id
    }
  });
  return feed;
};

const deleteFeed = async (parent, args, ctx, info) => {
  getUserId(ctx);
  const { id } = args;
  const feed = await ctx.prisma.deleteFeed({
    id
  });
  return feed;
};

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user
  };
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email });

  if (!user) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);

  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user
  };
}

async function vote(parent, args, context, info) {
  const userId = getUserId(context);
  const linkExists = await context.prisma.$exists.vote({
    user: { id: userId },
    feed: { id: args.feedId }
  });
  if (linkExists) {
    throw new Error(`Already voted for feed: ${args.feedId}`);
  }
  return context.prisma.createVote({
    user: { connect: { id: userId } },
    feed: { connect: { id: args.feedId } }
  });
}

module.exports = {
  newFeed,
  updateFeed,
  deleteFeed,
  signup,
  login,
  vote
};
