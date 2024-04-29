"use client";

import { User } from "../lib/types";
import { dateFormat } from "../lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/Card";
import Image from "next/image";

type UserDetailProps = {
  user: User;
  className?: string;
};

const UserDetail: React.FC<UserDetailProps> = ({ user, className }) => {
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
            className="rounded-full w-20 h-20"
          />
          <div className="">
            <h1 className="text-2xl">{user.name}</h1>
            <h2 className="text-lg font-light">{user.email}</h2>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>Lat: {user.lat}</div>
        <div>Lng: {user.lng}</div>
        <div>Zip: {user.zip}</div>
        <div>Street: {user.street}</div>
        <div>City: {user.city}</div>
      </CardContent>
      <CardFooter>{dateFormat(user.createdAt)}</CardFooter>
    </Card>
  );
};

export default UserDetail;
