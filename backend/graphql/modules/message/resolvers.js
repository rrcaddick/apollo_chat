const resolvers = {
  Query: {
    messages: (_root, _args, { dataSources: { message } }) => message.messages(),
    message: (_root, { id }, { dataSources: { message } }) => message.message(id),
  },
  Message: {
    id: (message) => message._id,
  },
  Mutation: {
    addMessage: (_root, { chatId, content }, { dataSources: { chat }, user: { _id: id } }) =>
      chat.addMessage({ id, chat: chatId, content }),
  },
};

module.exports = {
  resolvers,
};
