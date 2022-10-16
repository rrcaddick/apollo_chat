const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    users: [User!]
    onlineFriends: [User!]
  }

  type Mutation {
    registerUser(input: registerUserInput!): User
    updateUser(input: updateUserInput!): User
    updateProfile(input: updateProfileInput!): User
  }

  type Subscription {
    userLogIn: User
    userLogOut: User
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

  input updateUserInput {
    name: String
    email: String
    currentPassword: String
    password: String
    confirmPassword: String
  }

  input updateProfileInput {
    mobile: String
    profilePicture: String
    status: String
  }
`;

module.exports = {
  typeDefs,
};
