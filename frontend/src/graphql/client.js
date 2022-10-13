import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { chatTypePolicies } from "./chat/typePolicies";
import { queryTypePolicies } from "./typePolicies";

const typePolicies = Object.assign({}, ...[queryTypePolicies, chatTypePolicies]);

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

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      typePolicies,
    }),
  });

  client.setToken = (newToken) => {
    token = newToken;
  };

  return client;
};

const client = createClient();

export { client };
