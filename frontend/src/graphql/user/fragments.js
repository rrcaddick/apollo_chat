import { gql } from "@apollo/client";

const FRIEND_FIELDS = gql`
  fragment FriendFields on User {
    id
    name
    email
    mobile
    profilePicture
    status
    isOnline
    lastSeen
  }
`;

export { FRIEND_FIELDS };
