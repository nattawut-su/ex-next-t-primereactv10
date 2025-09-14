'use client';

import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputFormCustomProps {
  readonly label: string;
  readonly register?: UseFormRegisterReturn;
  readonly error?: FieldError;
}

export function InputFormCustom({ label, register, error }: InputFormCustomProps) {
  return (
    <>
      <label>{label}</label>
      <input {...register} />
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </>
  );
}
