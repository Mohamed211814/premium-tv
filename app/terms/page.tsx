import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { getWebPageSchema, getBreadcrumbSchema, buildSchemaGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service Premium IPTV",
  description:
    "Review the terms of service, subscription policies, and acceptable usage guidelines for the Premium IPTV streaming platform.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  const pageUrl = `${siteConfig.url}/terms`;
  const breadcrumbItems = [
    { name: "Premium IPTV Terms of Service", url: "/terms" },
  ];

  const termsSchema = buildSchemaGraph([
    getWebPageSchema({
      name: "Terms of Service Premium IPTV",
      description:
        "Review the terms of service, subscription policies, and acceptable usage guidelines for the Premium IPTV streaming platform.",
      url: pageUrl,
      pageType: "WebPage",
    }),
    getBreadcrumbSchema(breadcrumbItems, pageUrl),
  ]);

  return (
    <>
      <JsonLd data={termsSchema} />

      <div className="py-12 lg:py-20 bg-gradient-to-b from-[#fcfaff] via-[#fff8fa] to-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-ruby-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="pt-6 pb-12 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Terms of Service for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span>
            </h1>
            <p className="text-xs text-brand-700 font-bold uppercase tracking-wider">
              Last revised: October 2026
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-brand-200 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed shadow-xl shadow-brand-500/10">
            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-950">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Premium IPTV website, guides, or subscription service, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our Premium IPTV services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-ruby-700">2. Subscriptions and Service Activation</h2>
              <p>
                Premium IPTV subscriptions are provided on a term basis (1, 3, 6, or 12 months) as selected during order placement. Service credentials and Premium IPTV setup guides are transmitted electronically. Subscriptions do not automatically renew into recurring commitments without user authorization.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-brand-700">3. Device Connections and Usage Rules</h2>
              <p>
                Subscribers agree to adhere to the simultaneous connection limits specified in their Premium IPTV plan. Sharing account credentials beyond the purchased device limit may result in temporary automated stream throttling to protect network integrity.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-amber-700">4. Technical Requirements and Bandwidth</h2>
              <p>
                Proper playback of 4K and Ultra HD streams requires a stable broadband internet connection (minimum 25 Mbps recommended). Premium IPTV is not responsible for local ISP throttling, hardware limitations, or Wi Fi interference on user premises.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-950">5. Customer Inquiries</h2>
              <p>
                For any questions regarding billing, activation, or Premium IPTV service terms, please reach out directly via our{" "}
                <Link href="/contact" className="text-brand-700 font-black underline hover:text-brand-900">
                  Contact Page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
