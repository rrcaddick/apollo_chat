import { gql } from "@apollo/client";
import { CHAT_FIELDS } from "./fragments";

const GROUP_ADDED = gql`
  ${CHAT_FIELDS}
  subscription GroupAdded {
    groupAdded {
      ...ChatFields
    }
  }
`;

export { GROUP_ADDED };
