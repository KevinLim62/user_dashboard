import { UserListingSkeleton } from "../ui/Skeleton";

export default function UserLoadingPage() {
  return (
    <section className="flex flex-col w-full items-center justify-center pt-10">
      <h1 className="font-bold text-4xl">User Lists</h1>
      <UserListingSkeleton />
    </section>
  );
}
