const { withFilter } = require("graphql-subscriptions");
const { pubSubToken } = require("../../common/injectionTokens");

const resolvers = {
  Query: {
    messages: (_root, _args, { dataSources: { message } }) => message.getMessages(),
    message: (_root, { id }, { dataSources: { message } }) => message.getMessage(id),
    chatMessages: (_root, { chatId }, { dataSources: { message }, user: { id } }) =>
      message.getChatMessages(chatId, id),
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
        dataSources: { message, chat: chatSource },
        user: { _id: id },
      } = context;
      const pubSub = injector.get(pubSubToken);

      const newMessage = await message.addMessage({ sender: id, chat: chatId, content });

      if (newMessage.chat.chatType !== "BROADCAST") {
        pubSub.publish("MESSAGE_ADDED", { message: newMessage });
        return newMessage;
      }

      const { members } = newMessage.chat;
      for (let member of members) {
        const { _id } = await chatSource.getOrCreateChat([member, id]);
        const newBroadcastMessage = await message.addMessage({ sender: id, chat: _id, content });
        pubSub.publish("MESSAGE_ADDED", { message: newBroadcastMessage, broadcast: true });
      }
      return newMessage;
    },
    clearChatMessages: async (_root, { chatId }, { dataSources: { message }, user: { id } }) =>
      message.clearChatMessages(chatId, id),
  },
  Subscription: {
    messageAdded: {
      subscribe: withFilter(
        (_root, _args, { injector }) => {
          const pubSub = injector.get(pubSubToken);
          return pubSub.asyncIterator(["MESSAGE_ADDED"]);
        },
        ({ message, broadcast = false }, _args, { user }) => {
          const { chat, sender } = message;
          if (sender._id.equals(user._id) && !broadcast) return false;
          return chat.members.includes(user._id.toString()) || chat.admins?.includes(user._id.toString());
        }
      ),
      resolve: ({ message }) => message,
    },
  },
};

module.exports = {
  resolvers,
};
