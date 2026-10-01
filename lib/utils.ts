import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCanonicalUrl(path: string = ""): string {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://premiumiptv.example.com").replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath === "/" ? "" : cleanPath}`;
}
