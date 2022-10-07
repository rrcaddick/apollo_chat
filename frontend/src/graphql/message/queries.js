import { gql } from "@apollo/client";

const GET_CHAT_MESSAGES = gql`
  query ChatMessages($chatId: ID) {
    chatMessages(chatId: $chatId) {
      id
      content
      isUserMessage
      isFirstInCluster @client
      isLastInCluster @client
    }
  }
`;

export { GET_CHAT_MESSAGES };
