'use client';
import { PersonFormModel } from '@/models/person';
import axios from 'axios';
import { useEffect, useState } from 'react';
interface ResultProps {
  readonly id: string;
}

export function Result({ id }: ResultProps) {
  const [value, setValue] = useState<PersonFormModel | null>(null);
  const axiosApi = axios.create({
    baseURL: '/mock-api',
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  useEffect(() => {
    console.log('fetching', id);
    axiosApi
      .get<PersonFormModel>(`/person/${id}`)
      .then((res) => setValue(res.data))
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
