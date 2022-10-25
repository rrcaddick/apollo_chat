const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    messages: [Message!]
    message(id: ID): Message
    chatMessages(chatId: ID): [Message]
  }

  type Mutation {
    addMessage(input: MessageInput!): Message!
    clearChatMessages(chatId: ID): ClearMessageCount
  }

  type Subscription {
    messageAdded: Message
  }

  type Message {
    id: ID
    sender: User!
    chat: Chat
    content: String
    isUserMessage: Boolean
    createdAt: String
  }

  type ClearMessageCount {
    clearedMessageCount: Int
  }

  input MessageInput {
    chatId: ID
    content: String
  }
`;

module.exports = {
  typeDefs,
};
