'use client';

import { useSearchParams } from 'next/navigation';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const fname = searchParams.get('fname') || '';
  const lname = searchParams.get('lname') || '';

  return (
    <div>
      <h2>Result</h2>
      <div>
        <b>First Name:</b> {fname}
      </div>
      <div>
        <b>Last Name:</b> {lname}
      </div>
    </div>
  );
}
