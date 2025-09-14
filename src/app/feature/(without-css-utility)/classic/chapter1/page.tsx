'use client';

import { PersonFormModel } from '@/resources/feature/models/person';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Chapter1() {
  const [data, setData] = useState<PersonFormModel>({ fname: '', lname: '' });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      fname: data.fname,
      lname: data.lname,
    });
    router.push(`/feature/classic/chapter1/result?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          name="fname"
          value={data.fname}
          onChange={(e) => setData((v) => ({ ...v, fname: e.target.value }))}
        />
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          name="lname"
          value={data.lname}
          onChange={(e) => setData((v) => ({ ...v, lname: e.target.value }))}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Chapter1;
