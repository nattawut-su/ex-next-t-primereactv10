'use client';

import { PersonFormModel, PersonRespModel } from '@/models/person';
import axios from 'axios';
import { useState } from 'react';

export default function PageExample2() {
  const [data, setData] = useState<PersonFormModel>({ fname: '', lname: '' });
  const [response, setResponse] = useState<PersonRespModel | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // สั่งให้ browser ไม่ reload หน้า เมื่อ submit form

    // const result = await callByFetch();
    const result = await callByAxios();
    setResponse(result);
  };

  // ********************** ใช้ fetch API ***********************************
  async function callByFetch() {
    const params = new URLSearchParams();
    params.append('fname', data.fname);
    params.append('lname', data.lname);
    const response = await fetch(`http://localhost:8080/ws-server-rest-jee10/webapi/names?${params.toString()}`);
    return await response.json();
  }

  // ********************** ใช้ axios library ***********************************
  async function callByAxios() {
    const response = await axios.get<PersonRespModel>('http://localhost:8080/ws-server-rest-jee10/webapi/names', {
      params: {
        fname: data.fname,
        lname: data.lname,
      },
    });
    return response.data;
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
        <b>Result:</b> {response?.fullName}
      </div>
    </form>
  );
}
