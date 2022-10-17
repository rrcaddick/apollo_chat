import { ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient as createWsClient } from "graphql-ws";
import { setContext } from "@apollo/client/link/context";
import { chatTypePolicies } from "./chat/typePolicies";
import { queryTypePolicies } from "./typePolicies";
import { recreateClientVar } from "./variables/common";
import { resetAllVars } from "./variableUtils";

const typePolicies = Object.assign({}, ...[queryTypePolicies, chatTypePolicies]);

const createClient = () => {
  let token;
  let resolveToken;

  const getToken = new Promise((resolve, reject) => {
    resolveToken = resolve;
  });

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

  const subscriptionClient = createWsClient({
    url: "ws://192.168.0.122:5000/graphql",
    connectionParams: async () => await getToken,
    shouldRetry: false,
    retryAttempts: 0,
    on: {
      closed: ({ code, reason }) => {
        if (code === 3000) {
          // TODO: Add error handling for unauthorized websocket connection
        }
      },
    },
  });

  subscriptionClient.dispose();

  const wsLink = new GraphQLWsLink(subscriptionClient);
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

  client.resolveToken = resolveToken;
  client.subscriptionClient = subscriptionClient;
  return client;
};

const resetClient = () => {
  recreateClientVar(!recreateClientVar());
  resetAllVars();
};

export { createClient, resetClient };
