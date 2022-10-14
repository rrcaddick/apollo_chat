import { useQuery, useSubscription } from "@apollo/client";
import { GET_CHAT_MESSAGES } from "./queries";
import { ADD_MESSAGE } from "./mutations";
import { ON_MESSAGE_ADDED } from "./subscriptions";
import { selectedChatVar } from "../variables/selectedChat";
import { useReactiveVar } from "@apollo/client";
import { baseMutation } from "../mutationUtils";
import { useGetMe } from "../user/hooks";
import { useEffect } from "react";
import { currentUserIdVar } from "../variables/currentUser";

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
  cache.updateQuery({ query: GET_CHAT_MESSAGES, variables: { chatId: selectedChat?.id } }, ({ chatMessages }) => {
    return { chatMessages: [...chatMessages, addMessage] };
  });
});

const useReceiveMessage = () => {
  const userId = useReactiveVar(currentUserIdVar);
  const { loading, data, error } = useSubscription(ON_MESSAGE_ADDED, {
    variables: { userId },
    skip: !userId,
    onData: ({ client, data }) => {
      const { messageAdded } = data.data;
      console.log(messageAdded);

      const {
        chat: { id: chatId },
      } = messageAdded;

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
