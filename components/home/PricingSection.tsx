import React from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
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

                    {plan.originalPrice ? (
                      <div className="mt-1.5 flex items-center gap-2 text-xs">
                        <span className="line-through text-slate-400">{plan.originalPrice}</span>
                        <span className="text-ruby-700 font-bold bg-ruby-50 px-2 py-0.5 rounded border border-ruby-200">Special Discount</span>
                      </div>
                    ) : (
                      <div className="mt-1.5 flex items-center gap-2 text-xs opacity-0 pointer-events-none select-none" aria-hidden="true">
                        <span>$00.00</span>
                        <span className="px-2 py-0.5 rounded">Spacer</span>
                      </div>
                    )}
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
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-sm whitespace-nowrap transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${btnClass}`}
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>

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
