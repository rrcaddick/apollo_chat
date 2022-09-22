import { Box } from "@mui/material";

const MessageItem = ({ content, userMessage, firstMessage, lastMessage }) => {
  const backgroundColor = userMessage ? (theme) => theme.palette.primary.main : (theme) => theme.palette.grey["200"];
  const color = userMessage
    ? (theme) => theme.palette.primary.contrastText
    : (theme) => theme.palette.grey.contrastText;

  if (userMessage)
    return (
      <Box
        backgroundColor={backgroundColor}
        color={color}
        p="0.5rem 1rem"
        alignSelf={userMessage ? "flex-end" : "flex-start"}
        sx={{
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
          borderTopRightRadius: firstMessage && "30px",
          borderBottomRightRadius: lastMessage && "30px",
        }}
      >
        {content}
      </Box>
    );

  return (
    <Box
      backgroundColor={backgroundColor}
      color={color}
      p="0.5rem 1rem"
      alignSelf={userMessage ? "flex-end" : "flex-start"}
      sx={{
        borderTopRightRadius: "30px",
        borderBottomRightRadius: "30px",
        borderTopLeftRadius: firstMessage && "30px",
        borderBottomLeftRadius: lastMessage && "30px",
      }}
    >
      {content}
    </Box>
  );
};

export default MessageItem;
