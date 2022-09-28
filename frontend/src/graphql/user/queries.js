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
  query GetOnlineFriends {
    onlineFriends {
      id
      name
      profilePicture
      status
    }
  }
`;

export { GET_ME_QUERY, GET_ONLINE_FRIENDS };
