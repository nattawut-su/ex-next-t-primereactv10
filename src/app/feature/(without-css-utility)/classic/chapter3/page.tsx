'use client';

import { PersonFormModel } from '@/models/person';
import { usePerson } from '@/layouts/PersonContextLayout';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Chapter3() {
  const [value, setValue] = useState<PersonFormModel>({ fname: '', lname: '' });
  const { setPerson } = usePerson();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPerson(value);
    router.push(`/feature/classic/chapter3/result`);
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

export default Chapter3;
