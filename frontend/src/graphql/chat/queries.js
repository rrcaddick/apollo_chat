import { gql } from "@apollo/client";

const GET_CHATS_QUERY = gql`
  query GetChats {
    chats {
      id
      latestMessage {
        id
        content
      }
      details {
        name
        profilePicture
        time
      }
    }
  }
`;

export { GET_CHATS_QUERY };
