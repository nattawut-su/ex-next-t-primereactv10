'use client';

import { InputText } from 'primereact/inputtext';
import { submitPerson } from './actions';
import { Button } from 'primereact/button';
import { useActionState } from 'react';

export default function Page() {
  const [state, formAction] = useActionState(submitPerson, { fullName: '' });
  return (
    <form action={formAction}>
      <div className="field">
        <label htmlFor="firstName">First Name:</label>
        <InputText
          id="int_firstName"
          name="firstName"
          className="w-full"
        />
      </div>
      <div className="field">
        <label htmlFor="lastName">Last Name:</label>
        <InputText
          id="int_lastName"
          name="lastName"
          className="w-full"
        />
      </div>
      <Button
        type="submit"
        label="Submit"
      />
      <div className="mt-3">
        <b>Result:</b> {state.fullName}
      </div>
    </form>
  );
}
