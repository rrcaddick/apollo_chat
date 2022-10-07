import { Box, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import ChatItem from "../chats/ChatItem";
import SearchControl from "../common/SearchControl";
import ScrollableList from "../common/ScrollableList";
// import { CHATS_DUMMY as chats } from "../../data";
import AddChatsMenu from "../menus/AddChatsMenu";
import { useGetChats } from "../../graphql/chat/hooks";
import { useDebounce } from "../../hooks/useDebounce";

const ChatsNav = ({ position }) => {
  const [{ addChat, createGroup, sendBroadcast }, setAddChatsMenu] = useState({
    addChat: false,
    createGroup: false,
    sendBroadcast: false,
  });

  const { debounce } = useDebounce();
  const { chats, filterChats, loading, error } = useGetChats();

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    debounce(() => {
      filterChats(searchTerm);
    }, 250);
  };

  const toggleAddChat = () => {
    setAddChatsMenu((prevState) => ({ ...prevState, addChat: !prevState.addChat }));
  };
  const toggleCreateGroup = () => {
    setAddChatsMenu((prevState) => ({ ...prevState, createGroup: !prevState.createGroup }));
  };
  const toggleSendBroadcast = () => {
    setAddChatsMenu((prevState) => ({ ...prevState, sendBroadcast: !prevState.sendBroadcast }));
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      display="flex"
      flex="1 0 100%"
      width="100%"
      sx={{ transform: `translateX(-${100 * position}%)` }}
    >
      {/* Chat List */}
      <Box p="12px 24px" display="flex" flexDirection="column" gap="1rem" flexGrow={1} overflow="hidden">
        {/* Heading and Action Btn */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize="2rem" fontWeight="bold">
            Chats
          </Typography>

          <AddChatsMenu
            open={{ addChat, createGroup, sendBroadcast }}
            toggleMenu={{ toggleAddChat, toggleCreateGroup, toggleSendBroadcast }}
          />
        </Box>

        {/* Search  */}
        <SearchControl placeholder="Search chats..." onSearch={searchHandler} />

        {/* List */}

        {error && (
          <Typography fontSize="2rem" fontWeight="bold">
            {error.messsage}
          </Typography>
        )}
        {loading && (
          <Box display="flex" justifyContent="center" marginTop="2rem">
            <CircularProgress size="5rem" thickness={5} />
          </Box>
        )}
        {chats && (
          <ScrollableList gap="1rem" thumbWidth="10px" thumbColor="#8f0acd73">
            {chats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} />
            ))}
          </ScrollableList>
        )}
      </Box>
    </Box>
  );
};

export default ChatsNav;
