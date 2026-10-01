import React from "react";
import Link from "next/link";
import { Sparkles, Activity, Server, Radio, ArrowRight } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-purple-50/40 to-white border-b border-slate-100 relative overflow-hidden">
      {/* Soft atmospheric ambient lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-ruby-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Detailed Explanatory Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-50 via-ruby-50 to-gold-50 border border-brand-200 text-brand-900 text-xs font-black shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Next Generation IPTV Infrastructure</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Modern Television Streaming Powered by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">
                Premium IPTV Infrastructure
              </span>
            </h2>

            <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
              <strong className="text-brand-700 font-bold">Premium IPTV</strong> delivers television channels, on demand media, and live sporting broadcasts directly over your high speed internet connection. Unlike outdated satellite dishes or cumbersome cable boxes, Premium IPTV delivers media packets with ultra low latency, crystal clear 4K visual clarity, and universal player compatibility.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With Premium IPTV, subscribers gain instant access to high definition entertainment on any screen. Whether you are relaxing at home with your Smart TV, catching live sports on your mobile device during travel, or streaming from your laptop, the Premium IPTV network delivers an uninterrupted viewing experience backed by 99.9% server stability.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-gold-400 to-gold-300 hover:from-gold-300 hover:to-gold-200 shadow-md shadow-gold-400/20 hover:scale-105 transition-all group"
              >
                <span>Learn more about our service philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column - Technology Architecture Highlights with Colorful Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            {/* Purple Theme Card */}
            <div className="p-6 rounded-3xl bg-white border-2 border-brand-200 hover:border-brand-500 hover:shadow-glow-purple transition-all duration-300 flex items-start gap-4 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-500 border border-brand-400/40 flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-500/25">
                <Server className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-950 text-lg">High Bandwidth Network</h3>
                  <span className="text-[10px] uppercase font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">10 Gbps Edge</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Distributed streaming clusters with dedicated 10Gbps uplinks eliminate server bottlenecks even during peak sports events.
                </p>
              </div>
            </div>

            {/* Ruby Theme Card */}
            <div className="p-6 rounded-3xl bg-white border-2 border-ruby-200 hover:border-ruby-500 hover:shadow-glow-ruby transition-all duration-300 flex items-start gap-4 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-ruby-600 to-ruby-500 border border-ruby-400/40 flex items-center justify-center text-white shrink-0 shadow-md shadow-ruby-500/25">
                <Activity className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-950 text-lg">Adaptive Bitrate Streaming</h3>
                  <span className="text-[10px] uppercase font-bold text-ruby-700 bg-ruby-50 px-2 py-0.5 rounded border border-ruby-200">60 FPS 4K</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automatically adjusts stream resolution dynamically based on your bandwidth to prevent freezing and stutter.
                </p>
              </div>
            </div>

            {/* Gold Theme Card */}
            <div className="p-6 rounded-3xl bg-white border-2 border-gold-300 hover:border-gold-500 hover:shadow-glow-gold transition-all duration-300 flex items-start gap-4 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-400 to-amber-400 border border-gold-200 flex items-center justify-center text-slate-950 shrink-0 shadow-md shadow-gold-400/25">
                <Radio className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-950 text-lg">Xtream Codes & M3U</h3>
                  <span className="text-[10px] uppercase font-bold text-slate-950 bg-gold-400 px-2 py-0.5 rounded font-black shadow-sm">Universal API</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Universal API support enables simple 1 click integration with any modern IPTV player software.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default IntroSection;
