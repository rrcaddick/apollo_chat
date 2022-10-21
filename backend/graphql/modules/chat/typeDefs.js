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
    createdAt: String
    members: [User!]
    details: ChatDetail!
    latestMessage: Message
  }

  union ChatDetail = User | GroupDetail

  type GroupDetail {
    name: String!
    profilePicture: String
    time: String!
    mobile: String
    lastSeen: String
  }

  input AddChatInput {
    members: [ID]
  }
`;

module.exports = {
  typeDefs,
};
