import Link from "next/link";
import { retrieveUsers } from "../lib/actions/users";
import { User } from "../lib/types";

export default async function UserList() {
  const users: User[] = await retrieveUsers();
  return (
    <ul className="flex flex-col space-y-3 pt-5">
      {users.map((user) => (
        <Link href={`/user/${user.id}`} key={user.id}>
          <li className="text-lg font-medium hover:underline">
            {user.id}. {user.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}
