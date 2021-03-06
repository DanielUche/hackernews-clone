module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateFeed {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Feed {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  description: String!
  url: String!
  postedBy: User
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type FeedConnection {
  pageInfo: PageInfo!
  edges: [FeedEdge]!
  aggregate: AggregateFeed!
}

input FeedCreateInput {
  id: ID
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutFeedsInput
  votes: VoteCreateManyWithoutFeedInput
}

input FeedCreateManyWithoutPostedByInput {
  create: [FeedCreateWithoutPostedByInput!]
  connect: [FeedWhereUniqueInput!]
}

input FeedCreateOneWithoutVotesInput {
  create: FeedCreateWithoutVotesInput
  connect: FeedWhereUniqueInput
}

input FeedCreateWithoutPostedByInput {
  id: ID
  description: String!
  url: String!
  votes: VoteCreateManyWithoutFeedInput
}

input FeedCreateWithoutVotesInput {
  id: ID
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutFeedsInput
}

type FeedEdge {
  node: Feed!
  cursor: String!
}

enum FeedOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
}

type FeedPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  description: String!
  url: String!
}

input FeedScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [FeedScalarWhereInput!]
  OR: [FeedScalarWhereInput!]
  NOT: [FeedScalarWhereInput!]
}

type FeedSubscriptionPayload {
  mutation: MutationType!
  node: Feed
  updatedFields: [String!]
  previousValues: FeedPreviousValues
}

input FeedSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FeedWhereInput
  AND: [FeedSubscriptionWhereInput!]
  OR: [FeedSubscriptionWhereInput!]
  NOT: [FeedSubscriptionWhereInput!]
}

input FeedUpdateInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutFeedsInput
  votes: VoteUpdateManyWithoutFeedInput
}

input FeedUpdateManyDataInput {
  description: String
  url: String
}

input FeedUpdateManyMutationInput {
  description: String
  url: String
}

input FeedUpdateManyWithoutPostedByInput {
  create: [FeedCreateWithoutPostedByInput!]
  delete: [FeedWhereUniqueInput!]
  connect: [FeedWhereUniqueInput!]
  set: [FeedWhereUniqueInput!]
  disconnect: [FeedWhereUniqueInput!]
  update: [FeedUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [FeedUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [FeedScalarWhereInput!]
  updateMany: [FeedUpdateManyWithWhereNestedInput!]
}

input FeedUpdateManyWithWhereNestedInput {
  where: FeedScalarWhereInput!
  data: FeedUpdateManyDataInput!
}

input FeedUpdateOneRequiredWithoutVotesInput {
  create: FeedCreateWithoutVotesInput
  update: FeedUpdateWithoutVotesDataInput
  upsert: FeedUpsertWithoutVotesInput
  connect: FeedWhereUniqueInput
}

input FeedUpdateWithoutPostedByDataInput {
  description: String
  url: String
  votes: VoteUpdateManyWithoutFeedInput
}

input FeedUpdateWithoutVotesDataInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutFeedsInput
}

input FeedUpdateWithWhereUniqueWithoutPostedByInput {
  where: FeedWhereUniqueInput!
  data: FeedUpdateWithoutPostedByDataInput!
}

input FeedUpsertWithoutVotesInput {
  update: FeedUpdateWithoutVotesDataInput!
  create: FeedCreateWithoutVotesInput!
}

input FeedUpsertWithWhereUniqueWithoutPostedByInput {
  where: FeedWhereUniqueInput!
  update: FeedUpdateWithoutPostedByDataInput!
  create: FeedCreateWithoutPostedByInput!
}

input FeedWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  postedBy: UserWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [FeedWhereInput!]
  OR: [FeedWhereInput!]
  NOT: [FeedWhereInput!]
}

input FeedWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFeed(data: FeedCreateInput!): Feed!
  updateFeed(data: FeedUpdateInput!, where: FeedWhereUniqueInput!): Feed
  updateManyFeeds(data: FeedUpdateManyMutationInput!, where: FeedWhereInput): BatchPayload!
  upsertFeed(where: FeedWhereUniqueInput!, create: FeedCreateInput!, update: FeedUpdateInput!): Feed!
  deleteFeed(where: FeedWhereUniqueInput!): Feed
  deleteManyFeeds(where: FeedWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  feed(where: FeedWhereUniqueInput!): Feed
  feeds(where: FeedWhereInput, orderBy: FeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Feed]!
  feedsConnection(where: FeedWhereInput, orderBy: FeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FeedConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Subscription {
  feed(where: FeedSubscriptionWhereInput): FeedSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  feeds(where: FeedWhereInput, orderBy: FeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Feed!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  feeds: FeedCreateManyWithoutPostedByInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutFeedsInput {
  create: UserCreateWithoutFeedsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFeedsInput {
  id: ID
  name: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  feeds: FeedUpdateManyWithoutPostedByInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  feeds: FeedUpdateManyWithoutPostedByInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutFeedsInput {
  create: UserCreateWithoutFeedsInput
  update: UserUpdateWithoutFeedsDataInput
  upsert: UserUpsertWithoutFeedsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFeedsDataInput {
  name: String
  email: String
  password: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutFeedsInput {
  update: UserUpdateWithoutFeedsDataInput!
  create: UserCreateWithoutFeedsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  feeds_every: FeedWhereInput
  feeds_some: FeedWhereInput
  feeds_none: FeedWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vote {
  id: ID!
  feed: Feed!
  user: User!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  id: ID
  feed: FeedCreateOneWithoutVotesInput!
  user: UserCreateOneInput!
}

input VoteCreateManyWithoutFeedInput {
  create: [VoteCreateWithoutFeedInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutFeedInput {
  id: ID
  user: UserCreateOneInput!
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
}

type VotePreviousValues {
  id: ID!
}

input VoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [VoteScalarWhereInput!]
  OR: [VoteScalarWhereInput!]
  NOT: [VoteScalarWhereInput!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  feed: FeedUpdateOneRequiredWithoutVotesInput
  user: UserUpdateOneRequiredInput
}

input VoteUpdateManyWithoutFeedInput {
  create: [VoteCreateWithoutFeedInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutFeedInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutFeedInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateWithoutFeedDataInput {
  user: UserUpdateOneRequiredInput
}

input VoteUpdateWithWhereUniqueWithoutFeedInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutFeedDataInput!
}

input VoteUpsertWithWhereUniqueWithoutFeedInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutFeedDataInput!
  create: VoteCreateWithoutFeedInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  feed: FeedWhereInput
  user: UserWhereInput
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`
      }
    