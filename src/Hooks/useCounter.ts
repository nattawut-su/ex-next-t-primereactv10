'use client';
import { useState } from 'react';

export function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);

  // arrow functions ⇣⇣⇣⇣⇣
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);

  // เป็นฟังก์ชันที่คืนค่า State พร้อมฟังก์ชันจัดการ
  return { count, increment, decrement, reset };
}
