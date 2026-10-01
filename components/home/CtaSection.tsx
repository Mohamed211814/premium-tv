import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Tv } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500 p-8 sm:p-12 lg:p-16 text-center shadow-2xl shadow-brand-500/20 border-2 border-gold-400">
          
          {/* Ambient inner glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs font-black shadow-sm">
              <Sparkles className="w-4 h-4 fill-white text-white" />
              <span>Instant Setup & Automated Activation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              Ready to Upgrade to{" "}
              <span className="text-gold-300 drop-shadow-md">
                Premium IPTV
              </span>
              ?
            </h2>

            <p className="text-base sm:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed font-medium">
              Join thousands of viewers enjoying bufferless Premium IPTV 4K streams, full EPG guides, and responsive 24/7 customer support. Get connected in minutes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl font-black text-base text-slate-950 bg-white hover:bg-gold-50 shadow-xl shadow-black/15 hover:scale-105 transition-all duration-300"
              >
                <span>Select Your Plan Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/setup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-base text-white bg-black/30 hover:bg-black/40 border-2 border-white/50 hover:border-white hover:scale-105 shadow-lg transition-all duration-300 backdrop-blur-md"
              >
                <Tv className="w-4 h-4 text-gold-300" />
                <span>Explore Setup Guides</span>
              </Link>
            </div>

            {/* Micro badges below CTA */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white font-bold">
              <span className="flex items-center gap-2 bg-black/20 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-gold-300 fill-gold-300" /> Instant Activation
              </span>
              <span className="flex items-center gap-2 bg-black/20 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-gold-300" /> 99.9% Uptime Guarantee
              </span>
              <span className="flex items-center gap-2 bg-black/20 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-gold-300 fill-gold-300" /> No Contract Locks
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CtaSection;
