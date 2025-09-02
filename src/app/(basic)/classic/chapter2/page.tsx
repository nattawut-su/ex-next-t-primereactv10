'use client';

import { PersonFormModel } from '@/models/person';
import { useState } from 'react';

function Chapter2() {
  const [value, setValue] = useState<PersonFormModel>({ fname: '', lname: '' });
  const [submitted, setSubmitted] = useState<PersonFormModel | null>(null);
  const [error, setError] = useState<PersonFormModel | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newError = { fname: '', lname: '' };

    if (!value.fname) {
      newError.fname = 'First name is required';
      hasError = true;
    }
    if (!value.lname) {
      newError.lname = 'Last name is required';
      hasError = true;
    }

    if (hasError) {
      setError(newError);
      return;
    }

    setSubmitted(value);
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
        {error?.fname && <div style={{ color: 'red' }}>{error.fname}</div>}
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          name="lname"
          value={value.lname}
          onChange={(e) => setValue((v) => ({ ...v, lname: e.target.value }))}
        />
        {error?.lname && <div style={{ color: 'red' }}>{error.lname}</div>}
      </div>
      <button type="submit">Submit</button>
      {submitted && (
        <div>
          <b>Result:</b> {submitted.fname} {submitted.lname}
        </div>
      )}
    </form>
  );
}

export default Chapter2;
