import { useQuery } from "@apollo/client";
import { GET_CHAT_MESSAGES } from "./queries";
import { selectedChatVar } from "../variables/selectedChat";
import { useReactiveVar } from "@apollo/client";

const useGetChatMessages = (onCompletedFn = null) => {
  const selectedChat = useReactiveVar(selectedChatVar);
  const { data, loading, error } = useQuery(GET_CHAT_MESSAGES, {
    variables: { chatId: selectedChat?.id },
    onCompleted: ({ chatMessages }) => {
      onCompletedFn && onCompletedFn(chatMessages);
      console.log(chatMessages);
    },
    skip: !selectedChat,
  });
  return { chatMessages: data?.chatMessages, loading, error };
};

export { useGetChatMessages };
