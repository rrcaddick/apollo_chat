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
    members: ({ members }, _args, { dataSources: { user } }) => {
      return user.getUsersByIds(members);
    },
    latestMessage: ({ latestMessage }, _args, { dataSources: { message } }) => message.getMessage(latestMessage),
    details: (chat, _args, { dataSources: { chat: chatSource }, user }) => {
      return chatSource.getChatDetails(chat, user._id);
    },
  },
  Mutation: {
    addChat: (_root, { input }, { dataSources: { chat }, user }) => {
      const currentUserId = user._id.toString();
      const members = [currentUserId, ...input.members];

      if (input.chatType && input.chatType !== "DIRECT") {
        input.admins = [currentUserId];
      }

      return chat.addChat({ ...input, members });
    },
    removeChat: (_root, { chatId }, { dataSources: { chat } }) => {
      return chat.removeChat(chatId);
    },
  },
};

module.exports = {
  resolvers,
};
