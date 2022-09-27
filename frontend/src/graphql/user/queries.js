import { gql } from "@apollo/client";

const getMe = gql`
  query Me {
    me {
      name
      email
    }
  }
`;

export { getMe };
