'use client';
import { useEffect, useState } from 'react';
import { personApiClient as fetchClient } from '@/lib/api/person/Impl/personApiClient.fetch';
import { personApiClient as axiosClient } from '@/lib/api/person/Impl/personApiClient.axios';
import PersonModel from '@/models/person';

export default function Page() {
  const [fetchData, setFetchData] = useState<PersonModel[]>([]);
  const [axiosData, setAxiosData] = useState<PersonModel[]>([]);

  const [fetchLoading, setFetchLoading] = useState(false);
  const [axiosLoading, setAxiosLoading] = useState(false);

  const [fetchError, setFetchError] = useState<string | null>(null);
  const [axiosError, setAxiosError] = useState<string | null>(null);

  const loadFetch = async () => {
    setFetchLoading(true);
    setFetchError(null);
    try {
      const data = await fetchClient.getPersons();
      setFetchData(data);
    } catch (e: any) {
      setFetchError(e?.message || 'Error');
    } finally {
      setFetchLoading(false);
    }
  };

  const loadAxios = async () => {
    setAxiosLoading(true);
    setAxiosError(null);
    try {
      const data = await axiosClient.getPersons();
      setAxiosData(data);
    } catch (e: any) {
      setAxiosError(e?.message || 'Error');
    } finally {
      setAxiosLoading(false);
    }
  };

  useEffect(() => {
    loadFetch();
    loadAxios();
  }, []);

  return (
    <div style={{ display: 'flex', gap: 32 }}>
      {/* Fetch Column */}
      <div style={{ flex: 1, borderRight: '1px solid #ccc', paddingRight: 16 }}>
        <h2 style={{ color: '#0070f3' }}>Fetch</h2>
        <button
          onClick={loadFetch}
          disabled={fetchLoading}
          style={{ marginBottom: 8 }}
        >
          {fetchLoading ? 'Loading...' : 'Reload'}
        </button>
        {fetchError && <div style={{ color: 'red' }}>Error: {fetchError}</div>}
        <ul>
          {fetchData.map((person: PersonModel) => (
            <li key={person.id}>
              {person.id} - {person.fname} {person.lname}
            </li>
          ))}
        </ul>
      </div>

      {/* Axios Column */}
      <div style={{ flex: 1, paddingLeft: 16 }}>
        <h2 style={{ color: '#00b386' }}>Axios</h2>
        <button
          onClick={loadAxios}
          disabled={axiosLoading}
          style={{ marginBottom: 8 }}
        >
          {axiosLoading ? 'Loading...' : 'Reload'}
        </button>
        {axiosError && <div style={{ color: 'red' }}>Error: {axiosError}</div>}
        <ul>
          {axiosData.map((person: PersonModel) => (
            <li key={person.id}>
              {person.id} - {person.fname} {person.lname}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
