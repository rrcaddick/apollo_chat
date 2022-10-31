const { withFilter } = require("graphql-subscriptions");
const { pubSubToken } = require("../../common/injectionTokens");
const User = require("../../../models/user");

const resolvers = {
  Query: {
    chats: (_root, _args, { dataSources: { chat }, user: { _id } }) => chat.getUserChats(_id),
    chat: (_root, { id }, { dataSources: { chat } }) => chat.getChat(id),
  },
  ChatDetail: {
    __resolveType(details, context, info) {
      if (details instanceof User) {
        return "User";
      }
      return "Detail";
    },
  },
  Chat: {
    id: (chat) => chat._id,
    members: ({ members }, _args, { dataSources: { user } }) => user.getUsersByIds(members),
    latestMessage: ({ latestMessage }, _args, { dataSources: { message } }) => message.getMessage(latestMessage),
    details: (chat, _args, { dataSources: { chat: chatSource }, user }) => chatSource.getChatDetails(chat, user._id),
  },
  Mutation: {
    addChat: async (_root, { input }, { dataSources: { chat: chatSource }, user, injector }) => {
      const currentUserId = user._id.toString();
      const members = [currentUserId, ...input.members];

      if (input.chatType && input.chatType !== "DIRECT") {
        input.admins = [currentUserId];
      }

      const chat = await chatSource.addChat({ ...input, members }, currentUserId);

      if (chat.chatType === "GROUP") {
        const pubSub = injector.get(pubSubToken);
        pubSub.publish("GROUP_ADDED", chat);
      }

      return chat;
    },
    removeChat: (_root, { chatId }, { dataSources: { chat }, user: { id } }) => {
      return chat.removeChat(chatId, id);
    },
  },
  Subscription: {
    groupAdded: {
      subscribe: withFilter(
        (_root, _args, { injector }) => {
          const pubSub = injector.get(pubSubToken);
          return pubSub.asyncIterator(["GROUP_ADDED"]);
        },
        (chat, _args, { user }) => {
          if (chat.admins[0].equals(user._id)) return false;
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
