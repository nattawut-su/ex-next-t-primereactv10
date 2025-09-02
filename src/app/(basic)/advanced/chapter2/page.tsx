'use client';
import { InputFormCustom } from '@/components/input-form-custom';
import { userSchema } from '@/lib/validate/user-schema';
import UserChapter2Model from '@/models/UserModel';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

export default function Page() {
  const [submitted, setSubmitted] = useState<UserChapter2Model | null>(null);

  const methods = useForm<UserChapter2Model>({
    resolver: zodResolver(userSchema as z.ZodType<UserChapter2Model, any>),
    defaultValues: {
      name: '',
      email: '',
    },
    mode: 'onSubmit', // สามารถเปลี่ยนเป็น onBlur/onChange ได้
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = methods;

  const onSubmit = (data: UserChapter2Model) => {
    console.log(data);
    setSubmitted(data);
    reset();
  };

  return (
    <>
      <h1>validate form by Zod</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div>
          <InputFormCustom
            label="Name"
            register={register('name')}
            error={errors.name}
          />
          <br />
          <InputFormCustom
            label="Email"
            register={register('email')}
            error={errors.email}
          />
          <br />
          <button
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
      {submitted && (
        <div>
          <b>Result:</b> {submitted.name} {submitted.email}
        </div>
      )}
    </>
  );
}
