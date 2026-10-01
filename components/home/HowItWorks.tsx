import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Subscription Plan",
      description:
        "Select the access duration that meets your needs (1, 3, 6, or 12 Months) with no hidden fees or locked contracts.",
      badge: "Step 1",
      bgClass: "bg-white border-2 border-brand-200 hover:border-brand-500 hover:shadow-glow-purple",
      numberGrad: "from-brand-600 via-brand-500 to-brand-400",
      badgeColor: "bg-brand-50 border-brand-200 text-brand-900",
    },
    {
      number: "02",
      title: "Receive Instant Connection Details",
      description:
        "Your unique server URL, username, password, and M3U link are delivered immediately upon order confirmation.",
      badge: "Step 2",
      bgClass: "bg-white border-2 border-ruby-200 hover:border-ruby-500 hover:shadow-glow-ruby",
      numberGrad: "from-ruby-600 via-ruby-500 to-ruby-400",
      badgeColor: "bg-ruby-50 border-ruby-200 text-ruby-900",
    },
    {
      number: "03",
      title: "Configure App & Start Watching",
      description:
        "Input your credentials into your preferred IPTV player on your TV, phone, or computer and enjoy instant 4K streaming.",
      badge: "Step 3",
      bgClass: "bg-white border-2 border-gold-300 hover:border-gold-500 hover:shadow-glow-gold",
      numberGrad: "from-amber-600 via-gold-500 to-amber-400",
      badgeColor: "bg-amber-50 border-gold-200 text-amber-900",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-purple-50/20 to-white border-b border-slate-100 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[400px] bg-brand-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-ruby-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-50 via-ruby-50 to-gold-50 border border-brand-200 text-brand-900 text-xs font-black shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Simple 3 Step Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span> Works
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Getting started with Premium IPTV takes less than five minutes from subscription selection to live playback.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl ${step.bgClass} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-md`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.numberGrad}`}>
                    {step.number}
                  </span>
                  <span className={`px-3 py-1 rounded-full border text-xs font-black uppercase tracking-wider ${step.badgeColor}`}>
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-950 mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-brand-700 font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Quick & Automated Setup</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <Link
            href="/setup"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm text-slate-950 bg-gradient-to-r from-gold-400 to-gold-300 hover:from-gold-300 hover:to-gold-200 shadow-md shadow-gold-400/20 hover:scale-105 transition-all"
          >
            <span>View Complete Step by Step Setup Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
