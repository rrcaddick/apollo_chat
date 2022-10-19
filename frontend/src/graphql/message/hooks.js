import { gql, useQuery, useSubscription } from "@apollo/client";
import { GET_CHAT_MESSAGES } from "./queries";
import { ADD_MESSAGE } from "./mutations";
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
      latestMessage: {
        __ref: newMessageRef,
      },
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
    skip: !selectedChat,
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

      const { __typename, id, content, isUserMessage } = messageAdded;

      client.cache.updateQuery({ query: GET_CHAT_MESSAGES, variables: { chatId } }, ({ chatMessages }) => {
        return { chatMessages: [...chatMessages, { __typename, id, content, isUserMessage }] };
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { loading, data, error };
};

export { useGetChatMessages, useAddMessage, useReceiveMessage };
