import { PersonProvider } from '@/resources/feature/bootstrap/PersonContextProvider';
import React from 'react';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <PersonProvider>{children}</PersonProvider>;
}
