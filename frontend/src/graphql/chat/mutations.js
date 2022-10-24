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

export { ADD_CHAT, REMOVE_CHAT };
