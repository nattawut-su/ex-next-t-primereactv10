'use client';

import { PersonReqModel, PersonRespModel } from '@/models/person';
import axios from 'axios';
import { useState } from 'react';

export default function PageExample3() {
  const [data, setData] = useState<PersonReqModel>({ firstName: '', lastName: '' });
  const [response, setResponse] = useState<PersonRespModel | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // สั่งให้ browser ไม่ reload หน้า เมื่อ submit form

    // callByFetch();
    callByAxios();
  };

  // ********************** ใช้ fetch API ***********************************
  async function callByFetch() {
    const res = await fetch('http://localhost:8080/ws-server-rest-jee10/webapi/names', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    setResponse(result);
  }

  // ********************** ใช้ axios library ***********************************
  function callByAxios() {
    axios.post<PersonRespModel>('http://localhost:8080/ws-server-rest-jee10/webapi/names', data).then((response) => setResponse(response.data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={(e) => setData((v) => ({ ...v, firstName: e.target.value }))}
        />

        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={(e) => setData((v) => ({ ...v, lastName: e.target.value }))}
        />
      </div>
      <button type="submit">Submit</button>

      <div>
        <b>Result:</b> {response?.fullName}
      </div>
    </form>
  );
}
