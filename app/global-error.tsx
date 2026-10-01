"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { RefreshCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-white text-slate-950 min-h-screen flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-2xl">
          <div className="w-20 h-20 rounded-3xl bg-white border-2 border-slate-200 p-2 flex items-center justify-center mx-auto shadow-sm">
            <Image
              src="/images/logo.png"
              alt="Premium IPTV Logo"
              width={60}
              height={60}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black text-slate-950">Application Encountered an Error</h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              A temporary issue occurred while rendering the page. Click below to reload.
            </p>
          </div>

          <button
            type="button"
            onClick={() => reset()}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl font-black text-base text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/25 transition-all"
          >
            <RefreshCcw className="w-5 h-5" />
            <span>Reload Application</span>
          </button>
        </div>
      </body>
    </html>
  );
}
