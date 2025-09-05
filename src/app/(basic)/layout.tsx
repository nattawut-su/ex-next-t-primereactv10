import Providers from '@/bootstrap/providers';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Create Next App Basic',
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Providers>{children}</Providers>;
}
