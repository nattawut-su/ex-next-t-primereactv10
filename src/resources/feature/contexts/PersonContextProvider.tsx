'use client';
import { createContext, useMemo, useState, ReactNode } from 'react';
import { PersonFormModel } from '@/resources/feature/models/person';

interface PersonContextType {
  person: PersonFormModel;
  setPerson: (person: PersonFormModel) => void;
}

const PersonContext = createContext<PersonContextType | undefined>(undefined);

export function PersonProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [person, setPerson] = useState<PersonFormModel>({ fname: '', lname: '' });
  const value = useMemo(() => ({ person, setPerson }), [person, setPerson]);

  return <PersonContext.Provider value={value}>{children}</PersonContext.Provider>;
}

export default PersonContext;
