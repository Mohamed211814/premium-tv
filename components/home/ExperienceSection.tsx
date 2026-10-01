import React from "react";
import { Zap, Tv, Layers, Smartphone, Volume2, Sparkles, Check } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-pink-50/30 to-white border-b border-slate-100 relative overflow-hidden">
      {/* Background colorful radiant nebulae */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-ruby-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-ruby-50 via-brand-50 to-gold-50 border border-ruby-200 text-ruby-900 text-xs font-black shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-ruby-600" />
            <span>Refined Entertainment Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span> User Experience
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Engineered from the ground up to eliminate common streaming frustrations and provide smooth, cinematic Premium IPTV viewing across all environments.
          </p>
        </div>

        {/* Feature Experience Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Feature 1: Fast Channel Switching */}
          <div className="p-8 rounded-3xl bg-white border-2 border-brand-200 hover:border-brand-500 hover:shadow-glow-purple transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 flex items-center justify-center shadow-md shadow-gold-400/25">
                <Zap className="w-7 h-7 fill-slate-950 text-slate-950" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">Instant Channel Switching (Zapping)</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Experience ultra low latency channel switching. Our optimized edge servers cache stream metadata so that transitions between channels occur in fractions of a second, just like conventional TV.
              </p>
            </div>

            {/* Speed Bar */}
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-700">Channel Switch Response Time</span>
                <span className="text-amber-800 font-black text-sm bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">&lt; 0.5s Average</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden border border-slate-200 p-0.5">
                <div className="bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500 h-2.5 rounded-full w-[95%] shadow-sm" />
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-700 pt-1 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 font-bold" /> Fast Keyframe Preloading
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 font-bold" /> Zero Lag Buffering
                </span>
              </div>
            </div>
          </div>

          {/* Feature 2: High Definition Video and Audio */}
          <div className="p-8 rounded-3xl bg-white border-2 border-ruby-200 hover:border-ruby-500 hover:shadow-glow-ruby transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-ruby-600 to-ruby-500 text-white flex items-center justify-center shadow-md shadow-ruby-500/25">
                <Volume2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">Cinematic Video & Immersive Audio</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Streams are delivered in native 1080p FHD and 4K Ultra HD formats with 60 FPS support for live sports, accompanied by crystal clear multichannel surround sound compatibility.
              </p>
            </div>

            {/* Visual Stream Spec Tags */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-brand-200 shadow-sm">
                <p className="text-brand-700 font-black text-base">4K & UHD</p>
                <p className="text-[11px] text-slate-600 font-medium">High Bitrate</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-pink-50/70 border border-ruby-200 shadow-sm">
                <p className="text-ruby-700 font-black text-base">60 FPS</p>
                <p className="text-[11px] text-slate-600 font-medium">Smooth Motion</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-gold-300 shadow-sm">
                <p className="text-amber-800 font-black text-base">Dolby 5.1</p>
                <p className="text-[11px] text-slate-600 font-medium">Clear Audio</p>
              </div>
            </div>
          </div>

          {/* Feature 3: Integrated Live Program Guide */}
          <div className="p-8 rounded-3xl bg-white border-2 border-brand-200 hover:border-brand-500 hover:shadow-glow-purple transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-500 text-white flex items-center justify-center shadow-md shadow-brand-500/25">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">Real Time Electronic Program Guide (EPG)</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Stay informed with an accurate, continuously updated television guide. View live broadcast schedules, upcoming matches, program summaries, and channel lineups directly within your app.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 text-xs space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-slate-700 font-bold">
                  <span>Live EPG Feed</span>
                  <span className="text-amber-800 font-black bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200">● Auto Synced</span>
                </div>
                <div className="flex items-center justify-between text-slate-900 font-semibold">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-ruby-500" /> Live Sports Arena 4K</span>
                  <span className="text-ruby-700 font-bold">19:30 to 21:30</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-500" /> International News HD</span>
                  <span>21:30 to 22:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Multi Screen Freedom */}
          <div className="p-8 rounded-3xl bg-white border-2 border-gold-300 hover:border-gold-500 hover:shadow-glow-gold transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 flex items-center justify-center shadow-md shadow-gold-400/25">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">Multi Screen Flexibility</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Switch seamlessly between living room television, bedside tablet, or your smartphone while commuting. Premium IPTV supports all major operating systems with uniform stream quality.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-around text-center text-xs text-slate-900 font-bold">
              <div className="flex flex-col items-center gap-2 p-2.5 rounded-2xl bg-amber-50/70 border border-gold-200 w-24">
                <Tv className="w-6 h-6 text-amber-600" />
                <span>Smart TV</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col items-center gap-2 p-2.5 rounded-2xl bg-pink-50/70 border border-ruby-200 w-24">
                <Smartphone className="w-6 h-6 text-ruby-600" />
                <span>Mobile</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col items-center gap-2 p-2.5 rounded-2xl bg-purple-50/70 border border-brand-200 w-24">
                <Layers className="w-6 h-6 text-brand-600" />
                <span>Laptop/PC</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
