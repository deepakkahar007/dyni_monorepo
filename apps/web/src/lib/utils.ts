import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const Wait = async (ms: number) => {
  return new Promise(res => setTimeout(res, ms * 1000))
}

