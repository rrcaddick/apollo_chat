import { gql } from "@apollo/client";
import { CHAT_FIELDS } from "./fragments";

const GET_CHATS_QUERY = gql`
  ${CHAT_FIELDS}
  query GetChats {
    chats {
      ...ChatFields
    }
  }
`;

const GET_CHAT_BY_ID = gql`
  ${CHAT_FIELDS}
  query Chat($chatId: ID) {
    chat(id: $chatId) {
      ...ChatFields
    }
  }
`;

const READ_ORDERED_CHATS = gql`
  ${CHAT_FIELDS}
  query ReadOrderedChats @client {
    orderedChats {
      ...ChatFields
    }
  }
`;

const READ_EXISTING_CHAT = gql`
  ${CHAT_FIELDS}
  query ReadExistingChat @client {
    existingChat(userId: ID) {
      ...ChatFields
    }
  }
`;

const READ_SELECTED_CHAT = gql`
  ${CHAT_FIELDS}
  query ReadSelectedChat @client {
    selectedChat {
      ...ChatFields
    }
  }
`;

const READ_CHAT_BY_ID = gql`
  ${CHAT_FIELDS}
  query ReadChatById($chatId: ID) @client {
    chatById {
      ...ChatFields
    }
  }
`;

export { GET_CHATS_QUERY, READ_SELECTED_CHAT, READ_ORDERED_CHATS, READ_EXISTING_CHAT, READ_CHAT_BY_ID, GET_CHAT_BY_ID };
