"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Tv,
  Cast,
  Smartphone,
  Laptop,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { generalSetupSteps, deviceGuides, troubleshootingList } from "@/lib/setup-data";
import { cn } from "@/lib/utils";

export function SetupGuidesView() {
  const [activeTab, setActiveTab] = useState<string>("smart-tv");
  const [openTroubleId, setOpenTroubleId] = useState<string | null>("troubleshoot-buffering");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        if (deviceGuides.some((g) => g.id === hash)) {
          setActiveTab(hash);
        } else if (troubleshootingList.some((t) => t.id === hash)) {
          setOpenTroubleId(hash);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const activeGuide = deviceGuides.find((g) => g.id === activeTab) || deviceGuides[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Tv":
        return <Tv className="w-5 h-5" />;
      case "Cast":
        return <Cast className="w-5 h-5" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5" />;
      case "Laptop":
        return <Laptop className="w-5 h-5" />;
      default:
        return <Tv className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-24">
      
      {/* 1. General Getting Started 3 Step Section */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-50/80 via-pink-50/80 to-amber-50/80 border-2 border-brand-200 shadow-md">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-900 border border-brand-200 text-xs font-black">
            <Sparkles className="w-4 h-4 text-brand-600" />
            <span>Getting Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Universal 3 Step Setup Overview
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Every Premium IPTV connection follows three core steps regardless of your chosen hardware:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {generalSetupSteps.map((step, sIdx) => {
            let stepBg = "bg-white border-2 border-brand-200";
            let numColor = "bg-brand-500 text-white";
            if (sIdx === 0) {
              stepBg = "bg-white border-2 border-gold-300";
              numColor = "bg-gold-400 text-slate-950";
            } else if (sIdx === 1) {
              stepBg = "bg-white border-2 border-ruby-200";
              numColor = "bg-ruby-500 text-white";
            }

            return (
              <div
                key={step.stepNumber}
                className={`p-6 rounded-2xl ${stepBg} space-y-3 flex flex-col justify-between shadow-sm`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-9 h-9 rounded-xl ${numColor} flex items-center justify-center font-black text-sm shadow-sm`}>
                      {step.stepNumber}
                    </span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Quick Step</span>
                  </div>
                  <h3 className="font-black text-slate-950 text-base">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">{step.description}</p>
                </div>
                {step.tip && (
                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <strong className="text-brand-700">Tip:</strong> {step.tip}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Device Specific Detailed Guides (Tabs) */}
      <section className="space-y-8" id="devices">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Device Specific Configuration Guides
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select your streaming device below to view exact step by step Premium IPTV setup instructions and recommended applications.
          </p>
        </div>

        {/* Device selector tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 max-w-3xl mx-auto shadow-inner">
          {deviceGuides.map((guide) => {
            const isActive = activeTab === guide.id;
            return (
              <button
                key={guide.id}
                type="button"
                onClick={() => {
                  setActiveTab(guide.id);
                  window.history.replaceState(null, "", `#${guide.id}`);
                }}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  isActive
                    ? "bg-white text-slate-950 shadow-md font-black border border-slate-200/80 scale-105"
                    : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
                )}
              >
                {getIcon(guide.iconName)}
                <span>{guide.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Guide Content Card */}
        <div
          id={activeGuide.id}
          className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-brand-200 space-y-8 shadow-xl shadow-brand-500/10 transition-all duration-300"
        >
          {/* Guide Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 flex items-center justify-center shadow-md shadow-gold-400/25">
                  {getIcon(activeGuide.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-950">{activeGuide.name}</h3>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Recommended Apps: <span className="text-brand-700 font-bold">{activeGuide.recommendedApps.join(", ")}</span>
                  </p>
                </div>
              </div>
            </div>

            <span className="px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-900 text-xs font-black shadow-sm self-start md:self-auto">
              {activeGuide.badge}
            </span>
          </div>

          {/* Steps List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeGuide.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-400 transition-colors space-y-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-ruby-600 text-white flex items-center justify-center font-black text-xs shadow-sm">
                    {step.stepNumber}
                  </span>
                  <h4 className="font-bold text-slate-950 text-base">{step.title}</h4>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-11">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Xtream Codes format explanation */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-700 shadow-inner">
            <p className="font-black text-slate-950 text-sm">Required Information Format:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 font-mono font-bold">
              <div className="p-3.5 rounded-xl bg-white border border-brand-200 shadow-sm">
                <span className="text-slate-500 block text-[10px] uppercase font-sans">Server URL</span>
                <span className="text-brand-700 text-xs">http://server.example.com:8080</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-ruby-200 shadow-sm">
                <span className="text-slate-500 block text-[10px] uppercase font-sans">Username</span>
                <span className="text-ruby-700 text-xs">your_username</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-gold-300 shadow-sm">
                <span className="text-slate-500 block text-[10px] uppercase font-sans">Password</span>
                <span className="text-amber-700 text-xs">your_secure_password</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Troubleshooting Section */}
      <section className="space-y-8" id="troubleshooting">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ruby-50 border border-ruby-200 text-ruby-900 text-xs font-black shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5 text-ruby-600" />
            <span>Problem Resolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Troubleshooting & Frequently Encountered Issues
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Solve Premium IPTV connection, buffering, audio sync, or playlist loading issues with our verified diagnostics.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {troubleshootingList.map((item) => {
            const isOpen = openTroubleId === item.id;
            return (
              <div
                key={item.id}
                className={cn(
                  "rounded-2xl transition-all duration-300 overflow-hidden shadow-sm",
                  isOpen
                    ? "bg-pink-50/40 border-2 border-ruby-400 shadow-md shadow-ruby-500/10"
                    : "bg-white border border-slate-200 hover:border-ruby-300 hover:bg-slate-50/50"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenTroubleId(isOpen ? null : item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ruby-500"
                  aria-expanded={isOpen}
                  aria-controls={`trouble-${item.id}`}
                >
                  <div>
                    <h3 className="font-bold text-slate-950 text-base sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      Symptom: {item.symptom}
                    </p>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-ruby-600 shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180 text-ruby-700" : ""
                    )}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`trouble-${item.id}`}
                    className="px-6 pb-6 pt-2 border-t border-ruby-100 space-y-3"
                  >
                    <p className="text-xs font-black text-ruby-700 uppercase tracking-wider">
                      Recommended Solutions:
                    </p>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      {item.solution.map((sol, solIdx) => (
                        <li key={solIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Support Desk CTA Banner */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-gold-400 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950">Still having trouble connecting to Premium IPTV?</h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Our 24/7 technical team can guide you directly through configuring your specific TV model, streaming device, or Premium IPTV app.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-black text-base text-slate-950 bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400 hover:from-amber-400 hover:to-gold-300 shadow-xl shadow-gold-400/25 hover:scale-105 transition-all shrink-0"
        >
          <span>Contact 24/7 Support Desk</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

    </div>
  );
}

export default SetupGuidesView;
