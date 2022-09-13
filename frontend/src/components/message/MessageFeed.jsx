import { Box } from "@mui/material";
import ScrollableList from "../layout/ScrollableList";
import Message from "./Message";
import { DUMMY_MESSAGES } from "../../data";

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
