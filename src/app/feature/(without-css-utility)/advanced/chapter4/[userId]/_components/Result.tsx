'use client';
import UserModel from '@/resources/feature/models/user.inferface';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface ResultProps {
  readonly id: string;
}

const axiosApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function getUserById(id: string): Promise<UserModel> {
  console.log('[Result] เรียก API จริง (fetch ใหม่)');
  const response = await axiosApi.get<UserModel>(`/users/${id}`);
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Failed to fetch user');
  }
  return response.data;
}

export function Result({ id }: ResultProps) {
  const router = useRouter();
  const { data, isLoading, isFetching, isError, error } = useQuery<UserModel>({
    queryKey: ['user', id],
    queryFn: () => getUserById(id),
    staleTime: 1000 * 100, // 100 วินาทีถือว่า fresh
  });

  if (isLoading) console.log('Result กำลังโหลดครั้งแรก → ยังไม่มี cache');
  if (!isLoading && isFetching) console.log('Result ใช้ cache แสดงก่อน + กำลัง refetch');
  if (!isLoading && !isFetching) console.log('Result ใช้ cache หรือ fetch เสร็จแล้ว');

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;
  return (
    <div>
      <h2>Result</h2>
      <div>
        <b>username:</b> {data?.username}
      </div>
      <div>
        <b>email:</b> {data?.email}
      </div>
      <br />
      <button onClick={() => router.back()}>Show User ID</button>
    </div>
  );
}
