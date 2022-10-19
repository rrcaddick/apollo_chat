import { gql } from "@apollo/client";

const GET_CHATS_QUERY = gql`
  query GetChats {
    chats {
      id
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
  }
`;

const READ_SELECTED_CHAT = gql`
  query ReadSelectedChat @client {
    selectedChat {
      id
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
  }
`;

export { GET_CHATS_QUERY, READ_SELECTED_CHAT };
