const resolvers = {
  Query: {
    me: (_root, _args, { user }) => user,
    users: (_root, _args, { dataSources: { user } }) => user.getUsers(),
  },
  User: {
    id: (user) => user._id,
  },
  Mutation: {
    registerUser: (_root, { input }, { dataSources: { user } }) => user.registerUser(input),
  },
};

module.exports = {
  resolvers,
};
