import { UserList } from '@/components/user-list.component';
import UserModel from '@/models/user.inferface';

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserModel[] = await res.json();
  console.log('users ------>', users);

  return <UserList users={users} />;
}
