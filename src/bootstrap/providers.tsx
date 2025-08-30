'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useEffect, useState } from 'react';
import { ensureMocks } from '@/bootstrap/mockBootstrap';
const qc = new QueryClient();

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function Providers({ children }: RootLayoutProps) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    ensureMocks().finally(() => setReady(true));
  }, []);

  if (!ready) return null;
  return (
    <QueryClientProvider client={qc}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
