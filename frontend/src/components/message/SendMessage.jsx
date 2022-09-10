import { AttachFile, EmojiEmotions, Mic, Send } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import styled from "@emotion/styled";

const MessageInput = styled(TextareaAutosize)`
  width: 100%;
  padding: 0.25rem 0.25rem;
  background-color: ${(p) => p.theme.palette.grey["200"]};
  outline: none;
  border: none;
  position: relative;
  resize: none;
  &:hover::-webkit-scrollbar {
    display: block;
  }
  &::-webkit-scrollbar {
    width: 10px;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.palette.secondary.main};
    border-radius: 20px;
  }
`;

const SendMessage = () => {
  return (
    <Box p="12px 12px 0">
      <Box
        backgroundColor={(theme) => theme.palette.grey["200"]}
        borderRadius="30px"
        p="0.25rem 0.25rem"
        display="flex"
        alignItems="center"
      >
        <IconButton
          size="small"
          sx={{
            transform: "rotate(45deg)",
          }}
        >
          <AttachFile />
        </IconButton>
        <MessageInput multiline maxRows={4} placeholder="Message..." />
        <Box display="flex" alignItems="center">
          <IconButton size="small">
            <EmojiEmotions />
          </IconButton>
          <IconButton size="small">
            <Mic />
          </IconButton>
          <Box
            backgroundColor={(theme) => theme.palette.primary.main}
            borderRadius="50%"
            marginLeft="0.4rem"
            sx={{
              transform: "scale(1.3)",
              "&:hover": {
                transform: "scale(1.4)",
              },
            }}
            color="#fff"
          >
            <IconButton
              size="small"
              sx={{
                transform: "rotate(-20deg)",
              }}
              color="inherit"
            >
              <Send />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SendMessage;
