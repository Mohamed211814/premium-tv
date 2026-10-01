import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { getOrganizationSchema, getWebsiteSchema, buildSchemaGraph } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} High Definition Entertainment and Streaming`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Premium IPTV", "Premium IPTV subscription", "Premium IPTV streaming", "4K Premium IPTV", "best Premium IPTV", "smart TV Premium IPTV"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${siteConfig.name} High Definition Entertainment and Streaming`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} High Definition Entertainment and Streaming`,
    description: siteConfig.description,
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global structured data: Organization & WebSite
  const globalSchema = buildSchemaGraph([
    getOrganizationSchema(),
    getWebsiteSchema(),
  ]);

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd data={globalSchema} />
      </head>
      <body className="bg-white text-slate-950 min-h-screen flex flex-col font-sans antialiased selection:bg-brand-500 selection:text-white">
        <Header />
        <main className="flex-1 w-full bg-white" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
