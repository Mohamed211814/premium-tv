import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { getWebPageSchema, getBreadcrumbSchema, buildSchemaGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy Premium IPTV",
  description:
    "Learn about how Premium IPTV protects subscriber privacy, handles account data, and maintains high standards of digital security for all Premium IPTV services.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  const pageUrl = `${siteConfig.url}/privacy`;
  const breadcrumbItems = [
    { name: "Premium IPTV Privacy Policy", url: "/privacy" },
  ];

  const privacySchema = buildSchemaGraph([
    getWebPageSchema({
      name: "Privacy Policy Premium IPTV",
      description:
        "Learn about how Premium IPTV protects subscriber privacy, handles account data, and maintains high standards of digital security for all Premium IPTV services.",
      url: pageUrl,
      pageType: "WebPage",
    }),
    getBreadcrumbSchema(breadcrumbItems, pageUrl),
  ]);

  return (
    <>
      <JsonLd data={privacySchema} />

      <div className="py-12 lg:py-20 bg-gradient-to-b from-[#fcfaff] via-[#fff8fa] to-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-ruby-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="pt-6 pb-12 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-4">
              Privacy Policy for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span>
            </h1>
            <p className="text-xs text-brand-700 font-bold uppercase tracking-wider">
              Last revised: October 2026
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-brand-200 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed shadow-xl shadow-brand-500/10">
            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-950">1. Information We Collect</h2>
              <p>
                When you visit the Premium IPTV website or submit an inquiry through our contact form, we collect minimal personal information strictly required to facilitate communication and provide Premium IPTV service support. This includes your name, email address, and device type if voluntarily provided.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-ruby-700">2. How We Use Your Information</h2>
              <p>
                We use your submitted details solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Respond to customer support questions and Premium IPTV configuration inquiries</li>
                <li>Transmit activation instructions and Premium IPTV player setup parameters</li>
                <li>Maintain server stability and protect the Premium IPTV streaming network against fraudulent traffic</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-brand-700">3. Data Protection and Security</h2>
              <p>
                Premium IPTV implements modern encryption and security protocols (SSL/TLS) to safeguard your information during transmission. We do not sell, rent, or distribute subscriber personal data to third parties or advertising networks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-amber-700">4. Cookies and Analytical Metrics</h2>
              <p>
                We may use basic functional session cookies to remember user preferences (such as preferred device tab selection) and measure aggregated site performance to optimize Premium IPTV page loading speeds.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-slate-950">5. Contact Inquiries</h2>
              <p>
                For questions regarding our privacy practices or Premium IPTV services, please contact our support desk via the{" "}
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
