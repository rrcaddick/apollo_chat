import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_CHATS_QUERY, READ_SELECTED_CHAT, READ_ORDERED_CHATS } from "./queries";

const useGetChats = () => {
  const { data, loading, error } = useQuery(GET_CHATS_QUERY);
  return { chats: data, loading, error };
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
  });
  return { selectedChat: data?.selectedChat, loading, error };
};

export { useGetChats, useReadSelectedChat, useReadOrderedChats };
