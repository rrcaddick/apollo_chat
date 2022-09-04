const resolvers = {
  Query: {
    chats: (_root, _args, { dataSources: { chat } }) => chat.getChats(),
    chat: (_root, { id }, { dataSources: { chat } }) => chat.getChat(id),
  },
  Chat: {
    id: (chat) => chat._id,
    members: ({ members }, _args, { dataSources: { user } }) => user.getUsersByIds(members),
    latestMessage: ({ latestMessage }, _args, { dataSources: { message } }) => message.getMessage(latestMessage),
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