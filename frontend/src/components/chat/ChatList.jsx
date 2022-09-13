import { useContext } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { AddRounded, Close } from "@mui/icons-material";
import { Backdrop, Box, IconButton, SpeedDial, SpeedDialAction, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchControl from "../common/SearchControl";
import ScrollableList from "../layout/ScrollableList";
import ChatItem from "./ChatItem";
import { ChatBubble, GroupAdd, CellTowerSharp } from "@mui/icons-material";
import SlidingContainer from "../common/SlidingContainer";
import AddNewMessage from "../message/AddNewMessage";
import CreateGroup from "../message/CreateGroup";
import SendBroadcast from "../message/SendBroadcast";

const ChatList = ({ chats }) => {
  // Speed dial state
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const speedDialActions = [
    {
      icon: <ChatBubble />,
      name: "Start a New Chat",
      onClick: () => {
        handleClose();
        toggleAddChat();
      },
    },
    {
      icon: <GroupAdd />,
      name: "Create a Group",
      onClick: () => {
        handleClose();
        toggleCreateGroup();
      },
    },
    {
      icon: <CellTowerSharp />,
      name: "Broadcast a Message",
      onClick: () => {
        handleClose();
        toggleSendBroadcast();
      },
    },
  ];

  const {
    speedDialDrawerOpen: { addChat, createGroup, sendBroadcast },
    toggleAddChat,
    toggleCreateGroup,
    toggleSendBroadcast,
  } = useContext(NavigationContext);

  return (
    <Box position="relative" overflow="hidden" display="flex">
      {/* Start a new chat */}
      <SlidingContainer open={addChat}>
        <AddNewMessage />
      </SlidingContainer>

      {/* Create a new group */}
      <SlidingContainer open={createGroup}>
        <CreateGroup />
      </SlidingContainer>

      {/* Broadcast a message */}
      <SlidingContainer open={sendBroadcast}>
        <SendBroadcast />
      </SlidingContainer>

      {/* Chat List */}
      <Box p="12px 24px" display="flex" flexDirection="column" gap="1rem" flexGrow={1} overflow="hidden">
        {/* Heading and Action Btn */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize="2rem" fontWeight="bold">
            Chats
          </Typography>

          <Box display="flex" alignItems="center" flexShrink={1} position="relative">
            <Backdrop open={open} sx={{ zIndex: "10" }} />
            <SpeedDial
              backgroundColor="green"
              ariaLabel="SpeedDial tooltip example"
              sx={{ position: "absolute", top: "-1.8rem", right: 0 }}
              direction="down"
              icon={<AddRounded />}
              onClose={handleClose}
              onClick={toggleOpen}
              open={open}
            >
              {speedDialActions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  sx={{ whiteSpace: "nowrap" }}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  tooltipOpen
                  onClick={action.onClick}
                />
              ))}
            </SpeedDial>
          </Box>
        </Box>

        {/* Search  */}
        <SearchControl placeholder="Search chats..." />

        {/* List */}
        <ScrollableList gap="1rem" thumbWidth="10px" thumbColor="#8f0acd73">
          {chats.map((chat) => (
            <ChatItem key={chat.id} {...chat} active={chat.id === 2} />
          ))}
        </ScrollableList>
      </Box>
    </Box>
  );
};

export default ChatList;
