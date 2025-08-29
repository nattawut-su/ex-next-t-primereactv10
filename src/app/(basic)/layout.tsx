import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App Classic',
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
