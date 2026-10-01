export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  period: string;
  originalPrice?: string;
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
  connectionCount: string;
  ctaText: string;
  ctaLink: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-1-month",
    name: "1 Month Access",
    duration: "1 Month",
    price: "$14.99",
    period: "per month",
    popular: false,
    description: "Flexible monthly access",
    features: [
      "Ultra HD and FHD Stream Quality",
      "Fast and Instant Activation",
      "Compatible with All Devices",
      "Anti Freeze Streaming Technology",
      "Complete Electronic Program Guide (EPG)",
      "24/7 Dedicated Customer Support",
    ],
    connectionCount: "1 Device Connection",
    ctaText: "Get 1 Month Access",
    ctaLink: "/contact?plan=1-month",
  },
  {
    id: "plan-3-months",
    name: "3 Months Access",
    duration: "3 Months",
    price: "$34.99",
    period: "per quarter",
    originalPrice: "$44.97",
    popular: false,
    badge: "Quarterly Saver",
    description: "Popular quarterly package",
    features: [
      "Ultra HD and FHD Stream Quality",
      "Fast and Instant Activation",
      "Compatible with All Devices",
      "Anti Freeze Streaming Technology",
      "Complete Electronic Program Guide (EPG)",
      "Priority 24/7 Technical Support",
      "Free Playlist Updates",
    ],
    connectionCount: "1 Device Connection",
    ctaText: "Get 3 Months Access",
    ctaLink: "/contact?plan=3-months",
  },
  {
    id: "plan-6-months",
    name: "6 Months Access",
    duration: "6 Months",
    price: "$59.99",
    period: "per 6 months",
    originalPrice: "$89.94",
    popular: false,
    badge: "Popular Choice",
    description: "Extended half year package",
    features: [
      "Ultra HD, 4K and FHD Quality",
      "Fast and Instant Activation",
      "Multi Device Compatibility",
      "Anti Freeze Stream Optimization",
      "Complete Electronic Program Guide (EPG)",
      "Priority 24/7 Dedicated Support",
      "Free Playlist Updates and EPG Sync",
    ],
    connectionCount: "Up to 2 Device Connections",
    ctaText: "Get 6 Months Access",
    ctaLink: "/contact?plan=6-months",
  },
  {
    id: "plan-12-months",
    name: "12 Months Access",
    duration: "12 Months",
    price: "$99.99",
    period: "per year",
    originalPrice: "$179.88",
    popular: true,
    badge: "Best Value (Save 45%)",
    description: "Maximum savings full year access",
    features: [
      "Ultra HD, 4K and FHD Quality",
      "Instant Automated Activation",
      "Multi Device Compatibility",
      "VIP Dedicated Server Routing",
      "Anti Freeze Technology V2",
      "Complete Electronic Program Guide (EPG)",
      "VIP 24/7 Priority Support",
      "Full 12 Month Service Guarantee",
    ],
    connectionCount: "Up to 2 Device Connections",
    ctaText: "Get 12 Months Access",
    ctaLink: "/contact?plan=12-months",
  },
];
