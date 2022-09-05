const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    messages: [Message!]
    message(id: ID): Message
  }

  type Mutation {
    addMessage(input: MessageInput!): Message!
  }

  type Subscription {
    messageAdded(userId: ID): Message
  }

  type Message {
    id: ID
    sender: User!
    chat: Chat
    content: String
  }

  input MessageInput {
    chatId: ID
    content: String
  }
`;

module.exports = {
  typeDefs,
};
