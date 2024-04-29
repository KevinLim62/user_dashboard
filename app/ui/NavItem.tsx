"use client";

import Link from "next/link";
import { cn } from "../lib/utils";

type NavItemProps = {
  title: string;
  route: string;
  className?: string;
};

const NavItem: React.FC<NavItemProps> = ({ title, route, className }) => {
  return (
    <Link href={route}>
      <div
        className={cn(
          "hover:bg-slate-300 transition-all px-1 py-3 rounded-md w-[200px] text-center font-medium text-lg",
          className
        )}
      >
        {title}
      </div>
    </Link>
  );
};

export default NavItem;
