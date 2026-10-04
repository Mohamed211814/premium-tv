import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  Calendar,
  User,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Tv,
  CheckCircle2,
  Lightbulb,
  Share2,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog";
import { getBreadcrumbSchema, buildSchemaGraph } from "@/lib/schema";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found Premium IPTV",
      description: "The requested blog article could not be located.",
    };
  }

  const pageUrl = `${siteConfig.url}/blog/${slug}`;

  return {
    title: `${post.title} Premium IPTV`,
    description: post.excerpt,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${post.title} Premium IPTV`,
      description: post.excerpt,
      url: pageUrl,
      siteName: siteConfig.name,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `${siteConfig.url}/blog/${slug}`;
  const breadcrumbItems = [
    { name: "Premium IPTV Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ];

  const postSchema = buildSchemaGraph([
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: post.title,
      description: post.excerpt,
      inLanguage: "en-US",
      mainEntityOfPage: pageUrl,
      author: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}${siteConfig.logo}`,
        },
      },
      datePublished: "2026-10-01",
      dateModified: "2026-10-04",
    },
    getBreadcrumbSchema(breadcrumbItems, pageUrl),
  ]);

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd data={postSchema} />

      <article className="py-12 lg:py-20 bg-gradient-to-b from-[#fcfaff] via-[#fff8fa] to-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-ruby-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Back link */}
          <div className="pt-4 pb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-6 pb-10 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-brand-600 to-ruby-600 text-white shadow-sm">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {post.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-brand-100 border border-brand-300 text-brand-700 flex items-center justify-center font-black text-sm">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950">{post.author}</p>
                <p className="text-xs text-slate-500 font-medium">Premium IPTV Technical Specialist</p>
              </div>
            </div>
          </header>

          {/* Article Body Content */}
          <div className="py-10 space-y-10 text-slate-800 leading-relaxed font-medium">
            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-700">
              {post.content.introduction}
            </p>

            {/* Content Sections */}
            {post.content.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 my-4">
                    <p className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      Key Takeaways:
                    </p>
                    <ul className="space-y-2">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.tip && (
                  <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-amber-50/80 border border-gold-300 text-slate-900 my-4 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-gold-400 text-slate-950 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <strong className="font-black text-slate-950 block mb-0.5">Pro Tip:</strong>
                      <span>{section.tip}</span>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="p-8 rounded-3xl bg-white border-2 border-brand-200 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-brand-700 font-black text-lg">
                <Sparkles className="w-5 h-5" />
                <span>Summary & Recommendation</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </div>

          {/* Share & Order Callout */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500 text-white space-y-6 shadow-xl border-2 border-gold-400">
            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black">
                Ready to Stream on Premium IPTV?
              </h3>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium">
                Get started today with ultra fast 4K channels, bufferless streaming, and dedicated 24/7 customer assistance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2">
              <Link
                href="/#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-black text-sm text-slate-950 bg-white hover:bg-gold-50 shadow-md hover:scale-105 transition-all"
              >
                <span>Select Subscription Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/setup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-black/30 hover:bg-black/40 border border-white/40 hover:scale-105 transition-all"
              >
                <Tv className="w-4 h-4 text-gold-300" />
                <span>View Device Guides</span>
              </Link>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="pt-14 space-y-6">
              <h2 className="text-2xl font-black text-slate-950 tracking-tight">
                Recommended Reading
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rPost) => (
                  <div
                    key={rPost.slug}
                    className="p-6 rounded-3xl bg-white border-2 border-slate-200 hover:border-brand-400 transition-all duration-300 shadow-sm flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-900 border border-brand-200">
                        {rPost.category}
                      </span>
                      <h4 className="text-lg font-black text-slate-950 hover:text-brand-600 transition-colors">
                        <Link href={`/blog/${rPost.slug}`}>
                          {rPost.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 font-medium">
                        {rPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">{rPost.readTime}</span>
                      <Link
                        href={`/blog/${rPost.slug}`}
                        className="font-black text-brand-600 hover:text-brand-800 inline-flex items-center gap-1"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </article>
    </>
  );
}
