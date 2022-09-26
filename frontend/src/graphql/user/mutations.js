import { gql } from "@apollo/client";

const REGISTER_USER_MUTATION = gql`
  mutation RegisterUser($input: registerUserInput!) {
    registerUser(input: $input) {
      id
      name
      email
      mobile
      status
      profilePicture
    }
  }
`;

export { REGISTER_USER_MUTATION };
