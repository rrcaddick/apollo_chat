import { useReactiveVar } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { selectedEmojiVar } from "../graphql/variables/common";
import { selectedChatVar } from "../graphql/variables/selectedChat";

const useNewMessage = () => {
  const [content, setContent] = useState("");
  const selectedEmoji = useReactiveVar(selectedEmojiVar);
  const selectedChat = useReactiveVar(selectedChatVar);

  const addEmoji = useCallback((emojiData) => {
    if (emojiData) {
      setContent((prevState) => `${prevState}${emojiData.emoji}`);
    }
  }, []);

  const reset = () => {
    setContent("");
  };

  useEffect(() => {
    addEmoji(selectedEmoji);
  }, [addEmoji, selectedEmoji]);

  useEffect(() => {
    reset();
  }, [selectedChat]);

  const setContentHandler = ({ target }) => {
    setContent(target.value);
  };

  return {
    content,
    setContentHandler,
    reset,
    chatId: selectedChat.id,
  };
};

export { useNewMessage };
