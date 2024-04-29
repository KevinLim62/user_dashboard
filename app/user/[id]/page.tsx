import { retrieveUserById } from "@/app/lib/actions/users";
import { User } from "@/app/lib/types";
import UserDetail from "@/app/ui/UserDetail";

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
      <UserDetail user={user} className="min-w-[500px] shadow-md" />
    </section>
  );
}
