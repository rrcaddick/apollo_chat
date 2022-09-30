import { gql } from "@apollo/client";

const GET_UPLOAD_SIGNATURE = gql`
  query ImageSignature {
    imageSignature {
      signature
      timestamp
    }
  }
`;

export { GET_UPLOAD_SIGNATURE };
