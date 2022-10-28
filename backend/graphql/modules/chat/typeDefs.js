const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    chats: [Chat!]
    chat(id: ID): Chat
  }

  type Mutation {
    addChat(input: AddChatInput!): Chat!
    removeChat(chatId: ID): Chat!
  }

  type Subscription {
    groupAdded: Chat!
  }

  type Chat {
    id: ID
    updatedAt: String
    chatType: String
    members: [User!]
    details: ChatDetail!
    latestMessage: Message
  }

  union ChatDetail = User | Detail

  type Detail {
    name: String!
    profilePicture: String
  }

  enum ChatType {
    DIRECT
    GROUP
    BROADCAST
  }

  input AddChatInput {
    members: [ID!]!
    chatType: ChatType
    name: String
    icon: String
  }
`;

module.exports = {
  typeDefs,
};
