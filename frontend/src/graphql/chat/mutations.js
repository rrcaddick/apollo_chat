import { gql } from "@apollo/client";
import { CHAT_FIELDS } from "./fragments";

const ADD_CHAT = gql`
  ${CHAT_FIELDS}
  mutation AddChat($input: AddChatInput!) {
    addChat(input: $input) {
      ...ChatFields
    }
  }
`;

const REMOVE_CHAT = gql`
  mutation RemoveChat($chatId: ID) {
    removeChat(chatId: $chatId) {
      id
    }
  }
`;

const RESET_UNREAD_COUNT = gql`
  mutation ResetUnreadCount($chatId: ID) {
    resetUnreadCount(chatId: $chatId) {
      id
      unreadCount
    }
  }
`;

export { ADD_CHAT, REMOVE_CHAT, RESET_UNREAD_COUNT };
