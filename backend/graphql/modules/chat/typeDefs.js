const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    chats: [Chat!]
    chat(id: ID): Chat
  }

  type Mutation {
    addChat(input: AddChatInput!): Chat!
  }

  type Chat {
    id: ID
    members: [User!]
    latestMessage: Message
  }

  input AddChatInput {
    members: [ID]
  }
`;

module.exports = {
  typeDefs,
};
