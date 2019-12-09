const { APP_SECRET, getUserId } = require("../utils");

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

async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10);
  // 2
  const user = await context.prisma.createUser({ ...args, password });

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  // 4
  return {
    token,
    user
  };
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("No such user found");
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  // 3
  return {
    token,
    user
  };
}

module.exports = {
  newFeed,
  updateFeed,
  deleteFeed,
  signup,
  login
};
