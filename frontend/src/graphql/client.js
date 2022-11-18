import { ApolloClient, InMemoryCache, createHttpLink, split, from, ApolloLink, fromPromise } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient as createWsClient } from "graphql-ws";
import { chatTypePolicies } from "./chat/typePolicies";
import { queryTypePolicies } from "./typePolicies";
import { resetAllVars } from "./variableUtils";

const typePolicies = Object.assign({}, ...[queryTypePolicies, chatTypePolicies]);

const createClient = () => {
  let token, connectionParams, isRefreshing, refreshTokenPromise;

  const cache = new InMemoryCache({
    typePolicies,
  });

  // await persistCache({
  //   cache,
  //   storage: new LocalStorageWrapper(window.localStorage),
  // });

  const setToken = (newToken) => {
    token = newToken;
  };

  const setConnectionParams = (params) => {
    connectionParams = new Promise((resolve, reject) => {
      resolve(params);
    });
  };

  const refreshToken = async () => {
    const secureFetch = window.fetch;
    const response = await secureFetch("/refreshToken", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    const { token } = await response.json();
    setToken(token);
    setConnectionParams({ token });
  };

  const isSubscription = (query) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  };

  const isAuthenticationError = (errors) => {
    for (let error of errors) {
      if (error?.code === "UNAUTHENTICATED") {
        return true;
      }
    }
    return false;
  };

  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const authLink = new ApolloLink((operation, forward) => {
    // Subscription auth handled with connectionParams
    if (isSubscription(operation.query)) {
      return forward(operation);
    }

    operation.setContext(({ headers }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    }));

    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      if (isAuthenticationError(graphQLErrors) && !isRefreshing) {
        isRefreshing = true;
        refreshTokenPromise = refreshToken();
        refreshTokenPromise.then(() => (isRefreshing = false));
      }
      return fromPromise(refreshTokenPromise).flatMap(() => forward(operation));
    }
  });

  const subscriptionClient = createWsClient({
    url: "ws://192.168.0.122:5000/graphql",
    connectionParams: async () => await connectionParams,
    shouldRetry: true,
    retryAttempts: 2,
    on: {
      closed: ({ code, reason }) => {
        if (code === 3000) {
          // TODO: Add error handling for unauthorized websocket connection
        }
      },
    },
  });

  const wsLink = new GraphQLWsLink(subscriptionClient);
  const splitLink = split(
    ({ query }) => {
      return isSubscription(query);
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({
    link: from([errorLink, authLink, splitLink]),
    cache,
  });

  client.setConnectionParams = setConnectionParams;
  client.setToken = setToken;
  return client;
};

const resetClientVars = () => {
  resetAllVars();
};

export { createClient, resetClientVars };
