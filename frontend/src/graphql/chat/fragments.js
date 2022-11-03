import { gql } from "@apollo/client";

const CHAT_FIELDS = gql`
  fragment ChatFields on Chat {
    id
    updatedAt
    chatType
    members {
      id
    }
    latestMessage {
      id
      content
      createdAt
    }
    details {
      __typename
      ... on User {
        id
        name
        profilePicture
        mobile
        isOnline
        lastSeen
      }
      ... on Detail {
        name
        profilePicture
      }
    }
    isSelected @client
  }
`;

export { CHAT_FIELDS };
