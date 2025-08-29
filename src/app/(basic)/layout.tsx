import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Create Next App Classic',
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <React.Fragment>{children}</React.Fragment>;
}
