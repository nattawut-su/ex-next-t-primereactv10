'use client';

import { PersonFormModel } from '@/models/person';
import axios from 'axios';
import { useState } from 'react';

export default function PageExample1() {
  const [data, setData] = useState<PersonFormModel>({ fname: '', lname: '' });
  const [fullName, setFullName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // สั่งให้ browser ไม่ reload หน้า เมื่อ submit form

    // callByFetch();
    callByAxios();
  };

  // ********************** ใช้ fetch API ***********************************
  function callByFetch() {
    const params = new URLSearchParams();
    params.append('fname', data.fname);
    params.append('lname', data.lname);
    fetch(`http://localhost:8080/ws-server-rest-jee10/text-result-servlet?${params.toString()}`)
      .then((response) => response.text())
      .then(setFullName);
  }

  // ********************** ใช้ axios library ***********************************
  function callByAxios() {
    axios
      .get<string>('http://localhost:8080/ws-server-rest-jee10/text-result-servlet', {
        params: {
          fname: data.fname,
          lname: data.lname,
        },
      })
      .then((response) => setFullName(response.data));
  }

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
