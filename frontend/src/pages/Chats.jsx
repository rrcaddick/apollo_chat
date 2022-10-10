import Chat from "../components/chats/Chat";
import ChatPageLayout from "../components/layout/ChatPageLayout";
import NavigationProvider from "../providers/NavigationProvider";
import Navigation from "../components/navigation/Navigation";
import { Box, Typography } from "@mui/material";
import { selectedChatVar } from "../graphql/variables/selectedChat";
import { useReactiveVar } from "@apollo/client";
import ChatImage from "../assets/favicon.ico";

const Chats = () => {
  const selectedChat = useReactiveVar(selectedChatVar);
  return (
    <ChatPageLayout>
      <NavigationProvider>
        <Navigation />
        {!selectedChat && (
          <Box flex={3} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Box>
              <img src={ChatImage} />
            </Box>
            <Typography fontSize="2rem" fontWeight="700">
              GraphQL Chat
            </Typography>
            <Typography>Start sending message to all you friends</Typography>
          </Box>
        )}
        {selectedChat && <Chat />}
      </NavigationProvider>
    </ChatPageLayout>
  );
};

export default Chats;
