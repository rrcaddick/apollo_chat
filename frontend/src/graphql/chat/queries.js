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

export { GET_CHATS_QUERY, READ_SELECTED_CHAT, READ_ORDERED_CHATS, READ_EXISTING_CHAT };
