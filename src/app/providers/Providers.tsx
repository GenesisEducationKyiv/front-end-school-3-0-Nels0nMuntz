import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/configs";
import { router } from "../routes/router";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../configs/apolloClient";

export const Providers = () => {
  return (
    <ApolloProvider client={apolloClient}> 
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ApolloProvider>
  );
};
