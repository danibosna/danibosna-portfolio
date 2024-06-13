import React, { type ComponentType, type FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const withQueryProvider = <P extends object>(
  WrappedComponent: ComponentType<P>,
): FC<P> => {
  // Componente HOC que proporciona el contexto de QueryClient
  const hocComponent: FC<P> = (props) => {
    const queryClient = new QueryClient();
    return (
      <QueryClientProvider client={queryClient}>
        <WrappedComponent {...props} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };

  return hocComponent;
};

export default withQueryProvider;
