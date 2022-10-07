import { Box, CircularProgress } from "@mui/material";
import ScrollableList from "../common/ScrollableList";
import MessageItem from "./MessageItem";
import { useGetChatMessages } from "../../graphql/message/hooks";

const MessageFeed = () => {
  const { chatMessages, loading, error } = useGetChatMessages();
  return (
    <Box
      p="12px 8px"
      boxShadow={(theme) => theme.shadows["10"]}
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      flexGrow={1}
    >
      {loading && <CircularProgress sx={{ alignSelf: "center" }} size="10rem" thickness={5} />}
      {chatMessages && (
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
