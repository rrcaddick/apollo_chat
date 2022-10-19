import { Box, Typography, useTheme, Stack } from "@mui/material";
import { forwardRef } from "react";
import { getTimeString, getDateName } from "../../utils/dateUtils";

const MessageItem = forwardRef(
  ({ content, isUserMessage, isFirstInCluster, isLastInCluster, createdAt, isNewDate }, ref) => {
    const theme = useTheme();
    const messageStyles = isUserMessage
      ? {
          alignSelf: "flex-end",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
          borderTopRightRadius: isFirstInCluster && "30px",
          borderBottomRightRadius: isLastInCluster && "30px",
        }
      : {
          alignSelf: "flex-start",
          backgroundColor: theme.palette.grey["200"],
          color: theme.palette.grey.contrastText,
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
          borderTopLeftRadius: isFirstInCluster && "30px",
          borderBottomLeftRadius: isLastInCluster && "30px",
        };

    return (
      <Stack>
        {isNewDate && (
          <Typography
            backgroundColor="#666"
            padding="0.1rem 0.5rem"
            alignSelf="center"
            color="white"
            // fontWeight="600"
            fontSize="0.6rem"
            borderRadius="5px"
            marginY="1rem"
          >
            {getDateName(+createdAt, false).toUpperCase()}
          </Typography>
        )}
        <Box p="0.5rem 1rem" sx={messageStyles} ref={ref} display="flex" gap="0.5rem">
          <Typography>{content}</Typography>
          <Typography
            fontSize="0.5rem"
            fontWeight="600"
            alignSelf="flex-end"
            color={isUserMessage ? "purple" : "orange"}
          >
            {getTimeString(createdAt)}
          </Typography>
        </Box>
      </Stack>
    );
  }
);

export default MessageItem;
