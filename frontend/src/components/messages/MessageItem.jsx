import { Box } from "@mui/material";

const MessageItem = ({ content, isUserMessage, isFirstInCluster, isLastInCluster }) => {
  const backgroundColor = isUserMessage ? (theme) => theme.palette.primary.main : (theme) => theme.palette.grey["200"];
  const color = isUserMessage
    ? (theme) => theme.palette.primary.contrastText
    : (theme) => theme.palette.grey.contrastText;

  if (isUserMessage)
    return (
      <Box
        backgroundColor={backgroundColor}
        color={color}
        p="0.5rem 1rem"
        alignSelf={isUserMessage ? "flex-end" : "flex-start"}
        sx={{
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
          borderTopRightRadius: isFirstInCluster && "30px",
          borderBottomRightRadius: isLastInCluster && "30px",
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
      alignSelf={isUserMessage ? "flex-end" : "flex-start"}
      sx={{
        borderTopRightRadius: "30px",
        borderBottomRightRadius: "30px",
        borderTopLeftRadius: isFirstInCluster && "30px",
        borderBottomLeftRadius: isLastInCluster && "30px",
      }}
    >
      {content}
    </Box>
  );
};

export default MessageItem;
