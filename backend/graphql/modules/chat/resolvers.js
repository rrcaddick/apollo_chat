const resolvers = {
  Query: {
    chats: (_root, _args, { dataSources: { chat }, user: { _id } }) => chat.getUserChats(_id),
    chat: (_root, { id }, { dataSources: { chat } }) => chat.getChat(id),
  },
  Chat: {
    id: (chat) => chat._id,
    members: ({ members }, _args, { dataSources: { user } }) => {
      return user.getUsersByIds(members);
    },
    latestMessage: ({ latestMessage }, _args, { dataSources: { message } }) => message.getMessage(latestMessage),
    details: (chat, _args, { dataSources: { chat: chatSource }, user }) => chatSource.getChatDetails(chat, user._id),
  },
  Mutation: {
    addChat: (_root, { input: { members } }, { dataSources: { chat }, user }) => {
      const currentUserId = user._id.toString();
      return chat.addChat([currentUserId, ...members]);
    },
  },
};

module.exports = {
  resolvers,
};
