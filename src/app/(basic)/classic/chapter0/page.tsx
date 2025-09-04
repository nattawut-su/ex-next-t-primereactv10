'use client';

import { PersonFormModel } from '@/models/person';
import { useState } from 'react';

function Chapter1() {
  const [data] = useState<PersonFormModel>({ fname: 'No', lname: 'Name' });

  return (
    <div>
      <div>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          name="fname"
          value={data.fname}
          readOnly
        />
      </div>
      <div>
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          name="lname"
          value={data.lname}
          readOnly
        />
      </div>
      <div>
        <b>Result:</b> {data.fname} {data.lname}
      </div>
    </div>
  );
}

export default Chapter1;
