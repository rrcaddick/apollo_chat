import { Box, Typography } from "@mui/material";
import ChatImage from "../../assets/favicon.ico";

const ChatSplash = () => {
  return (
    <Box flex={3} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Box>
        <img src={ChatImage} alt="chatBubble" />
      </Box>
      <Typography fontSize="2rem" fontWeight="700">
        GraphQL Chat
      </Typography>
      <Typography>Start sending message to all you friends</Typography>
    </Box>
  );
};

export default ChatSplash;
