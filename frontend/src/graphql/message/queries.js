import { gql } from "@apollo/client";

const GET_CHAT_MESSAGES = gql`
  query ChatMessages($chatId: ID) {
    chatMessages(chatId: $chatId) {
      id
      content
      isUserMessage
      createdAt
      isFirstInCluster @client
      isLastInCluster @client
      isNewDate @client
    }
  }
`;

export { GET_CHAT_MESSAGES };
