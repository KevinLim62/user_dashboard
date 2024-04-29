"use client";

// User Skeleton

export const UserDetailSkeleton = () => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-md min-w-[500px]`}
    >
      <div className="flex items-center p-4">
        <div className="animate-pulse h-20 w-20 rounded-full bg-gray-200" />
        <div className="flex flex-col space-y-3">
          <div className="animate-pulse ml-2 h-6 w-32 rounded-md bg-gray-200 text-sm font-medium" />
          <div className="animate-pulse ml-2 h-6 w-32 rounded-md bg-gray-200 text-sm font-medium" />
        </div>
      </div>
      <div className="flex flex-col truncate rounded-xl bg-white px-4 py-4 space-y-3">
        <div className="animate-pulse h-7 w-60 rounded-md bg-gray-200" />
        <div className="animate-pulse h-7 w-60 rounded-md bg-gray-200" />
        <div className="animate-pulse h-7 w-40 rounded-md bg-gray-200" />
        <div className="animate-pulse h-7 w-40 rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export const UserListSkeleton = () => {
  return (
    <ul className="flex flex-col space-y-3 pt-5 w-[300px]">
      {Array.from({ length: 20 }, (_, i) => (
        <li
          key={i}
          className="animate-pulse bg-slate-300 rounded-md text-lg font-medium hover:underline h-10"
        />
      ))}
    </ul>
  );
};
