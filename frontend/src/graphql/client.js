import { ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient as createWsClient } from "graphql-ws";
import { setContext } from "@apollo/client/link/context";
import { chatTypePolicies } from "./chat/typePolicies";
import { queryTypePolicies } from "./typePolicies";

const typePolicies = Object.assign({}, ...[queryTypePolicies, chatTypePolicies]);
let client;

const createClient = () => {
  let token;

  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const wsLink = new GraphQLWsLink(
    createWsClient({
      url: "ws://localhost:5000/graphql",
    })
  );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === "OperationDefinition" && definition.operation === "subscription";
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({
    link: authLink.concat(splitLink),
    cache: new InMemoryCache({
      typePolicies,
    }),
  });

  client.setToken = (newToken) => {
    token = newToken;
  };

  return client;
};

client = createClient();

export { client, createClient };
