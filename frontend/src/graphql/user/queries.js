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

const GET_ONLINE_FRIENDS = gql`
  query GetFriends {
    onlineFriends {
      id
      name
      profilePicture
      status
      mobile
    }
  }
`;

export { GET_ME_QUERY, GET_ONLINE_FRIENDS };
