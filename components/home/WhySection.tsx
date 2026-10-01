import React from "react";
import {
  Tv,
  ShieldCheck,
  Zap,
  MonitorSmartphone,
  Headphones,
  ListFilter,
  Flame,
} from "lucide-react";

export function WhySection() {
  const benefits = [
    {
      icon: Tv,
      title: "Ultra HD and 4K Resolution",
      description:
        "Enjoy crystal clear stream resolutions with vivid color accuracy and 60 FPS motion smoothness on compatible screens.",
      theme: "gold",
      bgClass: "bg-white border-2 border-gold-300/80 hover:border-gold-500 hover:shadow-glow-gold",
      iconBg: "bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 shadow-gold-400/25",
      accentText: "text-amber-700",
      badgeText: "Native 4K Clarity",
      badgeBg: "bg-amber-50 border border-gold-200 text-amber-900",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Server Availability",
      description:
        "Engineered with redundant edge load balancers to deliver reliable, buffer free uptime during high demand peak viewing hours.",
      theme: "ruby",
      bgClass: "bg-white border-2 border-ruby-200/80 hover:border-ruby-500 hover:shadow-glow-ruby",
      iconBg: "bg-gradient-to-tr from-ruby-600 to-ruby-500 text-white shadow-ruby-500/25",
      accentText: "text-ruby-700",
      badgeText: "Zero Outage Cluster",
      badgeBg: "bg-ruby-50 border border-ruby-200 text-ruby-900",
    },
    {
      icon: Zap,
      title: "Instant Activation Delivery",
      description:
        "Your access parameters, Xtream codes, and personalized setup instructions are delivered within minutes of order completion.",
      theme: "purple",
      bgClass: "bg-white border-2 border-brand-200/80 hover:border-brand-500 hover:shadow-glow-purple",
      iconBg: "bg-gradient-to-tr from-brand-600 to-brand-500 text-white shadow-brand-500/25",
      accentText: "text-brand-700",
      badgeText: "Automated Setup",
      badgeBg: "bg-brand-50 border border-brand-200 text-brand-900",
    },
    {
      icon: MonitorSmartphone,
      title: "Cross Platform Flexibility",
      description:
        "Access your subscription smoothly on Smart TVs, Android boxes, Firestick, Apple TV, iOS, Android, Windows, and macOS.",
      theme: "gold",
      bgClass: "bg-white border-2 border-gold-300/80 hover:border-gold-500 hover:shadow-glow-gold",
      iconBg: "bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 shadow-gold-400/25",
      accentText: "text-amber-700",
      badgeText: "Universal Multi Screen",
      badgeBg: "bg-amber-50 border border-gold-200 text-amber-900",
    },
    {
      icon: ListFilter,
      title: "Comprehensive Electronic Guide",
      description:
        "Stay up to date with real time EPG schedules, upcoming sports fixtures, and categorized channel navigation.",
      theme: "ruby",
      bgClass: "bg-white border-2 border-ruby-200/80 hover:border-ruby-500 hover:shadow-glow-ruby",
      iconBg: "bg-gradient-to-tr from-ruby-600 to-ruby-500 text-white shadow-ruby-500/25",
      accentText: "text-ruby-700",
      badgeText: "Live Sync EPG",
      badgeBg: "bg-ruby-50 border border-ruby-200 text-ruby-900",
    },
    {
      icon: Headphones,
      title: "24/7 Dedicated Support",
      description:
        "Knowledgeable support specialists are on call around the clock to assist you with installation, app configuration, or inquiries.",
      theme: "purple",
      bgClass: "bg-white border-2 border-brand-200/80 hover:border-brand-500 hover:shadow-glow-purple",
      iconBg: "bg-gradient-to-tr from-brand-600 to-brand-500 text-white shadow-brand-500/25",
      accentText: "text-brand-700",
      badgeText: "Live Human Help",
      badgeBg: "bg-brand-50 border border-brand-200 text-brand-900",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-ruby-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-50 via-ruby-50 to-gold-50 border border-brand-200 text-brand-900 text-xs font-black shadow-sm">
            <Flame className="w-3.5 h-3.5 text-brand-600" />
            <span>Engineered For Superior Performance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span>?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Engineered with modern streaming protocols to ensure seamless Premium IPTV playback, responsive navigation, and dependable connectivity across all your devices.
          </p>
        </div>

        {/* Benefit Grid with High Color Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl ${benefit.bgClass} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-md`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl ${benefit.iconBg} border flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${benefit.badgeBg}`}>
                      {benefit.badgeText}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-950 mb-3 group-hover:text-brand-600 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className={benefit.accentText}>Premium IPTV Standard</span>
                  <span className="text-slate-900">✓ Included</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhySection;
