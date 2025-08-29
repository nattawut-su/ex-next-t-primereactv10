'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

const qc = new QueryClient();

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function Providers({ children }: RootLayoutProps) {
  return (
    <QueryClientProvider client={qc}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
