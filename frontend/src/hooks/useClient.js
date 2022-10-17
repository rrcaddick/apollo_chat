import { useReactiveVar } from "@apollo/client";
import { createClient } from "../graphql/client";
import { recreateClientVar } from "../graphql/variables/common";

const useClient = () => {
  // Create a rerender on resetClient to supply the new client to ApolloProvider
  useReactiveVar(recreateClientVar);
  const client = createClient();
  return client;
};

export { useClient };
