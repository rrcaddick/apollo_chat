const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    chats: [Chat!]
    chat(id: ID): Chat
  }

  type Mutation {
    addChat(members: [ID!]): Chat!
  }

  type Chat {
    id: ID
    members: [User!]
    latestMessage: Message
  }
`;

module.exports = {
  typeDefs,
};
