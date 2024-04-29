"use client";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

// Base Skeleton
export const UserSkeleton = () => {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm w-[300px]`}
    >
      <div className="flex items-center p-4">
        <div className="h-10 w-10 rounded-full bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex flex-col truncate rounded-xl bg-white px-4 py-4 space-y-3">
        <div className="h-7 w-40 rounded-md bg-gray-200" />
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export const UserListingSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-4 pt-5">
      {Array.from({ length: 10 }, (_, i) => (
        <UserSkeleton key={i} />
      ))}
    </div>
  );
};
