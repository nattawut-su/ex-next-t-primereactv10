import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
