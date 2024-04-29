import ProgressBar from "@/app/ui/ProgressBar";
import { Suspense } from "react";
import { UserListSkeleton } from "@/app/ui/Skeleton";
import UserList from "@/app/ui/UserList";

export default async function UserPage() {
  return (
    <>
      <ProgressBar />
      <section className="flex flex-col items-center justify-center p-24">
        <h1 className="font-bold text-4xl">User Lists</h1>
        <Suspense fallback={<UserListSkeleton />}>
          <UserList />
        </Suspense>
      </section>
    </>
  );
}
