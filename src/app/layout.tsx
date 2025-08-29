import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Providers from '@/bootstrap/providers';
import MswInit from '@/bootstrap/msw-init';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next App',
  description: 'examples next app',
  icons: {
    icon: '/images/favicon.ico',
  },
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MswInit></MswInit>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
