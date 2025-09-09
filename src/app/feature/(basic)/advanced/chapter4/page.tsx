'use client';
import UserModel from '@/models/user.inferface';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const axiosApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// เปลี่ยนได้ ถ้าจะใช้ fetch
async function axiosUsers(): Promise<UserModel[]> {
  console.log('เรียก API จริง (fetch ใหม่)');
  const response = await axiosApi.get<UserModel[]>('/users');
  if (response.status < 200 || response.status >= 300) {
    throw new Error('response was not ok');
  }
  return response.data;
}

export default function Page() {
  const router = useRouter();
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: axiosUsers,
    staleTime: 1000 * 100, // 100 วินาทีถือว่า fresh
  });

  // บอกสถานะใน console
  if (isLoading) console.log('กำลังโหลดครั้งแรก → ยังไม่มี cache');
  if (!isLoading && isFetching) console.log('ใช้ cache แสดงก่อน + กำลัง refetch');
  if (!isLoading && !isFetching) console.log('ใช้ cache หรือ fetch เสร็จแล้ว');

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div>
      <p>{isFetching ? 'กำลังอัปเดต...' : 'ข้อมูลจาก cache หรือ fetch ล่าสุด'}</p>
      <ul>
        {data?.map((u) => (
          <li key={u.id}>
            {u.name}
            <button
              onClick={() => {
                router.push(`/advanced/chapter4/${u.id}`);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
