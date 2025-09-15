'use client';

import React, { useState } from 'react';
import { ContactOption, PersonReqModel, PersonRespModel, SexOption, TitleOption } from '@/resources/standard/models/chapter6.PersonModel';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Card } from 'primereact/card';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function PageChapter6() {
  const [data, setData] = useState<Partial<PersonReqModel>>({});
  const [selectedContact, setSelectedContact] = useState<ContactOption | null>(null);
  const [response, setResponse] = useState<PersonRespModel | null>(null);

  const titleOptions: TitleOption[] = [
    { label: 'Mr.', value: '1' },
    { label: 'Mrs.', value: '2' },
    { label: 'Ms.', value: '3' },
    { label: 'Miss.', value: '4' },
  ];

  const sexOptions: SexOption[] = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
  ];

  const contactOptions: ContactOption[] = [
    { label: 'Phone', value: 'P' },
    { label: 'e-Mail', value: 'M' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | DropdownChangeEvent | SelectButtonChangeEvent) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...(prev as Partial<PersonReqModel>), [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const result = await callByFetch();
    const result = await callByAxios();
    setResponse(result);
  };

  // ********************** ใช้ fetch API ***********************************
  async function callByFetch() {
    const res = await fetch('http://localhost:8080/ws-server-rest-jee10/webapi/person', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await res.json();
  }

  // ********************** ใช้ axios library ***********************************
  async function callByAxios() {
    const response = await axios.post<PersonRespModel>('http://localhost:8080/ws-server-rest-jee10/webapi/person', data);
    return response.data;
  }

  return (
    <Card title="primereact Form Example">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-column justify-content-center">
          <div className="field">
            <label
              htmlFor="dd_title"
              className="mr-1"
            >
              Title :
            </label>
            <Dropdown
              id="dd_title"
              name="title"
              value={data.title}
              onChange={handleChange}
              options={titleOptions}
              optionLabel="label"
              optionValue="value"
              placeholder="Select a Title"
            />
          </div>

          <div className="field">
            <label
              htmlFor="firstName"
              className="mr-1"
            >
              First Name:
            </label>
            <InputText
              id="firstName"
              name="firstName"
              value={data.firstName ?? ''}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label
              htmlFor="lastName"
              className="mr-1"
            >
              Last Name:
            </label>
            <InputText
              id="lastName"
              name="lastName"
              value={data.lastName ?? ''}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label
              htmlFor="sex"
              className="mr-1"
            >
              sex :
            </label>
            <SelectButton
              value={data.sex}
              onChange={handleChange}
              options={sexOptions}
              name="sex"
            />
          </div>

          <div className="field">
            <div className="flex gap-3">
              {contactOptions.map((contact) => {
                return (
                  <div
                    key={contact.value}
                    className="flex align-items-center"
                  >
                    <RadioButton
                      inputId={contact.value}
                      name="contact"
                      value={contact}
                      onChange={(e: RadioButtonChangeEvent) => setSelectedContact(e.value)}
                      checked={selectedContact?.value === contact.value}
                    />
                    <label
                      htmlFor={contact.value}
                      className="ml-2"
                    >
                      {contact.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="email"
              className="mr-1"
            >
              Email:
            </label>
            <InputText
              id="email"
              name="email"
              value={data.email ?? ''}
              onChange={handleChange}
              disabled={selectedContact?.value !== 'M'}
            />
          </div>

          <div className="field">
            <label
              htmlFor="phone"
              className="mr-1"
            >
              Phone:
            </label>
            <InputText
              id="phone"
              name="phone"
              value={data.phone ?? ''}
              onChange={handleChange}
              disabled={selectedContact?.value !== 'P'}
            />
          </div>

          <Button
            type="submit"
            label="Submit"
          />
          <div className="mt-3">
            <b>Result:</b> {response?.fullName}
          </div>
        </div>
      </form>
    </Card>
  );
}
