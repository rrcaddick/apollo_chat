import { gql } from "@apollo/client";

const CHAT_FIELDS = gql`
  fragment ChatFields on Chat {
    id
    updatedAt
    chatType
    unreadCount
    members {
      id
      name
      status
      profilePicture
    }
    admins {
      id
      name
      profilePicture
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
        status
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
