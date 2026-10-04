import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Tv, Home } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { getWebPageSchema, getBreadcrumbSchema, buildSchemaGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Premium IPTV Blog Guides, Tutorials & Streaming Insights",
  description:
    "Explore upcoming Premium IPTV guides, device setup tutorials, troubleshooting tips, and streaming comparisons.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Premium IPTV Blog Guides, Tutorials & Streaming Insights",
    description:
      "Explore upcoming Premium IPTV guides, device setup tutorials, troubleshooting tips, and streaming comparisons.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function BlogPage() {
  const pageUrl = `${siteConfig.url}/blog`;
  const breadcrumbItems = [
    { name: "Premium IPTV Blog", url: "/blog" },
  ];

  const blogSchema = buildSchemaGraph([
    getWebPageSchema({
      name: "Premium IPTV Blog Guides, Tutorials & Streaming Insights",
      description:
        "Explore upcoming Premium IPTV guides, device setup tutorials, troubleshooting tips, and streaming comparisons.",
      url: pageUrl,
      pageType: "CollectionPage",
    }),
    getBreadcrumbSchema(breadcrumbItems, pageUrl),
  ]);

  return (
    <>
      <JsonLd data={blogSchema} />

      <div className="py-12 lg:py-20 bg-gradient-to-b from-[#fcfaff] via-[#fff8fa] to-white relative overflow-hidden min-h-[70vh] flex flex-col justify-between">
        {/* Ambient background glows */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-ruby-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center space-y-6 pt-6 pb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-50 via-ruby-50 to-gold-50 border border-brand-200 text-brand-900 text-xs font-black shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-brand-600" />
              <span>Streaming Knowledge Base & Guides</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">
                Premium IPTV
              </span>{" "}
              Blog
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Discover tutorials, device configuration walkthroughs, and technical streaming insights.
            </p>
          </div>

          {/* Empty State Card */}
          <div className="max-w-2xl mx-auto my-8">
            <div className="p-10 sm:p-14 rounded-3xl bg-white border-2 border-brand-200 text-center space-y-6 shadow-xl shadow-brand-500/10">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-brand-600 to-brand-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-brand-500/25">
                <BookOpen className="w-10 h-10" />
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  Articles Coming Soon
                </h2>
                <p className="text-slate-600 text-base leading-relaxed max-w-md mx-auto font-medium">
                  Our technical streaming guides and device setup tutorials are currently being updated. Please check back soon for our latest publications.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold shadow-md hover:scale-105 transition-all"
                >
                  <Home className="w-4 h-4" />
                  <span>Return to Homepage</span>
                </Link>

                <Link
                  href="/setup"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-amber-400 hover:from-amber-400 hover:to-gold-300 text-slate-950 text-sm font-black shadow-md hover:scale-105 transition-all"
                >
                  <Tv className="w-4 h-4" />
                  <span>Explore Setup Guides</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
