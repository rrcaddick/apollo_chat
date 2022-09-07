import { Box } from "@mui/material";
import ScrollableList from "../layout/ScrollableList";
import Message from "./Message";

const DUMMY_MESSAGES = [
  {
    id: 1,
    content: "Are we meeting today? What time would be best for you?",
    userMessage: true,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 2,
    content: "Would like to discuss new opportunity",
    userMessage: true,
    firstMessage: false,
    lastMessage: false,
  },
  {
    id: 3,
    content: "Any time is fine with me",
    userMessage: true,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 4,
    content: "Oooh that sounds interesting!",
    userMessage: false,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 5,
    content: "What about 5 PM tonight?",
    userMessage: false,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 1,
    content: "Are we meeting today? What time would be best for you?",
    userMessage: true,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 2,
    content: "Would like to discuss new opportunity",
    userMessage: true,
    firstMessage: false,
    lastMessage: false,
  },
  {
    id: 3,
    content: "Any time is fine with me",
    userMessage: true,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 4,
    content: "Oooh that sounds interesting!",
    userMessage: false,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 5,
    content: "What about 5 PM tonight?",
    userMessage: false,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 1,
    content: "Are we meeting today? What time would be best for you?",
    userMessage: true,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 2,
    content: "Would like to discuss new opportunity",
    userMessage: true,
    firstMessage: false,
    lastMessage: false,
  },
  {
    id: 3,
    content: "Any time is fine with me",
    userMessage: true,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 4,
    content: "Oooh that sounds interesting!",
    userMessage: false,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 5,
    content: "What about 5 PM tonight?",
    userMessage: false,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 1,
    content: "Are we meeting today? What time would be best for you?",
    userMessage: true,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 2,
    content: "Would like to discuss new opportunity",
    userMessage: true,
    firstMessage: false,
    lastMessage: false,
  },
  {
    id: 3,
    content: "Any time is fine with me",
    userMessage: true,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 4,
    content: "Oooh that sounds interesting!",
    userMessage: false,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 5,
    content: "What about 5 PM tonight?",
    userMessage: false,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 1,
    content: "Are we meeting today? What time would be best for you?",
    userMessage: true,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 2,
    content: "Would like to discuss new opportunity",
    userMessage: true,
    firstMessage: false,
    lastMessage: false,
  },
  {
    id: 3,
    content: "Any time is fine with me",
    userMessage: true,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 4,
    content: "Oooh that sounds interesting!",
    userMessage: false,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 5,
    content: "What about 5 PM tonight?",
    userMessage: false,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 1,
    content: "Are we meeting today? What time would be best for you?",
    userMessage: true,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 2,
    content: "Would like to discuss new opportunity",
    userMessage: true,
    firstMessage: false,
    lastMessage: false,
  },
  {
    id: 3,
    content: "Any time is fine with me",
    userMessage: true,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 4,
    content: "Oooh that sounds interesting!",
    userMessage: false,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 5,
    content: "What about 5 PM tonight?",
    userMessage: false,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 1,
    content: "Are we meeting today? What time would be best for you?",
    userMessage: true,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 2,
    content: "Would like to discuss new opportunity",
    userMessage: true,
    firstMessage: false,
    lastMessage: false,
  },
  {
    id: 3,
    content: "Any time is fine with me",
    userMessage: true,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 4,
    content: "Oooh that sounds interesting!",
    userMessage: false,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 5,
    content: "What about 5 PM tonight?",
    userMessage: false,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 1,
    content: "Are we meeting today? What time would be best for you?",
    userMessage: true,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 2,
    content: "Would like to discuss new opportunity",
    userMessage: true,
    firstMessage: false,
    lastMessage: false,
  },
  {
    id: 3,
    content: "Any time is fine with me",
    userMessage: true,
    firstMessage: false,
    lastMessage: true,
  },
  {
    id: 4,
    content: "Oooh that sounds interesting!",
    userMessage: false,
    firstMessage: true,
    lastMessage: false,
  },
  {
    id: 5,
    content: "What about 5 PM tonight?",
    userMessage: false,
    firstMessage: false,
    lastMessage: true,
  },
];

const MessageFeed = () => {
  return (
    <Box p="12px 8px" boxShadow={(theme) => theme.shadows["10"]} overflow="hidden" display="flex" flexGrow={1}>
      <ScrollableList gap="0.25rem" p="0 16px" thumbWidth="10px" thumbColor="#8f0acd73">
        {DUMMY_MESSAGES.map((message) => (
          <Message {...message} />
        ))}
      </ScrollableList>
    </Box>
  );
};

export default MessageFeed;
