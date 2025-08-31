'use client';

import { PersonFormModel } from '@/models/person';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Chapter6() {
  const [value, setValue] = useState<PersonFormModel>({ fname: '', lname: '' });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/mock-api/person', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
    });
    router.push(`/classic/chapter7/${(await res.json()).id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First Name:</label>
        <input type="text" name="fname" value={value.fname} onChange={(e) => setValue((v) => ({ ...v, fname: e.target.value }))} />
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" name="lname" value={value.lname} onChange={(e) => setValue((v) => ({ ...v, lname: e.target.value }))} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Chapter6;
