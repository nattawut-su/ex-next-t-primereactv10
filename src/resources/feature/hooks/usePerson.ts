'use client';
import { useContext } from 'react';
import PersonContext from '@/resources/feature/bootstrap/PersonContextProvider';

export function usePerson() {
  const context = useContext(PersonContext);
  if (!context) throw new Error('usePerson must be used within a PersonProvider');
  return context;
}

export default usePerson;
