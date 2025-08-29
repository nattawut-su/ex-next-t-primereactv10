'use client';
import { useEffect, useState } from 'react';

export default function MswReady({ children }: { readonly children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
      import('@/mocks').then(() => setReady(true));
    } else {
      setReady(true);
    }
  }, []);

  if (!ready) return null; // หรือ loading UI

  return <>{children}</>;
}
