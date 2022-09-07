import { Box } from "@mui/material";
import MessageFeed from "../message/MessageFeed";
import NewMessage from "../message/NewMessage";
import ChatMessageMenu from "./ChatMessageMenu";

const ChatMessage = () => {
  return (
    <Box sx={{ flex: 3 }} display="flex" flexDirection="column" pb="12px">
      <ChatMessageMenu />
      <MessageFeed />
      <NewMessage />
    </Box>
  );
};

export default ChatMessage;
