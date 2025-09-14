'use client';
import PersonModel from '@/resources/feature/models/person';
import { useEffect, useState } from 'react';

export default function ResultPage() {
  const [value, setValue] = useState<PersonModel | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('personData');
    if (data) {
      setValue(JSON.parse(data));
    }
  }, []);

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
