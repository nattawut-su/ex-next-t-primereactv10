'use client';

import { PersonFormModel } from '@/models/person';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function Chapter6() {
  const [value, setValue] = useState<PersonFormModel>({ fname: '', lname: '' });
  const router = useRouter();

  const axiosApi = axios.create({
    baseURL: '/mock-api',
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    axiosApi
      .post('/person', value)
      .then((res) => {
        router.push(`/classic/chapter8/${res.data.id}`);
      })
      .catch((err) => {
        console.error('[AXIOS:ERR]', err?.response?.status);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          name="fname"
          value={value.fname}
          onChange={(e) => setValue((v) => ({ ...v, fname: e.target.value }))}
        />
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          name="lname"
          value={value.lname}
          onChange={(e) => setValue((v) => ({ ...v, lname: e.target.value }))}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Chapter6;
