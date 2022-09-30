import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_CHATS_QUERY } from "./queries";

const useGetChats = () => {
  const [filteredChats, setFilteredChats] = useState();
  const { data, loading, error } = useQuery(GET_CHATS_QUERY);

  const filterChats = (searchTerm) => {
    if (searchTerm === "") {
      return setFilteredChats(data.chats);
    }
    setFilteredChats(data.chats.filter((chat) => chat.details.name.toLowerCase().includes(searchTerm.toLowerCase())));
  };

  useEffect(() => {
    if (data?.chats) {
      setFilteredChats(data.chats);
    }
  }, [data]);

  return { chats: filteredChats, filterChats, loading, error };
};

export { useGetChats };