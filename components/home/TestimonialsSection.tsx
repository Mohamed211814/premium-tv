import React from "react";
import { Star, MessageSquareQuote, ShieldCheck, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: "t1",
      author: "David M.",
      device: "Smart TV & Firestick User",
      verified: "Verified Subscriber",
      comment:
        "The setup on my Samsung TV took less than 4 minutes. The stream stability during live sports has been flawless without stuttering.",
      rating: 5,
      bgClass: "bg-white border-2 border-gold-300/80 hover:border-gold-500 hover:shadow-glow-gold",
      avatarBg: "bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950",
      badgeColor: "bg-amber-50 text-amber-900 border border-gold-200",
    },
    {
      id: "t2",
      author: "Sarah T.",
      device: "Apple TV & iPad User",
      verified: "Verified Subscriber",
      comment:
        "Crystal clear HD quality and the EPG channel guide is always accurate. When I had a question on app settings, support responded within minutes.",
      rating: 5,
      bgClass: "bg-white border-2 border-ruby-200/80 hover:border-ruby-500 hover:shadow-glow-ruby",
      avatarBg: "bg-gradient-to-tr from-ruby-600 to-ruby-500 text-white",
      badgeColor: "bg-ruby-50 text-ruby-900 border border-ruby-200",
    },
    {
      id: "t3",
      author: "Marcus L.",
      device: "Android Box & Mobile User",
      verified: "Verified Subscriber",
      comment:
        "Excellent server performance. Channel zapping is fast and switching between my living room box and mobile while traveling is seamless.",
      rating: 5,
      bgClass: "bg-white border-2 border-brand-200/80 hover:border-brand-500 hover:shadow-glow-purple",
      avatarBg: "bg-gradient-to-tr from-brand-600 to-brand-500 text-white",
      badgeColor: "bg-brand-50 text-brand-900 border border-brand-200",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-pink-50/25 to-white border-b border-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-brand-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[400px] bg-ruby-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-ruby-50 via-brand-50 to-gold-50 border border-ruby-200 text-ruby-900 text-xs font-black shadow-sm">
            <MessageSquareQuote className="w-3.5 h-3.5 text-ruby-600" />
            <span>Customer Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span> Experience
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            See how subscribers experience our Premium IPTV high definition streaming quality, quick activation, and dedicated customer support.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl ${item.bgClass} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-md`}
            >
              <div>
                {/* Rating stars & avatar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-sm" />
                    ))}
                  </div>
                  <div className={`w-8 h-8 rounded-full ${item.avatarBg} font-black text-xs flex items-center justify-center shadow-sm`}>
                    {item.author.charAt(0)}
                  </div>
                </div>

                {/* Comment quote */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic font-medium">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-950 text-sm">{item.author}</p>
                  <p className="text-xs text-slate-500">{item.device}</p>
                </div>
                <div className={`flex items-center gap-1 text-[11px] font-black px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.verified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-slate-900 bg-white px-5 py-2.5 rounded-full border border-gold-300 font-bold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Structured customer feedback based on real subscriber experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
