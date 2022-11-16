import { AttachFile, EmojiEmotions, Mic, Send } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import styled from "@emotion/styled";
import { useReactiveVar } from "@apollo/client";
import { emojiTrayOpenVar } from "../../graphql/variables/common";
import { useNewMessage } from "../../hooks/useNewMessage";
import { useAddMessage } from "../../graphql/message/hooks";
import { useGetMe } from "../../graphql/user/hooks";
import { selectedChatVar } from "../../graphql/variables/selectedChat";
import { generateTempId } from "../../utils/common";
import { useRef } from "react";

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

const NewMessage = () => {
  const isOpen = useReactiveVar(emojiTrayOpenVar);
  const { content, setContentHandler, reset, chatId } = useNewMessage();
  const { mutate: addMessage, loading, error } = useAddMessage();
  const { me } = useGetMe();
  const { id, chatType } = selectedChatVar();
  const messageInputRef = useRef();

  const sendMessageHandler = () => {
    const input = { chatId, content };
    addMessage({
      variables: { input },
      optimisticResponse: {
        addMessage: {
          __typename: "Message",
          id: generateTempId("Message"),
          content,
          createdAt: Date.now().toString(),
          isUserMessage: true,
          sender: {
            __typename: "User",
            id: me.id,
            name: me.name,
          },
          chat: {
            __typename: "Chat",
            id,
            chatType,
          },
        },
      },
    });
    reset();
    messageInputRef.current.focus();
    emojiTrayOpenVar(false);
  };

  return (
    <Box p="12px 12px 0" sx={{ zIndex: isOpen ? (theme) => theme.zIndex.drawer + 2 : 0 }}>
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
        <MessageInput
          multiline="true"
          maxRows={4}
          placeholder="Message..."
          value={content}
          ref={messageInputRef}
          onChange={setContentHandler}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessageHandler();
            }
          }}
        />
        <Box display="flex" alignItems="center">
          <IconButton
            size="small"
            onClick={() => {
              emojiTrayOpenVar(!isOpen);
            }}
          >
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
              onClick={sendMessageHandler}
            >
              <Send />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewMessage;
