import { gql } from "@apollo/client";

const ADD_MESSAGE = gql`
  mutation AddMessage($input: MessageInput!) {
    addMessage(input: $input) {
      id
      content
      isUserMessage
      createdAt
    }
  }
`;

const CLEAR_CHAT_MESSAGES = gql`
  mutation ClearChatMessages($chatId: ID) {
    clearChatMessages(chatId: $chatId) {
      clearedMessageCount
    }
  }
`;

export { ADD_MESSAGE, CLEAR_CHAT_MESSAGES };
