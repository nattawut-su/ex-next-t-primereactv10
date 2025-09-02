'use client';
import UserModel from '@/models/user.inferface';
import { useState } from 'react';

interface Props {
  readonly users: UserModel[];
}
export function UserList(props: Props) {
  const [filter, setFilter] = useState('');
  console.log('UserList props.users in client');
  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {props.users
          .filter((u) => u.name.toLowerCase().includes(filter.toLowerCase()))
          .map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
      </ul>
    </div>
  );
}
