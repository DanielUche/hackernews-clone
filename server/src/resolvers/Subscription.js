const newFeedSubscribe = (parent, args, context, info) =>
  context.prisma.$subscribe.feed({ mutation_in: ["CREATED"] }).node();

const newFeed = {
  subscribe: newFeedSubscribe,
  resolve: payload => {
    return payload;
  }
};

function newVoteSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.vote({ mutation_in: ["CREATED"] }).node();
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload;
  }
};

module.exports = {
  newFeed,
  newVote
};
