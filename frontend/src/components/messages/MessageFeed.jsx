import { Box, CircularProgress, Typography } from "@mui/material";
import ScrollableList from "../common/ScrollableList";
import MessageItem from "./MessageItem";
import { useGetChatMessages } from "../../graphql/message/hooks";
import EmoticonPicker from "../common/EmoticonPicker";

const MessageFeed = () => {
  const { chatMessages, loading, error } = useGetChatMessages();

  const hasChatMessage = chatMessages && chatMessages.length > 0;

  return (
    <Box
      p="12px 8px"
      boxShadow={(theme) => theme.shadows["10"]}
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      flexGrow={1}
      position="relative"
    >
      <EmoticonPicker />
      {loading && <CircularProgress sx={{ alignSelf: "center" }} size="10rem" thickness={5} />}
      {!hasChatMessage && !loading && (
        <Box alignSelf="center">
          <Typography>Send a message to start the conversation</Typography>
        </Box>
      )}
      {hasChatMessage && (
        <ScrollableList gap="0.25rem" p="0 16px" thumbWidth="10px" thumbColor="#8f0acd73">
          {chatMessages.map((message) => (
            <MessageItem key={message.id} {...message} />
          ))}
        </ScrollableList>
      )}
    </Box>
  );
};

export default MessageFeed;
