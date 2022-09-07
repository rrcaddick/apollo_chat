import { Box } from "@mui/material";
import MessageFeed from "../message/MessageFeed";
import SendMessage from "../message/SendMessage";
import ChatMessageMenu from "./ChatMessageMenu";

const ChatMessage = () => {
  return (
    <Box sx={{ flex: 3 }} display="flex" flexDirection="column" pb="12px">
      <ChatMessageMenu />
      <MessageFeed />
      <SendMessage />
    </Box>
  );
};

export default ChatMessage;
