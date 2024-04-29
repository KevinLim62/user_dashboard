"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/Drawer";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="min-w-screen bg-black text-white">
      <div className="flex flex-row justify-between items-center px-5 py-3">
        <Sheet>
          <SheetTrigger>
            <Menu size={30} className="ml-6" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-slate-100">
            <SheetHeader className="flex w-full items-center">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col justify-start items-center pt-5 px-3 space-y-3">
              <nav>
                <NavItem title="View Users" route="/user" />
              </nav>
              <nav>
                <NavItem title="Add User" route="/user" />
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <div>
          <nav>
            <NavItem
              title="Dashboard"
              route="/"
              className="w-fit p-3 hover:text-black"
            />
          </nav>
        </div>
        <div>
          <nav>
            <NavItem
              title="Login"
              route="/login"
              className="w-fit p-3 hover:text-black"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
