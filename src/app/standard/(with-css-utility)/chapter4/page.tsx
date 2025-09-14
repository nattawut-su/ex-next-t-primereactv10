'use client';

import { PersonReqModel, PersonRespModel } from '@/resources/standard/models/chapter3.PersonModel';
import axios from 'axios';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

export default function PageChapter4() {
  const [data, setData] = useState<PersonReqModel>({ firstName: '', lastName: '' });
  const [response, setResponse] = useState<PersonRespModel | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // สั่งให้ browser ไม่ reload หน้า เมื่อ submit form

    // const result = await callByFetch();
    const result = await callByAxios();
    setResponse(result);
  };

  // ********************** ใช้ fetch API ***********************************
  async function callByFetch() {
    const res = await fetch('http://localhost:8080/ws-server-rest-jee10/webapi/names', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await res.json();
  }

  // ********************** ใช้ axios library ***********************************
  async function callByAxios() {
    const response = await axios.post<PersonRespModel>('http://localhost:8080/ws-server-rest-jee10/webapi/names', data);
    return response.data;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="firstName">First Name:</label>
        <InputText
          id="firstName"
          value={data.firstName}
          className="w-full"
          onChange={(e) => setData((v) => ({ ...v, firstName: e.target.value }))}
        />
      </div>
      <div className="field">
        <label htmlFor="lastName">Last Name:</label>
        <InputText
          id="lastName"
          value={data.lastName}
          className="w-full"
          onChange={(e) => setData((v) => ({ ...v, lastName: e.target.value }))}
        />
      </div>
      <Button
        type="submit"
        label="Submit"
      />
      <div className="mt-3">
        <b>Result:</b> {response?.fullName}
      </div>
    </form>
  );
}
