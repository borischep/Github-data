import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
import { logErrorMessages } from "@vue/apollo-util";

function getHeaders() {
  const headers = {};
  const token = process.env.VUE_APP_GITHUB_ACCESS_TOKEN;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  fetch: (uri: RequestInfo, options: RequestInit) => {
    options.headers = getHeaders();
    return fetch(uri, options);
  },
});

const errorLink = onError((error) => {
  if (process.env.NODE_ENV !== "production") {
    logErrorMessages(error);
  }
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(httpLink),
});
