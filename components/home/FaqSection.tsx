"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare } from "lucide-react";
import { faqItems } from "@/lib/faq";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-purple-50/20 to-white border-b border-slate-100 relative overflow-hidden" id="faq">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[400px] bg-brand-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[400px] bg-ruby-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-50 via-ruby-50 to-gold-50 border border-brand-200 text-brand-900 text-xs font-black shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Everything You Need to Know About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Got questions about our Premium IPTV service, activation, compatibility, or support? Find clear answers below.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={cn(
                  "rounded-2xl transition-all duration-300 overflow-hidden shadow-sm",
                  isOpen
                    ? "bg-purple-50/40 border-2 border-brand-400 shadow-md shadow-brand-500/10"
                    : "bg-white border border-slate-200 hover:border-brand-300 hover:bg-slate-50/50"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className="font-bold text-slate-950 text-base sm:text-lg pr-2">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-brand-600 shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180 text-brand-700" : ""
                    )}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-6 pb-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-brand-100 font-normal"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-white border-2 border-gold-400 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-gold-400/25">
              <MessageSquare className="w-7 h-7" />
            </div>
            <div>
              <p className="font-black text-slate-950 text-lg">Have more specific questions?</p>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Our technical support specialists are ready to help 24/7.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm text-slate-950 bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400 hover:from-amber-400 hover:to-gold-300 shadow-md shadow-gold-400/20 hover:scale-105 transition-all shrink-0"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FaqSection;
