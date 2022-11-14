import { useLazyQuery, useQuery, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import { baseMutation } from "../mutationUtils";
import { selectedChatVar } from "../variables/selectedChat";
import { ADD_CHAT, REMOVE_CHAT, RESET_UNREAD_COUNT } from "./mutations";
import { GROUP_ADDED } from "./subscriptions";
import { GET_CHATS_QUERY, READ_SELECTED_CHAT, READ_ORDERED_CHATS, GET_CHAT_BY_ID } from "./queries";

const useGetChats = () => {
  const { data, loading, error } = useQuery(GET_CHATS_QUERY);
  return { chats: data, loading, error };
};

const useGetChatById = () => {
  const [getChat, { data, loading, error }] = useLazyQuery(GET_CHAT_BY_ID);
  return { getChat, chat: data, loading, error };
};

const useReadOrderedChats = () => {
  const [filteredChats, setFilteredChats] = useState();
  const { data, loading, error } = useQuery(READ_ORDERED_CHATS);

  const filterChats = (searchTerm) => {
    if (searchTerm === "") {
      return setFilteredChats(data.orderedChats);
    }
    setFilteredChats(
      data.orderedChats.filter((chat) => chat.details.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  useEffect(() => {
    if (data?.orderedChats) {
      setFilteredChats(data.orderedChats);
    }
  }, [data]);

  return { chats: filteredChats, filterChats, loading, error };
};

const useReadSelectedChat = (onCompletedFn = null) => {
  const { data, loading, error } = useQuery(READ_SELECTED_CHAT, {
    onCompleted: ({ selectedChat }) => {
      onCompletedFn && onCompletedFn(selectedChat);
    },
    fetchPolicy: "cache-only",
  });
  return { selectedChat: data?.selectedChat, loading, error };
};

const useAddChat = baseMutation(ADD_CHAT, (cache, { data }) => {
  const { addChat } = data;
  cache.updateQuery({ query: GET_CHATS_QUERY }, ({ chats }) => {
    return { chats: [...chats, addChat] };
  });
  selectedChatVar(addChat);
});

const useResetUnreadCount = baseMutation(RESET_UNREAD_COUNT, (cache, { data }) => {});

const useRemoveChat = baseMutation(REMOVE_CHAT, (cache, { data: { removeChat } }) => {
  cache.updateQuery({ query: GET_CHATS_QUERY }, ({ chats }) => {
    return { chats: chats.filter((chat) => chat.id !== removeChat.id) };
  });
  cache.evict({ id: `Chat:${removeChat.id}` });
  cache.gc();
  selectedChatVar(null);
});

const useGroupAdded = () => {
  const { data, loading, error } = useSubscription(GROUP_ADDED, {
    onData: ({ client, data: { data } }) => {
      const { groupAdded } = data;
      client.cache.updateQuery({ query: GET_CHATS_QUERY }, ({ chats }) => {
        return { chats: [...chats, groupAdded] };
      });
    },
  });
  return { data, loading, error };
};

export {
  useGetChats,
  useReadSelectedChat,
  useReadOrderedChats,
  useAddChat,
  useRemoveChat,
  useGroupAdded,
  useGetChatById,
  useResetUnreadCount,
};
