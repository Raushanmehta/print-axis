"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface BlogDetailSectionProps {
  title?: string;
  category?: string;
  publishDate?: string;
  authorName?: string;
  readTime?: string;
  heroImage?: string;
}

export default function BlogDetailSection({
  title = "How Custom Packaging Boosts Brand Loyalty & Customer Experience",
  category = "PACKAGING",
  publishDate = "October 12, 2025",
  authorName = "PrintAxis Editorial",
  readTime = "5 min read",
  heroImage = "/images/blog-packaging.jpg",
}: BlogDetailSectionProps) {
  const recentPosts = [
    {
      id: "1",
      title: "Offset vs. Digital: Which Printing Method Fits Your Business?",
      date: "Oct 08, 2025",
      image: "/images/blog-brochures.jpg",
      href: "/blog",
    },
    {
      id: "2",
      title: "10 Pro Tips to Design Luxury Business Cards That Get Retained",
      date: "Sep 29, 2025",
      image: "/images/blog-business-cards.jpg",
      href: "/blog",
    },
    {
      id: "3",
      title: "Sustainable Inks & Eco-friendly Papers in Modern Printing",
      date: "Sep 15, 2025",
      image: "/images/about-packaging.jpg",
      href: "/blog",
    },
  ];

  const categories = [
    { name: "Packaging & Boxes", count: 14 },
    { name: "Digital & Offset Printing", count: 22 },
    { name: "Branding & Identity", count: 9 },
    { name: "Custom Stationery", count: 18 },
    { name: "Design Insights", count: 11 },
  ];

  return (
    <article className="bg-white py-14 sm:py-18 lg:py-22">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Article Content */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-gray-500">
              <span className="bg-[#cb5855]/10 text-[#cb5855] font-bold px-3 py-1 rounded-full uppercase tracking-wider text-xs">
                {category}
              </span>
              <span>•</span>
              <time dateTime="2025-10-12">{publishDate}</time>
              <span>•</span>
              <span>By {authorName}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#241121] leading-tight tracking-tight mb-6">
              {title}
            </h1>

            {/* Hero Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-8 border border-gray-100 shadow-sm bg-gray-100">
              <Image
                src={heroImage}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-center"
              />
            </div>

            {/* Article Body */}
            <div className="prose max-w-none text-[#5b525a] text-sm sm:text-base leading-relaxed space-y-6">
              <p className="text-base sm:text-lg text-[#241121] font-medium leading-relaxed">
                In today&apos;s competitive marketplace, packaging is no longer just a protective container—it is the very first tactile interaction customers have with your brand identity.
              </p>

              <p>
                From custom corrugated mailer boxes to luxury rigid gift boxes with foil stamping, the sensory experience of unboxing directly impacts customer perception, social shares, and long-term brand recall.
              </p>

              {/* Highlight Quote Box */}
              <blockquote className="my-8 border-l-4 border-[#cb5855] bg-[#fdf2f1]/60 rounded-r-2xl p-6 sm:p-8 text-[#241121]">
                <p className="text-base sm:text-lg font-bold italic leading-relaxed text-[#241121]">
                  &ldquo;Great packaging turns a routine delivery into a memorable branded event. Customers don&apos;t just receive a product; they unwrap an experience.&rdquo;
                </p>
                <cite className="block text-xs sm:text-sm font-semibold text-[#cb5855] mt-3 not-italic">
                  — PrintAxis Packaging Innovation Team
                </cite>
              </blockquote>

              <h2 className="text-xl sm:text-2xl font-bold text-[#241121] pt-4">
                1. The Unboxing Phenomenon and First Impressions
              </h2>
              <p>
                Research consistently reveals that over 70% of consumers agree that packaging design influences their purchasing decisions. High-definition vibrant printing, textured papers, and embossed finishes instantly convey high product value.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-[#241121] pt-4">
                2. Sustainable Printing Materials That Resonate
              </h2>
              <p>
                Eco-conscious consumers demand responsibility. By utilizing FSC-certified kraft stock, biodegradable inks, and recyclable finishes, brands demonstrate environmental commitment without sacrificing vibrant visual appeal.
              </p>

              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#241121] uppercase tracking-wider">
                    Tags:
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    Packaging
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    Branding
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    Print Design
                  </span>
                </div>

                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#cb5855] hover:bg-[#ba4c49] text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  <span>Start Your Print Project</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            {/* Recent Posts Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#241121] mb-5 pb-3 border-b border-gray-100">
                Recent Articles
              </h3>

              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={post.href}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] text-gray-400 block mb-0.5">
                        {post.date}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-[#241121] group-hover:text-[#cb5855] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#241121] mb-5 pb-3 border-b border-gray-100">
                Categories
              </h3>

              <div className="space-y-2.5">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href="/blog"
                    className="flex items-center justify-between text-xs sm:text-sm text-gray-600 hover:text-[#cb5855] py-1.5 transition-colors"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">
                      {cat.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Quote CTA Banner */}
            <div className="bg-[#34142b] rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-white shadow-lg relative overflow-hidden">
              <h4 className="text-lg font-bold text-white mb-2">
                Need Custom Printing?
              </h4>
              <p className="text-xs text-white/75 leading-relaxed mb-5">
                Get an instant estimate for your packaging, marketing materials, or merchandise.
              </p>
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-[#cb5855] hover:bg-[#ba4c49] text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                Request a Free Quote →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
