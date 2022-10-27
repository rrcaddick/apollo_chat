import { gql, useQuery, useSubscription } from "@apollo/client";
import { GET_CHAT_MESSAGES } from "./queries";
import { ADD_MESSAGE, CLEAR_CHAT_MESSAGES } from "./mutations";
import { ON_MESSAGE_ADDED } from "./subscriptions";
import { selectedChatVar } from "../variables/selectedChat";
import { useReactiveVar } from "@apollo/client";
import { baseMutation } from "../mutationUtils";

const updateLastestMessage = (cache, newMessage, chatId) => {
  const newMessageRef = cache.identify(newMessage);
  cache.writeFragment({
    id: `Chat:${chatId}`,
    fragment: gql`
      fragment UpdateLastestMessage on Chat {
        latestMessage
      }
    `,
    data: {
      latestMessage: newMessage
        ? {
            __ref: newMessageRef,
          }
        : null,
    },
  });
};

const useGetChatMessages = (onCompletedFn = null) => {
  const selectedChat = useReactiveVar(selectedChatVar);
  const { data, loading, error } = useQuery(GET_CHAT_MESSAGES, {
    variables: { chatId: selectedChat?.id },
    onCompleted: ({ chatMessages }) => {
      onCompletedFn && onCompletedFn(chatMessages);
    },
    skip: !selectedChat || selectedChat.id.includes("Temp"),
  });
  return { chatMessages: data?.chatMessages, loading, error };
};

const useAddMessage = baseMutation(ADD_MESSAGE, (cache, { data: { addMessage } }) => {
  const selectedChat = selectedChatVar();
  updateLastestMessage(cache, addMessage, selectedChat?.id);
  cache.updateQuery({ query: GET_CHAT_MESSAGES, variables: { chatId: selectedChat?.id } }, ({ chatMessages }) => {
    return { chatMessages: [...chatMessages, addMessage] };
  });
});

const useReceiveMessage = () => {
  const { loading, data, error } = useSubscription(ON_MESSAGE_ADDED, {
    onData: ({ client, data }) => {
      const { messageAdded } = data.data;

      const {
        chat: { id: chatId },
      } = messageAdded;

      updateLastestMessage(client.cache, messageAdded, chatId);

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
