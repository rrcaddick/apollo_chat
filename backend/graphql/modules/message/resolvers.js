const resolvers = {
  Query: {
    messages: (_root, _args, { dataSources: { message } }) => message.getMessages(),
    message: (_root, { id }, { dataSources: { message } }) => message.getMessage(id),
  },
  Message: {
    id: ({ _id }) => _id,
    sender: ({ sender }, _args, { dataSources: { user } }) => user.getUser(sender),
    chat: ({ chat: chatId }, _args, { dataSources: { chat } }) => chat.getChat(chatId),
  },
  Mutation: {
    addMessage: (_root, { input: { chatId, content } }, { dataSources: { message }, user: { _id: id } }) =>
      message.addMessage({ sender: id, chat: chatId, content }),
  },
};

module.exports = {
  resolvers,
};
