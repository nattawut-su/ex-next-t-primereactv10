'use client';
import { InputFormCustom } from '@/resources/feature/components/input-form-custom';
import { userSchema } from '@/resources/feature/lib/validate/user-schema';
import UserFormModel from '@/resources/feature/models/UserModel';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

export default function Page() {
  const [submitted, setSubmitted] = useState<UserFormModel | null>(null);

  const methods = useForm<UserFormModel>({
    resolver: zodResolver(userSchema as z.ZodType<UserFormModel, UserFormModel>),
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

  const onSubmit = (data: UserFormModel) => {
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
