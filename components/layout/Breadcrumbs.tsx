import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbItem } from "@/lib/schema";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-600">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 text-slate-600 hover:text-brand-600 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 rounded"
          >
            <Home className="w-3.5 h-3.5 text-brand-600" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast ? (
                <span className="text-slate-950 font-black truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-slate-600 hover:text-brand-600 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 rounded"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
