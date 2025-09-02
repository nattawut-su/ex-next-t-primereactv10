'use client';

import { PersonFormModel } from '@/models/person';
import { useState } from 'react';

function Chapter1() {
  const [value, setValue] = useState<PersonFormModel>({ fname: '', lname: '' });

  return (
    <div>
      <div>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          name="fname"
          value={value.fname}
          onChange={(e) => setValue((v) => ({ ...v, fname: e.target.value }))}
        />
      </div>
      <div>
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          name="lname"
          value={value.lname}
          onChange={(e) => setValue((v) => ({ ...v, lname: e.target.value }))}
        />
      </div>
      <div>
        <b>Result:</b> {value.fname} {value.lname}
      </div>
    </div>
  );
}

export default Chapter1;
