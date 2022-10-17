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

const GET_FRIENDS = gql`
  query GetFriends {
    friends {
      id
      name
      profilePicture
      status
      mobile
      isOnline
    }
  }
`;

const READ_ONLINE_FRIENDS = gql`
  query readOnlineFriends {
    onlineFriends @client {
      id
      name
      profilePicture
      status
      mobile
      isOnline
    }
  }
`;

export { GET_ME_QUERY, READ_ONLINE_FRIENDS, GET_FRIENDS };
