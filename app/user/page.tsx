import Link from "next/link";
import { retrieveUsers } from "../lib/actions/users";
import { User } from "../lib/types";
import UserCard from "../ui/UserCard";

export default async function UserPage() {
  const users: User[] = await retrieveUsers();

  return (
    <section className="flex flex-col items-center justify-center p-24">
      <h1 className="font-bold text-4xl">User Lists</h1>
      <div className="grid grid-cols-3 gap-5 pt-5">
        {users.map((user) => (
          <Link href={`/user/${user.id}`} key={user.id}>
            <UserCard user={user} className="hover:scale-105 transition-all" />
          </Link>
        ))}
      </div>
    </section>
  );
}
