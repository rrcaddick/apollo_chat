import { gql } from "@apollo/client";
import { getDateString } from "../utils/dateUtils";
import { CHAT_FIELDS } from "./chat/fragments";

const getClientFields = (messages, index, readField) => {
  // Only message in chat
  if (messages.length === 1)
    return {
      isFirstInCluster: true,
      isLastInCluster: true,
      isNewDate: true,
    };

  const currSenderId = readField("id", readField("sender", messages[index]));
  const currCreatedAt = readField("createdAt", messages[index]);

  // First message in chat
  if (index === 0) {
    const nextSenderId = readField("id", readField("sender", messages[index + 1]));
    return {
      isFirstInCluster: true,
      isLastInCluster: nextSenderId !== currSenderId,
      isNewDate: true,
    };
  }

  // Last message in chat
  if (index === messages.length - 1) {
    const prevSenderId = readField("id", readField("sender", messages[index - 1]));
    const prevCreatedAt = readField("createdAt", messages[index - 1]);
    return {
      isFirstInCluster: prevSenderId !== currSenderId,
      isLastInCluster: true,
      isNewDate: getDateString(currCreatedAt) !== getDateString(prevCreatedAt),
    };
  }

  const prevSenderId = readField("id", readField("sender", messages[index - 1]));
  const nextSenderId = readField("id", readField("sender", messages[index + 1]));
  const prevCreatedAt = readField("createdAt", messages[index - 1]);

  return {
    isFirstInCluster: prevSenderId !== currSenderId,
    isLastInCluster: nextSenderId !== currSenderId,
    isNewDate: getDateString(currCreatedAt) !== getDateString(prevCreatedAt),
  };
};

const queryTypePolicies = {
  Query: {
    fields: {
      chats: {
        merge(existing = [], incoming = [], { cache, readField }) {
          return incoming;
        },
      },
      chatMessages: {
        keyArgs: ({ chatId }, { fieldName }) => {
          return `${fieldName}:${chatId}`;
        },
        merge(existing = [], incoming = [], { cache, readField }) {
          let i = existing.length === 0 ? 0 : existing.length - 1;
          for (i; i < incoming.length; i++) {
            cache.writeFragment({
              id: incoming[i].__ref,
              fragment: gql`
                fragment UpdateUIFields on Message {
                  isFirstInCluster
                  isLastInCluster
                  isNewDate
                }
              `,
              data: getClientFields(incoming, i, readField),
            });
            // Allows clear messages to clear the cache effectively
            cache.release(incoming[i].__ref);
          }

          return incoming;
        },
      },
      onlineFriends: {
        read(_, { readField }) {
          return readField("friends")?.filter((friendRef) => {
            const isOnline = readField("isOnline", friendRef);
            return isOnline === true;
          });
        },
      },
      selectedChat: {
        read(_, { cache, readField }) {
          return readField("chats")?.find((chatRef) => {
            const isSelected = readField("isSelected", chatRef);
            return isSelected === true;
          });
        },
      },
      existingChat: {
        read(root, { cache, readField, variables: { userId } }) {
          const chatRef = readField("chats")?.find((chatRef) => {
            const userRef = readField("details", chatRef);
            const chatUserId = readField("id", userRef);
            return chatUserId === userId;
          });

          if (!chatRef) return;

          return cache.readFragment({
            id: chatRef.__ref,
            fragment: CHAT_FIELDS,
          });
        },
      },
      orderedChats: {
        read(root, { cache, readField }) {
          const chats = [...readField("chats")];

          return chats.sort((chatRefA, chatRefB) => {
            const messageDateA =
              readField("createdAt", readField("latestMessage", chatRefA)) || readField("updatedAt", chatRefA);
            const messageDateB =
              readField("createdAt", readField("latestMessage", chatRefB)) || readField("updatedAt", chatRefB);
            return Number(messageDateB) - Number(messageDateA);
          });
        },
      },
      chatById: {
        read(root, { cache, readField, variables: { chatId } }) {
          return readField("chats")?.find((chatRef) => {
            return (chatId = readField("id", chatRef));
          });
        },
      },
    },
  },
  Subscription: {
    fields: {
      messageAdded: {
        read(test, test1, test2, test3) {
          console.log(test);
        },
      },
    },
  },
};

export { queryTypePolicies };
