import type { Metadata } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import '@/assets/css/template.css';

export const metadata: Metadata = {
  title: 'Create Next App basis with CSS Utility',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
