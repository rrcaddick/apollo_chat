const { withFilter } = require("graphql-subscriptions");
const { pubSubToken } = require("../../common/injectionTokens");

const resolvers = {
  Query: {
    me: (_root, _args, { user }) => user,
    friends: (_root, _args, { dataSources: { user }, user: { _id } }) => user.getUsers(_id),
  },
  User: {
    id: (user) => user._id,
    lastSeen: (user) => user.updatedAt,
  },
  Mutation: {
    registerUser: (_root, { input }, { dataSources: { user } }) => user.registerUser(input),
    updateUser: (_root, { input }, { dataSources: { user }, user: { _id } }) => user.updateUser(_id, input),
    updateProfile: (_root, { input }, { dataSources: { user: userSource }, user }) =>
      userSource.updateUser(user, input),
  },
  Subscription: {
    userOnline: {
      subscribe: withFilter(
        (_root, _args, { injector }) => {
          const pubSub = injector.get(pubSubToken);
          return pubSub.asyncIterator(["USER_ONLINE"]);
        },
        ({ id }, _args, { user }) => {
          if (id === user._id.toString()) return false;
          return true;
        }
      ),
      resolve: (root) => root,
    },
  },
};

module.exports = {
  resolvers,
};
