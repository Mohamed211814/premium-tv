import type { Metadata } from "next";
import { siteConfig } from "./site-config";
import { getCanonicalUrl } from "./utils";

interface MetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: MetadataProps): Metadata {
  const canonicalUrl = getCanonicalUrl(path);
  const ogImageUrl = image || `${siteConfig.url}${siteConfig.ogImage}`;

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 512,
          height: 512,
          alt: `${siteConfig.name} - Official Brand Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/icon.png", sizes: "192x192", type: "image/png" },
        { url: "/logo.png", sizes: "512x512", type: "image/png" },
        { url: "/favicon.ico" },
      ],
      shortcut: "/favicon.ico",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
}
