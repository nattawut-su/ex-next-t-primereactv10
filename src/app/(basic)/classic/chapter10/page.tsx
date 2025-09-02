'use client';
import { useCounter } from '@/hooks/useCounter';

export default function Page() {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>เพิ่ม</button>
      <button onClick={decrement}>ลด</button>
      <button onClick={reset}>รีเซ็ต</button>
    </div>
  );
}
