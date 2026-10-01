import React from "react";
import Link from "next/link";
import {
  Tv,
  Smartphone,
  Tablet,
  Laptop,
  Cast,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function SupportedDevices() {
  const devices = [
    {
      title: "Smart TVs",
      icon: Tv,
      subtitle: "Samsung, LG, Sony, TCL & Android TV",
      description:
        "Enjoy big screen 4K entertainment with dedicated smart TV apps such as IPTV Smarters, IBO Player, and Smart IPTV.",
      link: "/setup#smart-tv",
      platforms: ["Samsung Tizen", "LG webOS", "Android TV", "Google TV"],
      bgClass: "bg-white border-2 border-gold-300/80 hover:border-gold-500 hover:shadow-glow-gold",
      iconBg: "bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 shadow-gold-400/25",
      badgeBg: "bg-amber-50 text-amber-900 border border-gold-200",
    },
    {
      title: "Streaming Devices",
      icon: Cast,
      subtitle: "Amazon Firestick, Apple TV & Shield TV",
      description:
        "Ultra fast navigation and crystal clear streams using TiviMate, Downloader, or Apple TV streaming players.",
      link: "/setup#streaming-devices",
      platforms: ["Amazon Fire TV Stick", "Apple TV 4K", "Nvidia Shield", "Chromecast"],
      bgClass: "bg-white border-2 border-ruby-200/80 hover:border-ruby-500 hover:shadow-glow-ruby",
      iconBg: "bg-gradient-to-tr from-ruby-600 to-ruby-500 text-white shadow-ruby-500/25",
      badgeBg: "bg-ruby-50 text-ruby-900 border border-ruby-200",
    },
    {
      title: "Mobile Phones",
      icon: Smartphone,
      subtitle: "Apple iOS (iPhone) & Android Devices",
      description:
        "Take live TV and sports wherever you go with lightweight mobile apps and seamless 5G / Wi Fi streaming.",
      link: "/setup#mobile-devices",
      platforms: ["iOS 14+", "Android 9+", "Smarters Lite", "XCIPTV"],
      bgClass: "bg-white border-2 border-brand-200/80 hover:border-brand-500 hover:shadow-glow-purple",
      iconBg: "bg-gradient-to-tr from-brand-600 to-brand-500 text-white shadow-brand-500/25",
      badgeBg: "bg-brand-50 text-brand-900 border border-brand-200",
    },
    {
      title: "Tablets & iPads",
      icon: Tablet,
      subtitle: "Apple iPad & Android Tablets",
      description:
        "High definition portable viewing with touchscreen touch controls, multi audio selection, and subtitle support.",
      link: "/setup#mobile-devices",
      platforms: ["iPadOS", "Android Tablets", "Amazon Fire Tablet"],
      bgClass: "bg-white border-2 border-gold-300/80 hover:border-gold-500 hover:shadow-glow-gold",
      iconBg: "bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 shadow-gold-400/25",
      badgeBg: "bg-amber-50 text-amber-900 border border-gold-200",
    },
    {
      title: "Desktop Computers & Laptops",
      icon: Laptop,
      subtitle: "Windows PC & Apple macOS",
      description:
        "Stream directly through dedicated desktop software or universal media players like VLC and Smarters Pro.",
      link: "/setup#computer",
      platforms: ["Windows 10 / 11", "macOS Monterey+", "VLC Media Player"],
      bgClass: "bg-white border-2 border-ruby-200/80 hover:border-ruby-500 hover:shadow-glow-ruby",
      iconBg: "bg-gradient-to-tr from-ruby-600 to-ruby-500 text-white shadow-ruby-500/25",
      badgeBg: "bg-ruby-50 text-ruby-900 border border-ruby-200",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-100 relative overflow-hidden" id="supported-devices">
      {/* Radiant ambient mesh glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-ruby-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-50 via-ruby-50 to-gold-50 border border-brand-200 text-brand-900 text-xs font-black shadow-sm">
            <Tv className="w-3.5 h-3.5 text-brand-600" />
            <span>Universal Compatibility</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Supported Devices for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Stream your favorite Premium IPTV channels seamlessly across your preferred television, mobile, or desktop setup.
          </p>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devices.map((device, index) => {
            const Icon = device.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-3xl ${device.bgClass} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-md`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${device.iconBg} border flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${device.badgeBg}`}>
                      ★ Verified Support
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-950 mb-1 group-hover:text-brand-600 transition-colors">
                    {device.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mb-3">{device.subtitle}</p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {device.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {device.platforms.map((platform, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{platform}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={device.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900 transition-colors pt-4 border-t border-slate-100 group-hover:translate-x-1"
                >
                  <span>View {device.title} Setup Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}

          {/* Quick Support Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-600 via-ruby-600 to-amber-500 border-2 border-brand-500 transition-all duration-300 flex flex-col justify-between shadow-xl text-white hover:-translate-y-2">
            <div className="space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-white text-slate-950 text-xs font-black inline-block shadow-md">
                Need Help with Your Device?
              </span>
              <h3 className="text-2xl font-black text-white">
                Step by Step Setup Instructions
              </h3>
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                Follow our comprehensive visual walkthroughs to configure your application in under 5 minutes, or contact our 24/7 technical team.
              </p>
            </div>

            <div className="pt-6 space-y-3">
              <Link
                href="/setup"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-black text-sm text-slate-950 bg-white hover:bg-gold-50 transition-all shadow-lg hover:scale-105"
              >
                <span>Browse All Setup Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center text-xs font-bold text-white hover:text-gold-200 transition-colors py-1.5"
              >
                Contact 24/7 Support Desk
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SupportedDevices;
