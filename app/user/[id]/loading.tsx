import { UserSkeleton } from "@/app/ui/Skeleton";

export default function SingleUserLoadingPage() {
  return (
    <section className="flex flex-col w-full items-center justify-center min-h-[80vh]">
      <UserSkeleton />
    </section>
  );
}
