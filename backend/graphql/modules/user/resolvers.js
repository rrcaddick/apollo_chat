const resolvers = {
  Query: {
    me: (_root, _args, { user }) => user,
    users: (_root, _args, { dataSources: { user } }) => user.getUsers(),
    onlineFriends: (_root, _args, { dataSources: { user }, user: { _id } }) => user.getOnlineFriends(_id),
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
};

module.exports = {
  resolvers,
};
