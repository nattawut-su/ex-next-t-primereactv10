import type { Metadata } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import '@/assets/css/template.css';

export const metadata: Metadata = {
  title: 'Create Next App with PrimeReact',
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
