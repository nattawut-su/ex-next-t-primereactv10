'use client';
import usePerson from '@/resources/feature/hooks/usePerson';

export default function ResultPage() {
  const { person } = usePerson();

  return (
    <div>
      <h2>Result</h2>
      <div>
        <b>First Name:</b> {person?.fname}
      </div>
      <div>
        <b>Last Name:</b> {person?.lname}
      </div>
    </div>
  );
}
