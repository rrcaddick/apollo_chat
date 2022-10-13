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
  },
  Subscription: {
    messageAdded: {
      subscribe: withFilter(
        (_root, _args, context) => {
          const pubSub = context.injector.get(pubSubToken);
          return pubSub.asyncIterator(["MESSAGE_ADDED"]);
        },
        ({ chat, sender }, { userId }) => {
          if (sender._id.toString() === userId) return false;

          return chat.members.reduce((_, member) => {
            return member._id.toString() === userId;
          }, false);
        }
      ),
      resolve: (root) => root,
    },
  },
};

module.exports = {
  resolvers,
};
