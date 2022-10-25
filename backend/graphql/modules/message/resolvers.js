const { withFilter } = require("graphql-subscriptions");
const { pubSubToken } = require("../../common/injectionTokens");

const resolvers = {
  Query: {
    messages: (_root, _args, { dataSources: { message } }) => message.getMessages(),
    message: (_root, { id }, { dataSources: { message } }) => message.getMessage(id),
    chatMessages: (_root, { chatId }, { dataSources: { message } }) => message.getChatMessages(chatId),
  },
  Message: {
    id: ({ _id }) => _id,
    isUserMessage: ({ sender }, args, { user }) => {
      return sender._id.equals(user?._id);
    },
  },
  Mutation: {
    addMessage: async (_root, { input: { chatId, content } }, context) => {
      const {
        injector,
        dataSources: { message },
        user: { _id: id },
      } = context;
      const pubSub = injector.get(pubSubToken);

      const newMessage = await message.addMessage({ sender: id, chat: chatId, content });
      pubSub.publish("MESSAGE_ADDED", newMessage);
      return newMessage;
    },
    clearChatMessages: async (_root, { chatId }, { dataSources: { message } }) => message.clearChatMessages(chatId),
  },
  Subscription: {
    messageAdded: {
      subscribe: withFilter(
        (_root, _args, { injector }) => {
          const pubSub = injector.get(pubSubToken);
          return pubSub.asyncIterator(["MESSAGE_ADDED"]);
        },
        ({ chat, sender }, _args, { user }) => {
          if (sender._id.equals(user._id)) return false;
          return chat.members.includes(user._id.toString());
        }
      ),
      resolve: (root) => root,
    },
  },
};

module.exports = {
  resolvers,
};
