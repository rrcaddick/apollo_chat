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

const UPDATE_PROFILE = gql`
  mutation UpdateProfile($input: updateProfileInput) {
    updateProfile(input: $input) {
      profilePicture
      mobile
      status
    }
  }
`;

export { REGISTER_USER_MUTATION, UPDATE_PROFILE };
