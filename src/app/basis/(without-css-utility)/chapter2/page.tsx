'use client';

import { PersonFormModel } from '@/models/person';
import { useState } from 'react';

function Chapter2() {
  const [data, setData] = useState<PersonFormModel>({ fname: '', lname: '' });
  const [fullName, setFullName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFullName(data.fname + ' ' + data.lname);
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

      <div>
        <b>Result:</b> {fullName}
      </div>
    </form>
  );
}

export default Chapter2;
