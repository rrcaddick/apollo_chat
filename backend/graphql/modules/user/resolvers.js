const resolvers = {
  Query: {
    me: (_root, _args, { user }) => user,
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
