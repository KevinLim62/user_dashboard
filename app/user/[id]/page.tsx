import { retrieveUserById } from "@/app/lib/actions/users";
import { User } from "@/app/lib/types";
import UserCard from "@/app/ui/UserCard";

export default async function SingleUserPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const user: User = await retrieveUserById(params.id);

  return (
    <section className="flex flex-col items-center justify-center p-24">
      <h1 className="font-bold text-4xl">{user.name}</h1>
      <UserCard user={user} className="w-[500px]" />
    </section>
  );
}
