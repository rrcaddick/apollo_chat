import { Box, CircularProgress, Typography } from "@mui/material";
import ScrollableList from "../common/ScrollableList";
import MessageItem from "./MessageItem";
import { useGetChatMessages } from "../../graphql/message/hooks";
import EmoticonPicker from "../common/EmoticonPicker";
import { selectedEmojiVar } from "../../graphql/variables/common";
import { useScrollIntoView } from "../../hooks/useScrollIntoView";

const MessageFeed = () => {
  const { chatMessages, loading, error } = useGetChatMessages();
  const scrollRef = useScrollIntoView(chatMessages);

  const hasChatMessage = chatMessages && chatMessages.length > 0;

  const onSelectHandler = (emojiData, e) => {
    selectedEmojiVar(emojiData);
  };

  return (
    <Box
      p="12px 8px"
      boxShadow={(theme) => theme.shadows["10"]}
      display="flex"
      justifyContent="center"
      flexGrow={1}
      position="relative"
      overflow="hidden"
    >
      <EmoticonPicker onSelect={onSelectHandler} />
      {loading && <CircularProgress sx={{ alignSelf: "center" }} size="10rem" thickness={5} />}
      {error && (
        <Box alignSelf="center">
          <Typography>{error.message}</Typography>
        </Box>
      )}
      {!hasChatMessage && !loading && (
        <Box alignSelf="center">
          <Typography>Send a message to start the conversation</Typography>
        </Box>
      )}
      {hasChatMessage && (
        <ScrollableList gap="0.25rem" p="0 16px" thumbWidth="10px" thumbColor="#8f0acd73">
          {chatMessages.map((message, i, arr) => {
            const lastMessageRef = i === arr.length - 1 ? scrollRef : undefined;
            return <MessageItem key={message.id} {...message} ref={lastMessageRef} />;
          })}
        </ScrollableList>
      )}
    </Box>
  );
};

export default MessageFeed;
