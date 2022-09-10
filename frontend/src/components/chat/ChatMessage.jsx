import { useContext } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { Box } from "@mui/material";
import MessageFeed from "../message/MessageFeed";
import SendMessage from "../message/SendMessage";
import ChatMessageMenu from "./ChatMessageMenu";

const ChatMessage = () => {
  const { slideStyles } = useContext(NavigationContext);
  return (
    <Box
      flex="1 0 100%"
      width="100%"
      display="flex"
      flexDirection="column"
      pb="12px"
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          flex: 3,
        },
        [theme.breakpoints.down("md")]: {
          ...slideStyles,
        },
      })}
    >
      <ChatMessageMenu />
      <MessageFeed />
      <SendMessage />
    </Box>
  );
};

export default ChatMessage;
