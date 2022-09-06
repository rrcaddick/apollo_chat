import { Box } from "@mui/material";
import ChatMessageMenu from "./ChatMessageMenu";

const ChatMessage = () => {
  return (
    <Box sx={{ flex: 3, backgroundColor: "red" }}>
      <ChatMessageMenu />
    </Box>
  );
};

export default ChatMessage;
