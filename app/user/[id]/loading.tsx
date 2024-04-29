import { UserDetailSkeleton } from "@/app/ui/Skeleton";

export default function SingleUserLoadingPage() {
  return (
    <section className="flex flex-col items-center justify-center p-24">
      <UserDetailSkeleton />
    </section>
  );
}
