import MocksProvider from '@/resources/feature/contexts/MocksProvider';
import QueryProvider from '@/resources/feature/contexts/QCproviders';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Create Next App Basic',
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <MocksProvider>
      <QueryProvider>{children}</QueryProvider>
    </MocksProvider>
  );
}
