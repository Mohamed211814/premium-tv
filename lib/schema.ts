import { siteConfig } from "./site-config";
import { FaqItem } from "./faq";
import { SetupStep } from "./setup-data";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Returns Organization structured data
 * Accurately represents the organization entity without fabricated details.
 */
export function getOrganizationSchema() {
  const baseUrl = siteConfig.url;

  return {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: `${baseUrl}/images/logo.png`,
    description: siteConfig.description,
    ...(siteConfig.support.email
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            email: siteConfig.support.email,
            contactType: "customer support",
            availableLanguage: ["en"],
          },
        }
      : {}),
  };
}

/**
 * Returns WebSite structured data with relationship link to Organization
 */
export function getWebsiteSchema() {
  const baseUrl = siteConfig.url;

  return {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-US",
  };
}

/**
 * Returns WebPage / AboutPage / ContactPage structured data linked to WebSite
 */
export function getWebPageSchema(options: {
  name: string;
  description: string;
  url: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "ItemPage";
}) {
  const baseUrl = siteConfig.url;
  const canonicalUrl = options.url.startsWith("http") ? options.url : `${baseUrl}${options.url}`;

  return {
    "@type": options.pageType || "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: options.name,
    description: options.description,
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-US",
    breadcrumb: {
      "@id": `${canonicalUrl}#breadcrumb`,
    },
  };
}

/**
 * Returns BreadcrumbList structured data matching visible UI breadcrumbs
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[], pageUrl: string) {
  const baseUrl = siteConfig.url;
  const canonicalUrl = pageUrl.startsWith("http") ? pageUrl : `${baseUrl}${pageUrl}`;

  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url === "/" ? "" : item.url}`,
    })),
  };
}

/**
 * Returns FAQPage structured data matching visible FAQ content
 */
export function getFaqSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Returns HowTo structured data for setup guides matching visible steps
 */
export function getHowToSchema(options: {
  name: string;
  description: string;
  url: string;
  steps: SetupStep[];
}) {
  const baseUrl = siteConfig.url;
  const canonicalUrl = options.url.startsWith("http") ? options.url : `${baseUrl}${options.url}`;

  return {
    "@type": "HowTo",
    "@id": `${canonicalUrl}#howto`,
    name: options.name,
    description: options.description,
    step: options.steps.map((step) => ({
      "@type": "HowToStep",
      position: step.stepNumber,
      name: step.title,
      text: step.description,
      ...(step.tip ? { itemListElement: [{ "@type": "HowToDirection", text: step.tip }] } : {}),
    })),
  };
}

/**
 * Helper to build a clean single JSON-LD graph
 */
export function buildSchemaGraph(nodes: (object | null | undefined)[]) {
  const validNodes = nodes.filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@graph": validNodes,
  };
}
