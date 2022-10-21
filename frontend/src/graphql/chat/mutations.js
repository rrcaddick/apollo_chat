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

export { ADD_CHAT };
