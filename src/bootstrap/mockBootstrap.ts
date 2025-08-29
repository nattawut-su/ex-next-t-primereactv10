'use client';
import { useEffect } from 'react';

export default function MockBootstrap() {
  useEffect(() => {
    async function start() {
      if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
        const { worker } = await import('@/mocks/browser');
        await worker.start({ onUnhandledRequest: 'bypass' });
      }
    }
    start();
  }, []);
  return null;
}
