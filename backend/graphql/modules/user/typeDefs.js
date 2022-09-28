const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    users: [User!]
    onlineFriends: [User!]
  }

  type Mutation {
    registerUser(input: registerUserInput!): User
  }

  type User {
    id: ID
    name: String!
    email: String!
    mobile: String!
    profilePicture: String
    status: String
  }

  input registerUserInput {
    name: String!
    email: String!
    mobile: String!
    profilePicture: String
    password: String!
    confirmPassword: String!
  }
`;

module.exports = {
  typeDefs,
};
