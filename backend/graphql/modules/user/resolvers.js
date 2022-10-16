const { withFilter } = require("graphql-subscriptions");
const { pubSubToken } = require("../../common/injectionTokens");

const resolvers = {
  Query: {
    me: (_root, _args, { user }) => user,
    users: (_root, _args, { dataSources: { user }, user: { _id } }) => user.getUsers(_id),
    onlineFriends: (_root, _args, { dataSources: { user }, user: { _id }, injector }) => {
      return user.getOnlineFriends(_id);
    },
  },
  User: {
    id: (user) => user._id,
  },
  Mutation: {
    registerUser: (_root, { input }, { dataSources: { user } }) => user.registerUser(input),
    updateUser: (_root, { input }, { dataSources: { user }, user: { _id } }) => user.updateUser(_id, input),
    updateProfile: (_root, { input }, { dataSources: { user: userSource }, user }) =>
      userSource.updateUser(user, input),
  },
  Subscription: {
    userLogIn: {
      subscribe: withFilter(
        (_root, _args, { injector }) => {
          const pubSub = injector.get(pubSubToken);
          return pubSub.asyncIterator(["USER_LOGIN"]);
        },
        ({ id }, _args, { user }) => {
          if (id.equals(user._id)) return false;
          return true;
        }
      ),
      resolve: (root) => root,
    },
    userLogOut: {
      subscribe: withFilter(
        (_root, _args, { injector }) => {
          const pubSub = injector.get(pubSubToken);
          return pubSub.asyncIterator(["USER_LOGOUT"]);
        },
        ({ id }, _args, { user }) => {
          if (id.equals(user._id)) return false;
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
