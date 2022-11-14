import { gql, useQuery, useSubscription } from "@apollo/client";
import { GET_CHAT_MESSAGES } from "./queries";
import { ADD_MESSAGE, CLEAR_CHAT_MESSAGES } from "./mutations";
import { ON_MESSAGE_ADDED } from "./subscriptions";
import { selectedChatVar } from "../variables/selectedChat";
import { baseMutation } from "../mutationUtils";
import { GET_CHATS_QUERY, GET_CHAT_BY_ID, READ_CHAT_BY_MEMBER } from "../chat/queries";
import { RESET_UNREAD_COUNT } from "../chat/mutations";

const updateLastestMessage = (cache, newMessage, chatId, receiving = false) => {
  const newMessageRef = cache.identify(newMessage);

  const updatedChat = cache.updateFragment(
    {
      id: `Chat:${chatId}`,
      fragment: gql`
        fragment UpdateLastestMessage on Chat {
          latestMessage
          unreadCount
        }
      `,
    },
    (data) => ({
      ...data,
      latestMessage: newMessage
        ? {
            __ref: newMessageRef,
          }
        : null,
      unreadCount: receiving ? data.unreadCount + 1 : data.unreadCount,
    })
  );

  !selectedChatVar()?.latestMessage &&
    selectedChatVar({ ...selectedChatVar(), latestMessage: updatedChat.latestMessage });
};

const useGetChatMessages = (onCompletedFn = null) => {
  const selectedChat = selectedChatVar();
  const { data, loading, error } = useQuery(GET_CHAT_MESSAGES, {
    variables: { chatId: selectedChat?.id },
    onCompleted: ({ chatMessages }) => {
      onCompletedFn && onCompletedFn(chatMessages);
    },
    skip: !selectedChat || selectedChat.id.includes("Temp") || !selectedChat.latestMessage,
  });
  return { chatMessages: data?.chatMessages, loading, error };
};

const useAddMessage = baseMutation(ADD_MESSAGE, (cache, { data: { addMessage } }) => {
  const { id, members, chatType } = selectedChatVar();

  if (chatType === "BROADCAST") {
    for (let member of members) {
      const data = cache.readQuery({
        query: READ_CHAT_BY_MEMBER,
        variables: { member },
      });

      data?.chatIdByMember?.id && updateLastestMessage(cache, addMessage, data?.chatIdByMember?.id);
    }
  }

  updateLastestMessage(cache, addMessage, id);

  cache.updateQuery({ query: GET_CHAT_MESSAGES, variables: { chatId: id } }, (data) => {
    const chatMessages = data?.chatMessages || [];
    return { chatMessages: [...chatMessages, addMessage] };
  });
});

const useReceiveMessage = () => {
  const { loading, data, error } = useSubscription(ON_MESSAGE_ADDED, {
    onData: async ({ client, data }) => {
      const { messageAdded } = data.data;

      const {
        chat: { id: chatId },
      } = messageAdded;

      const updateUnreadCount = selectedChatVar()?.id !== chatId;

      const exists = Boolean(
        client.readFragment({
          id: `Chat:${chatId}`,
          fragment: gql`
            fragment exists on Chat {
              latestMessage
            }
          `,
        })
      );

      if (!exists) {
        const {
          data: { chat },
        } = await client.query({
          query: GET_CHAT_BY_ID,
          variables: { chatId },
        });
        client.cache.updateQuery({ query: GET_CHATS_QUERY }, ({ chats }) => {
          return { chats: [...chats, chat] };
        });
      } else {
        !updateUnreadCount && client.mutate({ mutation: RESET_UNREAD_COUNT, variables: { chatId } });
        updateLastestMessage(client.cache, messageAdded, chatId, updateUnreadCount);
      }

      client.cache.updateQuery({ query: GET_CHAT_MESSAGES, variables: { chatId } }, (data) => {
        if (!data) return;
        return { chatMessages: [...data.chatMessages, messageAdded] };
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { loading, data, error };
};

const useClearChatMessages = baseMutation(CLEAR_CHAT_MESSAGES, (cache, _data, { variables: { chatId } }) => {
  updateLastestMessage(cache, null, chatId);

  cache.modify({
    fields: {
      [`chatMessages:${chatId}`](chatMessages = []) {
        for (let message of chatMessages) {
          cache.evict({ id: message.__ref });
        }
        return [];
      },
    },
  });

  cache.gc();
});

export { useGetChatMessages, useAddMessage, useReceiveMessage, useClearChatMessages };
