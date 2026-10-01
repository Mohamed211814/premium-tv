import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import WhySection from "@/components/home/WhySection";
import ExperienceSection from "@/components/home/ExperienceSection";
import SupportedDevices from "@/components/home/SupportedDevices";
import HowItWorks from "@/components/home/HowItWorks";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { faqItems } from "@/lib/faq";
import {
  getWebPageSchema,
  getBreadcrumbSchema,
  getFaqSchema,
  buildSchemaGraph,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Premium IPTV High Definition Entertainment, Wherever You Watch",
  description:
    "Experience reliable, crystal clear 4K and Ultra HD streaming with Premium IPTV. Premium IPTV offers instant activation, universal device compatibility, and 24/7 dedicated support.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Premium IPTV High Definition Entertainment, Wherever You Watch",
    description:
      "Experience reliable, crystal clear 4K and Ultra HD streaming with Premium IPTV. Premium IPTV offers instant activation, universal device compatibility, and 24/7 dedicated support.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function HomePage() {
  // Structured data graph for Homepage: WebPage + BreadcrumbList + FAQPage
  const homeSchema = buildSchemaGraph([
    getWebPageSchema({
      name: "Premium IPTV High Definition Entertainment, Wherever You Watch",
      description:
        "Experience reliable, crystal clear 4K and Ultra HD streaming with Premium IPTV. Premium IPTV offers instant activation, universal device compatibility, and 24/7 dedicated support.",
      url: siteConfig.url,
      pageType: "WebPage",
    }),
    getBreadcrumbSchema(
      [{ name: "Home", url: "/" }],
      siteConfig.url
    ),
    getFaqSchema(faqItems),
  ]);

  return (
    <>
      <JsonLd data={homeSchema} />
      <Hero />
      <PricingSection />
      <IntroSection />
      <WhySection />
      <ExperienceSection />
      <SupportedDevices />
      <HowItWorks />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
