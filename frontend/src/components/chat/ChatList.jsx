import { AddRounded } from "@mui/icons-material";
import { Box, Fab, Typography } from "@mui/material";
import React from "react";
import SearchControl from "../common/SearchControl";
import ScrollableList from "../layout/ScrollableList";
import ChatItem from "./ChatItem";

const ChatList = ({ chats }) => {
  return (
    <Box p="12px 24px" display="flex" flexDirection="column" gap="1rem" flexGrow={1} overflow="hidden">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize="2rem" fontWeight="bold">
          Chats
        </Typography>
        <Fab color="primary" size="small">
          <AddRounded />
        </Fab>
      </Box>
      <SearchControl />
      <ScrollableList gap="1rem" thumbWidth="10px" thumbColor="#8f0acd73">
        {chats.map((chat) => (
          <ChatItem key={chat.id} {...chat} active={chat.id === 2} />
        ))}
      </ScrollableList>
    </Box>
  );
};

export default ChatList;
