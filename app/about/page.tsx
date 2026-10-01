import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Zap,
  Target,
  Users,
  Headphones,
  Cpu,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Tv,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { getWebPageSchema, getBreadcrumbSchema, buildSchemaGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Premium IPTV Dedicated to Reliable Streaming Quality",
  description:
    "Learn about the Premium IPTV brand, our core streaming philosophy, high stability server architecture, and dedicated customer support mission.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Premium IPTV Dedicated to Reliable Streaming Quality",
    description:
      "Learn about the Premium IPTV brand, our core streaming philosophy, high stability server architecture, and dedicated customer support mission.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function AboutPage() {
  const pageUrl = `${siteConfig.url}/about`;
  const breadcrumbItems = [
    { name: "About", url: "/about" },
  ];

  const aboutSchema = buildSchemaGraph([
    getWebPageSchema({
      name: "About Premium IPTV Dedicated to Reliable Streaming Quality",
      description:
        "Learn about the Premium IPTV brand, our core streaming philosophy, high stability server architecture, and dedicated customer support mission.",
      url: pageUrl,
      pageType: "AboutPage",
    }),
    getBreadcrumbSchema(breadcrumbItems, pageUrl),
  ]);

  return (
    <>
      <JsonLd data={aboutSchema} />

      <div className="py-12 lg:py-20 bg-gradient-to-b from-[#fcfaff] via-[#fff8fa] to-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-ruby-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center space-y-6 pt-6 pb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-50 via-ruby-50 to-gold-50 border border-brand-200 text-brand-900 text-xs font-black shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Brand Philosophy and Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500">Premium IPTV</span> Streaming Service
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium">
              Premium IPTV is developed around a singular purpose: delivering reliable, high definition television and digital entertainment over modern internet protocols with zero compromises on stream stability or customer service.
            </p>
          </div>

          {/* Section 1: Brand Introduction & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-brand-800 font-black text-sm bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200">
                <Target className="w-4 h-4 text-brand-600" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-3xl font-black text-slate-950 tracking-tight">
                Empowering Viewers with Seamless Premium IPTV Entertainment
              </h2>
              <p className="text-slate-700 leading-relaxed">
                At <strong className="text-brand-700 font-bold">Premium IPTV</strong>, we believe modern entertainment should be accessible, instantaneous, and dependable across all personal hardware. Traditional television systems are constrained by proprietary set top boxes, complex cable wiring, and unpredictable service interruptions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By leveraging high speed IP network architecture, Premium IPTV provides a direct, responsive link to high definition streams, real time sports programming, on demand content, and synchronized electronic program guides.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border-2 border-gold-300 shadow-sm">
                  <p className="text-3xl font-black text-amber-600">99.9%</p>
                  <p className="text-xs text-slate-700 font-bold mt-1">Server Availability Target</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border-2 border-ruby-200 shadow-sm">
                  <p className="text-3xl font-black text-ruby-600">4K & UHD</p>
                  <p className="text-xs text-slate-700 font-bold mt-1">High Bitrate Streams</p>
                </div>
              </div>
            </div>

            {/* Mission Graphic Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-brand-200 space-y-6 shadow-xl shadow-brand-500/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-500 border border-brand-400/40 flex items-center justify-center text-white shadow-md shadow-brand-500/25">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">Our Service Philosophy</h3>
              <ul className="space-y-4 text-slate-700 text-sm">
                <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-950 font-bold">Performance First:</strong> Dedicated bandwidth allocations ensure Premium IPTV streams remain smooth even during global live broadcasts.</span>
                </li>
                <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-ruby-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-950 font-bold">Open Compatibility:</strong> Support for industry standard Xtream Codes API and M3U formats across every popular media player.</span>
                </li>
                <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-950 font-bold">Transparent Support:</strong> Accessible 24/7 technical desk ready to resolve Premium IPTV device setup questions promptly.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: Technology & Infrastructure */}
          <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-50/80 via-pink-50/80 to-amber-50/80 border-2 border-brand-200 shadow-md">
            <div className="max-w-3xl mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 text-ruby-800 font-black text-xs uppercase bg-ruby-100/80 px-3 py-1 rounded-full border border-ruby-200">
                <Cpu className="w-4 h-4 text-ruby-600" />
                <span>Streaming Technology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                High Performance Premium IPTV Server Architecture
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                The technical backbone powering Premium IPTV utilizes modern caching and load distribution principles to prevent buffering bottlenecks:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border-2 border-gold-300 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 flex items-center justify-center mb-4 shadow-sm">
                  <Zap className="w-6 h-6 fill-slate-950 text-slate-950" />
                </div>
                <h3 className="font-black text-slate-950 text-lg mb-2">Anti Freeze Optimization</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dynamic keyframe pre fetching helps your player recover immediately from packet drops, maintaining unbroken video feeds.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-ruby-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-ruby-600 to-ruby-500 text-white flex items-center justify-center mb-4 shadow-sm">
                  <Tv className="w-6 h-6" />
                </div>
                <h3 className="font-black text-slate-950 text-lg mb-2">Multi Format Encoding</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Channels are encoded in standard H.264 and modern HEVC (H.265) streams, ensuring crisp images with minimal network strain.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-brand-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-500 text-white flex items-center justify-center mb-4 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-black text-slate-950 text-lg mb-2">Load Balancing Clusters</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Viewer connections are routed through geographically optimized distribution nodes to reduce ping and transmission delays.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Customer Experience & Support Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-gold-400 space-y-4 shadow-xl shadow-gold-400/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-400 to-amber-400 text-slate-950 flex items-center justify-center shadow-md shadow-gold-400/25">
                <Headphones className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">Support Philosophy</h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                We believe excellent customer support is as critical as high server speed. Our support team is trained specifically on diverse operating systems, smart TV interfaces, and media player setups for Premium IPTV.
              </p>
              <div className="pt-2 text-xs text-slate-700 space-y-2.5 font-bold">
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Average ticket response time under 15 minutes</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Step by step assistance for first time Premium IPTV users</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ongoing playlist updates and EPG synchronization</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Designed for Everyday Simplicity
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Whether you are setting up Premium IPTV on a living room TV, a bedside tablet, or a computer monitor, our goal is to make configuration effortless and streaming instantaneous.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Have questions before subscribing, or need guidance choosing the right player app for your TV? Contact our dedicated Premium IPTV support team today.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-base text-slate-950 bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400 hover:from-amber-400 hover:to-gold-300 shadow-xl shadow-gold-400/25 hover:scale-105 transition-all"
                >
                  <span>Contact Premium IPTV Support</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
