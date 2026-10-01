import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Headphones,
  Mail,
  Clock,
  Tv,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContactForm from "@/components/contact/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { getWebPageSchema, getBreadcrumbSchema, buildSchemaGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Premium IPTV Support 24/7 Customer Assistance",
  description:
    "Get in touch with the Premium IPTV technical support team. Rapid assistance for device setup, Premium IPTV subscription inquiries, and streaming configuration.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Premium IPTV Support 24/7 Customer Assistance",
    description:
      "Get in touch with the Premium IPTV technical support team. Rapid assistance for device setup, Premium IPTV subscription inquiries, and streaming configuration.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function ContactPage() {
  const pageUrl = `${siteConfig.url}/contact`;
  const breadcrumbItems = [
    { name: "Premium IPTV Contact", url: "/contact" },
  ];

  const contactSchema = buildSchemaGraph([
    getWebPageSchema({
      name: "Contact Premium IPTV Support 24/7 Customer Assistance",
      description:
        "Get in touch with the Premium IPTV technical support team. Rapid assistance for device setup, Premium IPTV subscription inquiries, and streaming configuration.",
      url: pageUrl,
      pageType: "ContactPage",
    }),
    getBreadcrumbSchema(breadcrumbItems, pageUrl),
  ]);

  return (
    <>
      <JsonLd data={contactSchema} />

      <div className="py-12 lg:py-20 bg-gradient-to-b from-[#fcfaff] via-[#fff8fa] to-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-ruby-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center space-y-6 pt-6 pb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-50 via-ruby-50 to-gold-50 border border-brand-200 text-brand-900 text-xs font-black shadow-sm">
              <Headphones className="w-3.5 h-3.5 text-brand-600" />
              <span>Dedicated Premium IPTV Customer Assistance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span> Support
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Have questions about your Premium IPTV subscription activation, player setup, or device troubleshooting? Our dedicated Premium IPTV support team is available 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Support Info & FAQ CTA */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-brand-200 space-y-6 shadow-xl shadow-brand-500/10">
                <h2 className="text-2xl font-black text-slate-950 tracking-tight">
                  Support Channels
                </h2>

                <div className="space-y-4">
                  {/* WhatsApp Live Support Channel */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-300 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#25D366]/25">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-950 text-base">WhatsApp Live Support</p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5 font-medium mb-2">
                        Chat directly with our technical team for instant assistance.
                      </p>
                      <a
                        href={siteConfig.support.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-black shadow-sm transition-all hover:scale-105"
                      >
                        <span>Chat on WhatsApp</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-950 text-base">Support Desk Email</p>
                      <a
                        href={`mailto:${siteConfig.support.email}`}
                        className="text-xs text-brand-700 hover:text-brand-950 font-mono mt-0.5 font-bold block transition-colors"
                      >
                        {siteConfig.support.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-950 text-base">Response Time</p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5 font-medium">
                        {siteConfig.support.responseHours} across all submitted requests.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-ruby-600 to-ruby-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-950 text-base">Service Availability</p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5 font-medium">
                        24 hours a day, 7 days a week, 365 days a year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Setup Guide Callout */}
              <div className="p-8 rounded-3xl bg-white border-2 border-gold-400 space-y-4 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 flex items-center justify-center shadow-sm">
                  <Tv className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-950">Looking for Setup Instructions?</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Most setup questions can be solved immediately with our step by step device guides for Smart TVs, Firestick, iOS, Android, and PC.
                </p>
                <div className="pt-2">
                  <Link
                    href="/setup"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900 transition-colors"
                  >
                    <span>Visit Setup and Troubleshooting Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center text-slate-600">
                    Loading contact form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
