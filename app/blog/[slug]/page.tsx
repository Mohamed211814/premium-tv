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
  HelpCircle,
  ShieldCheck,
  Zap,
  Info,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog";
import { getBreadcrumbSchema, getFaqSchema, buildSchemaGraph } from "@/lib/schema";

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
      title: "Article Not Found | Premium IPTV",
      description: "The requested blog article could not be located.",
    };
  }

  const pageUrl = `${siteConfig.url}/blog/${slug}`;
  const title = post.seoTitle || `${post.title} | Premium IPTV`;

  return {
    title,
    description: post.excerpt,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description: post.excerpt,
      url: pageUrl,
      siteName: siteConfig.name,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
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
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ];

  const schemas: any[] = [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: post.title,
      description: post.excerpt,
      inLanguage: "en-US",
      mainEntityOfPage: pageUrl,
      author: {
        "@type": "Organization",
        name: post.author,
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
      datePublished: "2026-10-07",
      dateModified: "2026-10-07",
    },
    getBreadcrumbSchema(breadcrumbItems, pageUrl),
  ];

  if (post.content.faqs && post.content.faqs.length > 0) {
    schemas.push(getFaqSchema(post.content.faqs));
  }

  const postSchema = buildSchemaGraph(schemas);
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
                <p className="text-xs text-slate-500 font-medium">{post.authorRole}</p>
              </div>
            </div>
          </header>

          {/* Article Body Content */}
          <div className="py-10 space-y-12 text-slate-800 leading-relaxed font-medium">
            {/* Quick Definition Box (Featured Snippet Optimized) */}
            {post.quickDefinition && (
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-brand-50/90 via-purple-50/50 to-white border-2 border-brand-200/80 shadow-md space-y-4">
                <div className="flex items-center gap-2.5 text-brand-800 font-black text-base sm:text-lg">
                  <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0">
                    <Info className="w-4 h-4" />
                  </div>
                  <span>Quick Definition: {post.quickDefinition.term}</span>
                </div>
                <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-semibold">
                  {post.quickDefinition.definition}
                </p>
                {post.quickDefinition.highlights && (
                  <div className="pt-2 border-t border-brand-100">
                    <p className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                      Core Characteristics:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                      {post.quickDefinition.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Top CTA Button (Above Content) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-950 via-slate-900 to-brand-900 text-white border border-brand-500/30 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-ruby-500 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Zap className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">Looking for Reliable Premium IPTV?</p>
                  <p className="text-xs text-slate-300 font-medium">4K & FHD Quality • 99.9% Server Uptime • Instant Setup</p>
                </div>
              </div>
              <Link
                href="/#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-gold-400 via-amber-300 to-gold-400 hover:from-gold-300 hover:to-amber-200 shadow-md hover:scale-105 transition-all shrink-0"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>View Pricing Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Introduction paragraphs */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
              {post.content.introduction.map((introP, idx) => (
                <p key={idx}>{introP}</p>
              ))}
            </div>

            {/* Content Sections */}
            {post.content.sections.map((section, sIdx) => (
              <React.Fragment key={sIdx}>
                <section className="space-y-6 pt-4 border-t border-slate-100">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                    {section.heading}
                  </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Subsections */}
                {section.subsections && section.subsections.length > 0 && (
                  <div className="space-y-6 pl-0 sm:pl-2">
                    {section.subsections.map((sub, subIdx) => (
                      <div key={subIdx} className="space-y-3 pt-2">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {sub.subheading}
                        </h3>
                        {sub.paragraphs.map((subP, spIdx) => (
                          <p key={spIdx} className="text-base text-slate-700 leading-relaxed">
                            {subP}
                          </p>
                        ))}
                        {sub.bulletPoints && sub.bulletPoints.length > 0 && (
                          <ul className="space-y-2 pt-2">
                            {sub.bulletPoints.map((subBp, subBpIdx) => (
                              <li key={subBpIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-1" />
                                <span>{subBp}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Numbered List */}
                {section.numberedList && section.numberedList.length > 0 && (
                  <div className="space-y-4 my-6">
                    {section.numberedList.map((item, nIdx) => (
                      <div
                        key={nIdx}
                        className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
                      >
                        <span className="px-3 py-1 rounded-xl bg-brand-600 text-white font-black text-xs shrink-0">
                          Step {nIdx + 1}
                        </span>
                        <div className="space-y-1">
                          <h4 className="font-black text-slate-950 text-base">{item.item}</h4>
                          <p className="text-sm text-slate-700 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 my-4">
                    <p className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      Key Takeaways:
                    </p>
                    <ul className="space-y-2.5">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Comparison Table */}
                {section.table && (
                  <div className="my-6 overflow-hidden rounded-2xl border-2 border-slate-200 shadow-sm">
                    {section.table.caption && (
                      <div className="p-4 bg-slate-100/80 border-b border-slate-200 font-black text-sm text-slate-900">
                        {section.table.caption}
                      </div>
                    )}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white font-black">
                            {section.table.headers.map((th, thIdx) => (
                              <th key={thIdx} className="p-3.5 border-b border-slate-800 whitespace-nowrap">
                                {th}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                          {section.table.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className={rIdx % 2 === 0 ? "bg-white hover:bg-slate-50/80" : "bg-slate-50/50 hover:bg-slate-50"}
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`p-3.5 leading-relaxed text-slate-700 ${
                                    cIdx === 0
                                      ? "font-bold text-slate-950 whitespace-nowrap"
                                      : cIdx === 1
                                      ? "font-semibold text-brand-900 bg-brand-50/30"
                                      : ""
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Pro Tip */}
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

              {/* Middle CTA Button (In the Middle of the Article) */}
              {sIdx === Math.floor(post.content.sections.length / 2) - 1 && (
                <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-brand-50 via-ruby-50/40 to-amber-50/50 border-2 border-brand-200/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-black">
                      <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                      <span>Flexible Subscription Options</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                      Ready to Stream 4K Live TV & VOD?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-medium">
                      Choose from flexible 1-month, 3-month, 6-month, or 12-month plans with instant automated activation, 99.9% server stability, and 24/7 support.
                    </p>
                  </div>
                  <Link
                    href="/#pricing"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-black text-sm text-white bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500 hover:opacity-95 shadow-lg hover:scale-105 transition-all shrink-0"
                  >
                    <span>View Pricing Plans</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </React.Fragment>
          ))}

            {/* FAQ Section */}
            {post.content.faqs && post.content.faqs.length > 0 && (
              <section className="pt-8 border-t border-slate-200 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-black">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Frequently Asked Questions</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                    Common Questions About IPTV
                  </h2>
                </div>

                <div className="space-y-4">
                  {post.content.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-brand-300 transition-all shadow-sm space-y-2.5"
                    >
                      <h3 className="text-base sm:text-lg font-black text-slate-950 flex items-start gap-2.5">
                        <span className="text-brand-600 font-black">Q:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Conclusion */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-brand-50/50 border-2 border-brand-200 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-brand-700 font-black text-lg">
                <Sparkles className="w-5 h-5" />
                <span>Conclusion: The Evolution of Television</span>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                {post.content.conclusion.map((concP, cIdx) => (
                  <p key={cIdx}>{concP}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Callout & CTA Button (Bottom of Article) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-600 via-ruby-600 to-amber-500 text-white space-y-6 shadow-xl border-2 border-gold-400">
            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black">
                Ready to Experience Next-Generation IPTV?
              </h3>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium">
                Explore our high-performance streaming solutions with 4K UHD picture quality, ultra-low buffering, and 24/7 customer support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2">
              <Link
                href="/#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-black text-sm text-slate-950 bg-white hover:bg-gold-50 shadow-md hover:scale-105 transition-all"
              >
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>View All Pricing Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/setup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-black/30 hover:bg-black/40 border border-white/40 hover:scale-105 transition-all"
              >
                <Tv className="w-4 h-4 text-gold-300" />
                <span>Step-by-Step Setup Guides</span>
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
