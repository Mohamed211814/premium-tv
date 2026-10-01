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
  ctaText: string;
  ctaLink: string;
}

const standardFeatures = [
  "Ultra HD, 4K and FHD Quality",
  "Fast and Instant Activation",
  "Compatible with All Devices",
  "Anti Freeze Streaming Technology",
  "Complete Electronic Program Guide (EPG)",
  "24/7 Dedicated Customer Support",
  "Free Playlist Updates and EPG Sync",
];

const WHATSAPP_BASE_URL = "https://wa.me/212779395271";

export function getWhatsAppOrderUrl(duration: string, price: string): string {
  const message = `Hello, I would like to order the Premium IPTV ${duration} Plan (${price}). Please provide me with the setup and activation details.`;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
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
    features: standardFeatures,
    ctaText: "Order 1 Month",
    ctaLink: getWhatsAppOrderUrl("1 Month", "$14.99"),
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
    features: standardFeatures,
    ctaText: "Order 3 Months",
    ctaLink: getWhatsAppOrderUrl("3 Months", "$34.99"),
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
    features: standardFeatures,
    ctaText: "Order 6 Months",
    ctaLink: getWhatsAppOrderUrl("6 Months", "$59.99"),
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
    features: standardFeatures,
    ctaText: "Order 12 Months",
    ctaLink: getWhatsAppOrderUrl("12 Months", "$99.99"),
  },
];
