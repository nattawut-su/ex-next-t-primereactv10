'use client';
import PersonModel from '@/resources/feature/models/person';
import { useState, useTransition } from 'react';
import { personApiClient as axiosClient } from '@/resources/feature/lib/api/person/Impl/personApiClient.axios';

export default function Page() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [axiosData, setAxiosData] = useState<PersonModel[]>([]);
  const [isPending, startTransition] = useTransition();
  const handleSubmit = () => {
    setResponse('Search Success');
    startTransition(async () => {
      console.log('Searching for:', query);
      const data = await axiosClient.getPersonsDelay();
      setAxiosData(data);
    });
  };
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <button
        onClick={handleSubmit}
        disabled={isPending}
      >
        Search
      </button>
      <p>{response}</p>
      {isPending && <p>Loading...</p>}
      {!isPending && (
        <ul>
          {axiosData.map((person) => (
            <li key={person.id}>
              {person.fname} {person.lname}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
