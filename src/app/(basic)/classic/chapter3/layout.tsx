import React from 'react';
import { UserProvider } from '@/layouts/PersonContextLayout';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <UserProvider>{children}</UserProvider>;
}
