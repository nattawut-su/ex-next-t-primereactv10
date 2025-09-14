import { UserList } from '@/resources/feature/components/user-list.component';
import UserModel from '@/resources/feature/models/user.inferface';

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserModel[] = await res.json();
  console.log('users ------>');

  return <UserList users={users} />;
}
