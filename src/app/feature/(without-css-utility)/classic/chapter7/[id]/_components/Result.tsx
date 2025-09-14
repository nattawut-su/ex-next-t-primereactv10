'use client';
import { PersonFormModel } from '@/resources/feature/models/person';
import { useEffect, useState } from 'react';
interface ResultProps {
  readonly id: string;
}

export function Result({ id }: ResultProps) {
  const [value, setValue] = useState<PersonFormModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPersonById = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/mock-api/person/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setValue(data);
    } catch (error) {
      console.error('Error fetching person data', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log('fetching', id);
    getPersonById();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching person data</div>;

  return (
    <div>
      <h2>Result</h2>
      <div>
        <b>First Name:</b> {value?.fname}
      </div>
      <div>
        <b>Last Name:</b> {value?.lname}
      </div>
    </div>
  );
}
