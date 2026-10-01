"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RefreshCcw, Home, MessageSquare } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fcfaff] via-[#fff8fa] to-white relative overflow-hidden">
      <div className="max-w-md w-full text-center space-y-8 p-8 sm:p-10 rounded-3xl bg-white border-2 border-brand-200 shadow-2xl shadow-brand-500/10 relative z-10">
        <div className="w-20 h-20 rounded-3xl bg-white border-2 border-brand-300 p-2 flex items-center justify-center mx-auto shadow-md">
          <Image
            src="/images/logo.png"
            alt="Premium IPTV Logo"
            width={60}
            height={60}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-950">Something went wrong</h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            We encountered a temporary processing issue. Please try refreshing or return to the homepage.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl font-black text-base text-slate-950 bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400 hover:from-amber-400 hover:to-gold-300 shadow-lg shadow-gold-400/25 hover:scale-105 transition-all"
          >
            <RefreshCcw className="w-5 h-5" />
            <span>Try Again</span>
          </button>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl text-xs font-black text-slate-900 bg-purple-50 hover:bg-purple-100 border border-brand-200 transition-colors shadow-sm"
            >
              <Home className="w-4 h-4 text-brand-600" />
              <span>Homepage</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl text-xs font-black text-slate-900 bg-pink-50 hover:bg-pink-100 border border-ruby-200 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-ruby-600" />
              <span>Contact Desk</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
