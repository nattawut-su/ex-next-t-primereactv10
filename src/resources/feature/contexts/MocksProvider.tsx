'use client';
import { ensureMocks } from '@/resources/feature/mocks';
import React, { useEffect, useState } from 'react';

interface MocksProviderProps {
  readonly children: React.ReactNode;
}

export default function MocksProvider({ children }: MocksProviderProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    ensureMocks().finally(() => setReady(true));
  }, []);

  if (!ready) return null;
  return <>{children}</>;
}
