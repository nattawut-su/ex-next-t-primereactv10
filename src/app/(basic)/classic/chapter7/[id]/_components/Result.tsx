'use client';
import { PersonFormModel } from '@/models/person';
import { useEffect, useState } from 'react';
interface ResultProps {
  readonly id: string;
}

export function Result({ id }: ResultProps) {
  const [value, setValue] = useState<PersonFormModel | null>(null);

  useEffect(() => {
    console.log('fetching', id);
    fetch(`/mock-api/person/${id}`)
      .then((res) => res.json())
      .then((data) => setValue(data))
      .catch((err) => console.error('Error fetching person data', err));
  }, [id]);

  return (
    <div>
      <h2>Result</h2>
      <div>
        <b>First Name:</b> {value?.fname}
      </div>
      <div>
        <b>Last Name:</b> {value?.lname}
      </div>
    </div>
  );
}
