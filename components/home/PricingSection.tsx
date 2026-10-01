import React from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { pricingPlans } from "@/lib/pricing";

export function PricingSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-100 relative overflow-hidden" id="pricing">
      {/* Background Multi-Color Glow Nebulae */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[500px] bg-ruby-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-50 via-ruby-50 to-gold-50 border border-brand-200 text-brand-900 text-xs font-black shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Transparent Subscription Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span> Plan
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Straightforward Premium IPTV pricing with all features included. Instant activation, 99.9% server stability, and no long term contractual obligations.
          </p>
        </div>

        {/* Pricing Cards Grid with Distinct Theme Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const isPopular = plan.popular;
            
            // Color theme assignments
            let cardBg = "bg-white border-2 border-brand-200 hover:border-brand-500 hover:shadow-glow-purple";
            let btnClass = "bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white shadow-md shadow-brand-500/25";
            
            if (index === 1) {
              cardBg = "bg-white border-2 border-ruby-200 hover:border-ruby-500 hover:shadow-glow-ruby";
              btnClass = "bg-gradient-to-r from-ruby-600 to-ruby-500 hover:from-ruby-700 hover:to-ruby-600 text-white shadow-md shadow-ruby-500/25";
            } else if (index === 2) {
              cardBg = "bg-white border-2 border-purple-300 hover:border-brand-500 hover:shadow-glow-purple";
              btnClass = "bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500 hover:from-brand-700 hover:via-ruby-700 hover:to-amber-600 text-white shadow-md";
            } else if (isPopular) {
              cardBg = "bg-gradient-to-b from-amber-50/60 to-white border-2 border-gold-400 shadow-xl shadow-gold-400/20 lg:-translate-y-3";
              btnClass = "bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400 hover:from-amber-400 hover:to-gold-300 text-slate-950 shadow-lg shadow-gold-400/30 font-black";
            }

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-md ${cardBg}`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                    <span
                      className={`inline-block px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md whitespace-nowrap ${
                        isPopular
                          ? "bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500 text-white shadow-brand-500/30 border border-white"
                          : "bg-white border-2 border-brand-300 text-brand-900 shadow-sm"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Duration */}
                  <div className="mb-4">
                    <h3 className="text-xl font-black text-slate-950 mb-1">{plan.name}</h3>
                    <p className="text-xs text-slate-600 font-medium">{plan.description}</p>
                  </div>

                  {/* Price & Period */}
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-slate-950 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 font-bold">/{plan.duration}</span>
                    </div>

                    {plan.originalPrice && (
                      <div className="mt-1.5 flex items-center gap-2 text-xs">
                        <span className="line-through text-slate-400">{plan.originalPrice}</span>
                        <span className="text-ruby-700 font-bold bg-ruby-50 px-2 py-0.5 rounded border border-ruby-200">Special Discount</span>
                      </div>
                    )}

                    <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-black text-slate-900">
                      <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                      <span>{plan.connectionCount}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      Included in Plan:
                    </p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="pt-4">
                  <Link
                    href={plan.ctaLink}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${btnClass}`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <p className="text-center text-[11px] text-slate-500 mt-3 flex items-center justify-center gap-1 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Instant Automated Delivery</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          <p>
            * All Premium IPTV subscriptions include full access to server updates, high definition streaming formats, and dedicated 24/7 technical customer support. No automated recurring contract locks.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
