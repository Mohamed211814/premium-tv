import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Zap, Shield, Sparkles, CheckCircle, Trophy } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-slate-950 border-b border-slate-100">
      {/* 1. Cinematic Background Image (Football Stadium & Movie Light Trails) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Live Football and Blockbuster Movies Streaming"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Multi-layered cinematic gradient overlays for contrast and smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/60 via-transparent to-ruby-950/60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      </div>

      {/* 2. Soft Colorful Ambient Glows */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[400px] bg-brand-500/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-20 right-1/3 w-[500px] h-[400px] bg-ruby-500/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/15 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 3. Main Centered Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Centered Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-gold-300/40 text-white text-xs font-black shadow-lg mb-6 hover:border-gold-300 transition-colors">
          <Sparkles className="w-4 h-4 text-gold-300 animate-spin" style={{ animationDuration: "8s" }} />
          <span className="tracking-wide uppercase text-gold-200">Ultra Fast Live Football & Cinema Platform</span>
        </div>

        {/* Centered H1 Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.14] drop-shadow-lg max-w-4xl mx-auto">
          Experience Ultra Fast High Definition Streaming with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-amber-300 to-gold-400 drop-shadow-md">
            Premium IPTV
          </span>
        </h1>

        {/* Centered Description */}
        <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow">
          Stream live football matches, worldwide sports, blockbuster movies, and international TV channels on your Smart TV, smartphone, tablet, or PC with Premium IPTV zero lag and instant activation.
        </p>

        {/* Centered Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl font-black text-base text-slate-950 bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400 hover:from-amber-400 hover:to-gold-300 shadow-xl shadow-gold-400/30 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <span>View Subscription Plans</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/setup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white shadow-lg backdrop-blur-md hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Play className="w-4 h-4 text-gold-300 fill-gold-300" />
            <span>How to Setup</span>
          </Link>
        </div>

        {/* Centered Trust Badges Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold shadow-md">
            <div className="w-8 h-8 rounded-xl bg-gold-400 flex items-center justify-center text-slate-950 shrink-0 shadow-sm">
              <CheckCircle className="w-4 h-4 text-black" />
            </div>
            <div>
              <p className="text-white font-black text-xs">Instant Activation</p>
              <p className="text-gold-200/80 text-[10px] font-medium">Ready in minutes</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold shadow-md">
            <div className="w-8 h-8 rounded-xl bg-ruby-600 flex items-center justify-center text-white shrink-0 shadow-sm">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white font-black text-xs">Live Football & 4K</p>
              <p className="text-ruby-200/80 text-[10px] font-medium">60 FPS Smooth</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold shadow-md">
            <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center text-white shrink-0 shadow-sm">
              <Zap className="w-4 h-4 fill-white text-white" />
            </div>
            <div>
              <p className="text-white font-black text-xs">Anti Freeze V2</p>
              <p className="text-purple-200/80 text-[10px] font-medium">Bufferless streams</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold shadow-md">
            <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-sm">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-black text-xs">99.9% Server Uptime</p>
              <p className="text-emerald-200/80 text-[10px] font-medium">Stable network</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
