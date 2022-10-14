import { gql } from "@apollo/client";

const ON_MESSAGE_ADDED = gql`
  subscription ($userId: ID) {
    messageAdded(userId: $userId) {
      id
      content
      isUserMessage
      chat {
        id
      }
    }
  }
`;

export { ON_MESSAGE_ADDED };
