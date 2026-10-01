export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  tagline: string;
  url: string;
  logo: string;
  ogImage: string;
  links: {
    home: string;
    about: string;
    setup: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  support: {
    email: string;
    responseHours: string;
    availability: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://premiumiptv.example.com";

export const siteConfig: SiteConfig = {
  name: "Premium IPTV",
  shortName: "Premium IPTV",
  tagline: "Ultra Fast, High Definition Entertainment Across All Your Devices",
  description:
    "Experience seamless, high definition entertainment with Premium IPTV. Premium IPTV delivers ultra reliable streams, fast activation, and multi device compatibility for Smart TVs, mobile, and desktop.",
  url: siteUrl.replace(/\/$/, ""),
  logo: "/images/logo.png",
  ogImage: "/images/logo.png",
  links: {
    home: "/",
    about: "/about",
    setup: "/setup",
    contact: "/contact",
    privacy: "/privacy",
    terms: "/terms",
  },
  support: {
    email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@premiumiptv.example.com",
    responseHours: "Under 15 minutes average response",
    availability: "24/7 Dedicated Support",
  },
  features: [
    {
      title: "Ultra HD and 4K Streaming",
      description: "Crystal clear high definition streams optimized for smooth playback without stutter or buffering.",
      icon: "Tv",
    },
    {
      title: "99.9% Server Stability",
      description: "Robust, high bandwidth server architecture designed for consistent, uninterrupted uptime.",
      icon: "ShieldCheck",
    },
    {
      title: "Instant Service Activation",
      description: "Get your setup instructions and connection details immediately after completing your order.",
      icon: "Zap",
    },
    {
      title: "Universal Device Compatibility",
      description: "Stream effortlessly on Smart TVs, Android boxes, smartphones, tablets, PC, and macOS devices.",
      icon: "MonitorSmartphone",
    },
    {
      title: "Interactive Program Guide (EPG)",
      description: "Easily navigate upcoming shows, live sports events, and programming schedules with intuitive EPG.",
      icon: "ListFilter",
    },
    {
      title: "24/7 Dedicated Support",
      description: "Experienced technical support team available around the clock to assist with setup and inquiries.",
      icon: "Headphones",
    },
  ],
};
