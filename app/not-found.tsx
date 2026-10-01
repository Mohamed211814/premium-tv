import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, BookOpen, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fcfaff] via-[#fff8fa] to-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-8 p-8 sm:p-10 rounded-3xl bg-white border-2 border-brand-200 shadow-2xl shadow-brand-500/10 relative z-10">
        <div className="w-24 h-24 rounded-3xl bg-white border-2 border-brand-300 p-2.5 flex items-center justify-center mx-auto shadow-md">
          <Image
            src="/images/logo.png"
            alt="Premium IPTV Logo"
            width={72}
            height={72}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="space-y-2">
          <p className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">
            404
          </p>
          <h1 className="text-2xl font-black text-slate-950">Page Not Found</h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            The page you are looking for does not exist on Premium IPTV or may have been moved.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl font-black text-base text-slate-950 bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400 hover:from-amber-400 hover:to-gold-300 shadow-lg shadow-gold-400/25 hover:scale-105 transition-all"
          >
            <Home className="w-5 h-5" />
            <span>Return to Premium IPTV Homepage</span>
          </Link>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/setup"
              className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl text-xs font-black text-slate-900 bg-purple-50 hover:bg-purple-100 border border-brand-200 transition-colors shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-brand-600" />
              <span>Setup Guide</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl text-xs font-black text-slate-900 bg-pink-50 hover:bg-pink-100 border border-ruby-200 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-ruby-600" />
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
