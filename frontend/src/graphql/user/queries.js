import { gql } from "@apollo/client";
import { FRIEND_FIELDS } from "./fragments";

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
  ${FRIEND_FIELDS}
  query GetFriends {
    friends {
      ...FriendFields
    }
  }
`;

const READ_ONLINE_FRIENDS = gql`
  ${FRIEND_FIELDS}
  query readOnlineFriends @client {
    onlineFriends {
      ...FriendFields
    }
  }
`;

export { GET_ME_QUERY, READ_ONLINE_FRIENDS, GET_FRIENDS };
