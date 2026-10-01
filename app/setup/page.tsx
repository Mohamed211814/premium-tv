import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SetupGuidesView from "@/components/setup/SetupGuidesView";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { generalSetupSteps } from "@/lib/setup-data";
import {
  getWebPageSchema,
  getBreadcrumbSchema,
  getHowToSchema,
  buildSchemaGraph,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Premium IPTV Setup Guide Step by Step Device Instructions",
  description:
    "Comprehensive setup and installation guide for Premium IPTV. Step by step tutorials for Smart TVs, Firestick, Apple TV, iOS, Android, PC, and Premium IPTV troubleshooting.",
  alternates: {
    canonical: `${siteConfig.url}/setup`,
  },
  openGraph: {
    title: "Premium IPTV Setup Guide Step by Step Device Instructions",
    description:
      "Comprehensive setup and installation guide for Premium IPTV. Step by step tutorials for Smart TVs, Firestick, Apple TV, iOS, Android, PC, and Premium IPTV troubleshooting.",
    url: `${siteConfig.url}/setup`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function SetupPage() {
  const pageUrl = `${siteConfig.url}/setup`;
  const breadcrumbItems = [
    { name: "Premium IPTV Setup Guide", url: "/setup" },
  ];

  const setupSchema = buildSchemaGraph([
    getWebPageSchema({
      name: "Premium IPTV Setup Guide Step by Step Device Instructions",
      description:
        "Comprehensive setup and installation guide for Premium IPTV. Step by step tutorials for Smart TVs, Firestick, Apple TV, iOS, Android, PC, and Premium IPTV troubleshooting.",
      url: pageUrl,
      pageType: "WebPage",
    }),
    getBreadcrumbSchema(breadcrumbItems, pageUrl),
    getHowToSchema({
      name: "How to Set Up Premium IPTV on Any Device",
      description:
        "Follow these 3 easy steps to configure your Premium IPTV subscription on Smart TVs, mobile devices, and computers.",
      url: pageUrl,
      steps: generalSetupSteps,
    }),
  ]);

  return (
    <>
      <JsonLd data={setupSchema} />

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
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Complete Premium IPTV Installation & Diagnostics</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span> Setup & Installation Guide
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Follow our verified tutorials to configure Premium IPTV on your Smart TV, streaming box, mobile device, or computer in under 5 minutes.
            </p>
          </div>

          {/* Interactive Setup Guides and Diagnostics */}
          <SetupGuidesView />

        </div>
      </div>
    </>
  );
}
