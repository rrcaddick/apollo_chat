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
    details: ChatDetail!
    latestMessage: Message
  }

  type ChatDetail {
    name: String!
    profilePicture: String
    time: String!
    mobile: String
  }

  input AddChatInput {
    members: [ID]
  }
`;

module.exports = {
  typeDefs,
};
