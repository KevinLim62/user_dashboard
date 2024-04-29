import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dateFormat = (dateString: string) => {
  const date = new Date(dateString);

  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};
