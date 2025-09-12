import type { Metadata } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import '@/assets/css/template.css';

export const metadata: Metadata = {
  title: 'Create Next App basis with CSS Utility',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const value = {};
  return <PrimeReactProvider value={value}>{children}</PrimeReactProvider>;
}
