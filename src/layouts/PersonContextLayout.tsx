'use client';
import { PersonFormModel } from '@/models/person';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PersonContextType {
  person: PersonFormModel;
  setPerson: (person: PersonFormModel) => void;
}

const PersonContext = createContext<PersonContextType | undefined>(undefined);

export function UserProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [person, setPerson] = useState<PersonFormModel>({ fname: '', lname: '' });
  const value = React.useMemo(() => ({ person, setPerson }), [person, setPerson]);

  return <PersonContext.Provider value={value}>{children}</PersonContext.Provider>;
}

export function usePerson() {
  const context = useContext(PersonContext);
  if (!context) throw new Error('usePerson must be used within a PersonProvider');
  return context;
}
