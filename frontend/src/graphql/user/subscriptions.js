import { gql } from "@apollo/client";

const ON_USER_ONLINE = gql`
  subscription UserOnline {
    userOnline {
      id
      isOnline
      lastSeen
    }
  }
`;

export { ON_USER_ONLINE };
