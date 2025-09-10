'use server';
import { PersonRespModel } from '@/models/person';
import axios from 'axios';

export async function submitPerson(prevState: PersonRespModel, formData: FormData): Promise<PersonRespModel> {
  console.log('prevState', prevState);
  // ********************** ใช้ fetch API ***********************************
  // const response = await callByFetch(formData);
  const response = await callByAxios(formData);
  console.log('response', response);
  return response;
}

// ********************** ใช้ fetch API ***********************************
async function callByFetch(formData: FormData): Promise<PersonRespModel> {
  const res = await fetch('http://localhost:8080/ws-server-rest-jee10/webapi/names', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
    }),
  });
  return await res.json();
}

// ********************** ใช้ axios library ***********************************
async function callByAxios(formData: FormData) {
  const response = await axios.post<PersonRespModel>('http://localhost:8080/ws-server-rest-jee10/webapi/names', {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
  });
  return response.data;
}
