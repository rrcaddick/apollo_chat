import { useEffect, useRef, useState } from "react";
import { useGetChatMessages } from "../graphql/message/hooks";

const useSearchMessages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchingMessages, setMatchingMessages] = useState([]);
  const messageIndexRef = useRef(0);
  const { chatMessages } = useGetChatMessages();

  const resetMatchingMessages = () => {
    setMatchingMessages([]);
    const currentMessage = document.getElementById(matchingMessages[messageIndexRef.current]);
    if (currentMessage) currentMessage.style.backgroundColor = null;
    messageIndexRef.current = 0;
  };

  const nextMessage = (prev = false) => {
    const maxIndex = matchingMessages.length - 1;

    const currentMessage = document.getElementById(matchingMessages[messageIndexRef.current]);
    if (currentMessage) currentMessage.style.backgroundColor = null;

    if (prev) {
      messageIndexRef.current = messageIndexRef.current === 0 ? maxIndex : messageIndexRef.current - 1;
    } else {
      messageIndexRef.current = messageIndexRef.current === maxIndex ? 0 : messageIndexRef.current + 1;
    }

    const message = document.getElementById(matchingMessages[messageIndexRef.current]);
    if (message) {
      message.style.backgroundColor = "#08ff04";
      message.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  };

  useEffect(() => {
    if (chatMessages?.length > 0 && searchTerm !== "") {
      const currentMessage = document.getElementById(matchingMessages[messageIndexRef.current]);
      if (currentMessage) currentMessage.style.backgroundColor = null;
      messageIndexRef.current = 0;
      setMatchingMessages(
        chatMessages.filter((m) => m.content.toLowerCase().includes(searchTerm.toLowerCase())).map((m) => m.id)
      );
    }
    // Puposely left out matchingMessages
  }, [searchTerm, chatMessages]);

  return {
    setSearchTerm,
    matchingMessages,
    nextMessage,
    reset: resetMatchingMessages,
  };
};

export { useSearchMessages };
