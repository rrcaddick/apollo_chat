const resolvers = {
  Query: {
    chats: (_root, _args, { dataSources: { chat } }) => chat.chats(),
    chat: (_root, { id }, { dataSources: { chat } }) => chat.chat(id),
  },
  Chat: {
    id: (chat) => chat._id,
  },
  Mutation: {
    addChat: (_root, { members }, { dataSources: { chat } }) => chat.addChat(members),
  },
};

module.exports = {
  resolvers,
};
