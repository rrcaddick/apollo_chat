const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    imageSignature: ImageSignature!
  }

  type ImageSignature {
    signature: String
    timestamp: String
  }
`;

module.exports = {
  typeDefs,
};
