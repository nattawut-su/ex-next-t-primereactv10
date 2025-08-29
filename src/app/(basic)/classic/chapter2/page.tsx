'use client';

import { useState } from 'react';

interface Chapter2Props {
  fname: string;
  lname: string;
}

function Chapter2() {
  const [value, setValue] = useState<Chapter2Props>({ fname: '', lname: '' });
  const [submitted, setSubmitted] = useState<Chapter2Props | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(value);
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
      {submitted && (
        <div>
          <b>Result:</b> {submitted.fname} {submitted.lname}
        </div>
      )}
    </form>
  );
}

export default Chapter2;
