import { gql } from "@apollo/client";

const ON_MESSAGE_ADDED = gql`
  subscription MessageAdded {
    messageAdded {
      id
      content
      isUserMessage
      createdAt
      chat {
        id
      }
    }
  }
`;

export { ON_MESSAGE_ADDED };
