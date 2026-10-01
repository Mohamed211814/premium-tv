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

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-950 text-base">Support Desk Email</p>
                      <p className="text-xs text-brand-700 font-mono mt-0.5 font-bold">
                        {siteConfig.support.email}
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
