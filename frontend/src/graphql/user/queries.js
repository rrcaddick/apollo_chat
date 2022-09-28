import { gql } from "@apollo/client";

const GET_ME_QUERY = gql`
  query Me {
    me {
      id
      name
      email
      mobile
      profilePicture
      status
    }
  }
`;

export { GET_ME_QUERY };
