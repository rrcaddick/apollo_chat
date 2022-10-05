import { gql } from "@apollo/client";
import { createMutationFields } from "../mutationUtils";

const REGISTER_USER_MUTATION = gql`
  mutation RegisterUser($input: registerUserInput!) {
    registerUser(input: $input) {
      id
    }
  }
`;

const createUpdateProfile = (variables = null) => {
  const mutationFields = createMutationFields(variables, ["mobile", "status", "profilePicture"]);
  return gql`
    mutation UpdateProfile($input: updateProfileInput!) {
      updateProfile(input: $input) {
        id
        ${mutationFields}
      }
    }
  `;
};

const createUpdateUser = (variables = null) => {
  const mutationFields = createMutationFields(variables, ["name", "email"]);
  return gql`
    mutation UpdateUser($input: updateUserInput!) {
      updateUser(input: $input) {
        id
        ${mutationFields}
      }
    }
  `;
};

export { REGISTER_USER_MUTATION, createUpdateProfile, createUpdateUser };
