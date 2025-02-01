import * as Tan from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
const queryClient = new Tan.QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 30
    }
  }
});

export const QueryClientTemplate = ({ children }: PropsWithChildren) => {
  return <Tan.QueryClientProvider client={queryClient}>{children}</Tan.QueryClientProvider>;
};
