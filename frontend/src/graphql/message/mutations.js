import { gql } from "@apollo/client";

const ADD_MESSAGE = gql`
  mutation AddMessage($input: MessageInput!) {
    addMessage(input: $input) {
      id
      content
      isUserMessage
    }
  }
`;

export { ADD_MESSAGE };
