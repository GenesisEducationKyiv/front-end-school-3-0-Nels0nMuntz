import { GRAPHQL_API_URL } from "@/shared/configs";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});
