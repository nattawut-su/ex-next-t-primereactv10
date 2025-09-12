'use client';

import { PersonFormModel } from '@/models/person';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Chapter4() {
  const [value, setValue] = useState<PersonFormModel>({ fname: '', lname: '' });
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('personData');
    if (data) {
      localStorage.removeItem('personData');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('personData', JSON.stringify(value));
    router.push(`/feature/classic/chapter4/result`);
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

export default Chapter4;
