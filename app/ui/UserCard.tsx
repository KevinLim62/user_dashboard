"use client";

import { User } from "../lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/Card";
import Image from "next/image";

type UserCardProps = {
  user: User;
  className?: string;
};

const UserCard: React.FC<UserCardProps> = ({ user, className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex w-fit items-center space-x-3">
          <Image
            src={user.avatar}
            alt={user.name}
            width={100}
            height={100}
            quality={70}
            className="rounded-full w-10 h-10"
          />
          <div className="text-xl">{user.name}</div>
        </CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        {user.street}, {user.city}
      </CardFooter>
    </Card>
  );
};

export default UserCard;
