import type { Metadata } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import '@/resources/feature/assets/css/template.css';

export const metadata: Metadata = {
  title: 'Create Next App basis with CSS Utility',
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const value = {};
  return <PrimeReactProvider value={value}>{children}</PrimeReactProvider>;
}
