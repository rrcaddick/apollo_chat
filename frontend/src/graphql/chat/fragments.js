import { gql } from "@apollo/client";

const CHAT_FIELDS = gql`
  fragment ChatFields on Chat {
    id
    createdAt
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
    }
    isSelected @client
  }
`;

export { CHAT_FIELDS };
