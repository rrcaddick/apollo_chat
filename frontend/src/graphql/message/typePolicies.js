const readChatMessages = (cache, readField, chatId) => {
  const serializedState = cache.extract();
  const chatMessages = serializedState.ROOT_QUERY[`chatMessages({"chatId":"${chatId}"})`];
  const messageIndex = chatMessages.findIndex((m) => m.__ref === `Message:${readField("id")}`);
  return [chatMessages, messageIndex];
};

const messagePolicies = {
  Message: {
    fields: {
      isFirstInCluster: {
        read(_, { cache, variables, readField }) {
          const [chatMessages, messageIndex] = readChatMessages(cache, readField, variables.chatId);

          // Only message in chat
          if (chatMessages.length === 1) return true;

          // First message in chat
          if (messageIndex === 0) return true;

          // First message in next group
          const prevMessage = chatMessages[messageIndex - 1];
          if (readField("isUserMessage", prevMessage) !== readField("isUserMessage")) return true;

          // Not the first message in group
          return false;
        },
      },
      isLastInCluster: {
        read(_, { cache, variables, readField }) {
          const [chatMessages, messageIndex] = readChatMessages(cache, readField, variables.chatId);

          // Only message in chat
          if (chatMessages.length === 1) return true;

          // First message in next group
          const nextMessage = chatMessages[messageIndex + 1];
          if (readField("isUserMessage", nextMessage) !== readField("isUserMessage")) return true;

          // Not the first message in group
          return false;
        },
      },
    },
  },
};

export { messagePolicies };
