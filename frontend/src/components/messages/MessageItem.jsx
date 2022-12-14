import { Box, Typography, Stack } from "@mui/material";
import { forwardRef } from "react";
import { isDarkModeVar } from "../../graphql/variables/common";
import { getTimeString, getDateName } from "../../utils/dateUtils";

const MessageItem = forwardRef(
  (
    {
      id,
      content,
      isUserMessage,
      isFirstInCluster,
      isLastInCluster,
      createdAt,
      isNewDate,
      chat: { chatType },
      sender: { name },
    },
    ref
  ) => {
    function getRandomColor() {
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
      }
      return color;
    }

    const messageStyles = isUserMessage
      ? {
          alignSelf: "flex-end",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
          borderTopRightRadius: isFirstInCluster && "30px",
          borderBottomRightRadius: isLastInCluster && "30px",
        }
      : {
          alignSelf: "flex-start",
          backgroundColor: "background.dark",
          color: "grey.contrastText",
          borderTopLeftRadius: isFirstInCluster && "30px",
          borderBottomLeftRadius: isLastInCluster && "30px",
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
        };

    return (
      <Stack>
        {isNewDate && (
          <Typography
            backgroundColor="#666"
            padding="0.1rem 0.5rem"
            alignSelf="center"
            color="white"
            fontWeight="600"
            fontSize="0.6rem"
            borderRadius="5px"
            marginY="1rem"
          >
            {getDateName(+createdAt, false).toUpperCase()}
          </Typography>
        )}
        <Box p="0.5rem 1rem" sx={messageStyles} ref={ref} id={id}>
          {chatType === "GROUP" && isFirstInCluster && (
            <Typography fontSize="0.6rem" fontWeight="600" color={isUserMessage ? "orange" : getRandomColor()}>
              {name}
            </Typography>
          )}
          <Box display="flex" gap="0.5rem">
            <Typography>{content}</Typography>
            <Typography
              fontSize="0.5rem"
              fontWeight="600"
              alignSelf="flex-end"
              color={isUserMessage ? `${isDarkModeVar() ? "red" : "#d3a9d3"}` : "orange"}
            >
              {getTimeString(createdAt)}
            </Typography>
          </Box>
        </Box>
      </Stack>
    );
  }
);

export default MessageItem;
