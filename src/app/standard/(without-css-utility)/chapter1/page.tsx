'use client';

import { PersonFormModel } from '@/models/person';
import { useState } from 'react';

function Chapter1() {
  const [data, setData] = useState<PersonFormModel>({ fname: '', lname: '' });

  return (
    <div>
      <div>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          name="fname"
          value={data.fname}
          onChange={(e) => setData((v) => ({ ...v, fname: e.target.value }))}
        />
      </div>
      <div>
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          name="lname"
          value={data.lname}
          onChange={(e) => setData((v) => ({ ...v, lname: e.target.value }))}
        />
      </div>
      <div>
        <b>Result:</b> {data.fname} {data.lname}
      </div>
    </div>
  );
}

export default Chapter1;
