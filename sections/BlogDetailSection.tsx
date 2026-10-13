"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NeedCustomCard from "@/components/cards/NeedCustomCard";
import { siteMap } from "@/data";
import { CalendarIcon, AuthorIcon, ClockIcon } from "@/components/icons";

export interface RecentPostItem {
  id: string;
  title: string;
  date: string;
  image: string;
  href: string;
}

export interface BlogDetailSectionProps {
  slug?: string;
  data?: any;
  title?: string;
  highLight?: string;
  titleHighlight?: string;
  category?: string;
  publishDate?: string;
  authorName?: string;
  readTime?: string;
  heroImage?: string;
  recentPosts?: RecentPostItem[];
}

export default function BlogDetailSection(props: BlogDetailSectionProps) {
  const allBlogPosts = (siteMap.blog?.blogPosts || []) as any[];

  // Match post by slug, href, or fallback to first blog post
  const matchedPost =
    props.data ||
    (props.slug
      ? allBlogPosts.find(
          (p) =>
            p.id === props.slug ||
            p.href === `/blog/${props.slug}` ||
            p.href?.endsWith(`/${props.slug}`)
        )
      : null) ||
    allBlogPosts[0] ||
    {};

  const title =
    props.title ||
    matchedPost.title ||
    "5 Creative Business Card Design Ideas for 2025";
  const highLight =
    props.highLight ||
    props.titleHighlight ||
    matchedPost.highLight ||
    "";
  const publishDate =
    props.publishDate ||
    matchedPost.publishDate ||
    matchedPost.date ||
    "15 Mar 2025";
  const authorName =
    props.authorName ||
    matchedPost.authorName ||
    "PrintAxis Team";
  const readTime =
    props.readTime ||
    matchedPost.readTime ||
    "5 min read";
  const heroImage =
    props.heroImage ||
    matchedPost.imageSrc ||
    matchedPost.heroImage ||
    "/images/blog-business-cards.jpg";

  const leadParagraph =
    matchedPost.leadParagraph ||
    matchedPost.description ||
    "In today's competitive marketplace, packaging and print branding are essential tactile interactions customers have with your brand identity.";
  const secondParagraph =
    matchedPost.secondParagraph ||
    "From custom corrugated mailer boxes to luxury business cards, sensory tactile details directly impact customer perception, engagement, and brand recall.";
  const quote = matchedPost.quote || {
    text: "Great packaging turns a routine delivery into a memorable branded event. Customers don't just receive a product; they unwrap an experience.",
    author: "PrintAxis Packaging Innovation Team",
  };
  const sections = (matchedPost.sections || []) as Array<{
    heading: string;
    text: string;
    image: string;
    imageAlt: string;
  }>;

  const recentArticlesTitle =
    matchedPost.recentArticlesTitle || "Recent Articles";

  const fallbackRecentPosts: RecentPostItem[] = (
    (siteMap.blog as any)?.recentPosts ||
    allBlogPosts.slice(0, 3).map((p: any) => ({
      id: p.id,
      title: p.title,
      date: p.date,
      image: p.imageSrc,
      href: p.href,
    }))
  ) as RecentPostItem[];

  const recentPosts = props.recentPosts || fallbackRecentPosts;

  const needCustomCard = (siteMap.blog as any)?.needCustomCard || {
    title: "Need Custom Printing?",
    description:
      "Get an instant estimate for your packaging, marketing materials, or merchandise.",
    buttonText: "Request a Free Quote",
    buttonHref: "/get-a-quote",
  };

  return (
    <article className="bg-white py-8 lg:py-12">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          {/* Main Article Content */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#241121] leading-tight tracking-tight mb-3 sm:mb-4">
              {title}
              {highLight && (
                <>
                  <br />
                  <span className="text-[#cb5855]">{highLight}</span>
                </>
              )}
            </h1>

            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="w-4 h-4 text-[#cb5855]" />
                <time dateTime={publishDate}>{publishDate}</time>
              </div>

              <span className="text-gray-300">•</span>

              <div className="flex items-center gap-1.5">
                <AuthorIcon className="w-4 h-4 text-[#cb5855]" />
                <span>By {authorName}</span>
              </div>

              <span className="text-gray-300">•</span>

              <div className="flex items-center gap-1.5">
                <ClockIcon className="w-4 h-4 text-[#cb5855]" />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[22/10] w-full rounded-lg overflow-hidden mb-4 sm:mb-6 border border-gray-100 shadow-xs bg-gray-100">
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
            <div className="prose max-w-none text-[#5b525a] text-xs sm:text-sm lg:text-[15px] leading-relaxed space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-[#241121] font-medium leading-relaxed">
                {leadParagraph}
              </p>

              <p>{secondParagraph}</p>

              {/* Highlight Quote Box */}
              {quote?.text && (
                <blockquote className="my-4 border-l-4 border-[#cb5855] bg-[#fdf2f1]/60 rounded-r-lg p-3.5 sm:p-4 text-[#241121]">
                  <p className="text-sm sm:text-base font-bold italic leading-relaxed text-[#241121]">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  {quote.author && (
                    <cite className="block text-xs font-semibold text-[#cb5855] mt-2 not-italic">
                      — {quote.author}
                    </cite>
                  )}
                </blockquote>
              )}

              {/* Dynamic Content Sections */}
              {sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-center pt-2"
                >
                  <div className="md:col-span-7">
                    <h2 className="text-lg sm:text-xl font-bold text-[#241121] mb-2">
                      {sec.heading}
                    </h2>
                    <p>{sec.text}</p>
                  </div>
                  <div className="md:col-span-5">
                    <div className="relative aspect-[6/3] w-full rounded-lg overflow-hidden border border-gray-100 shadow-xs bg-gray-100">
                      <Image
                        src={sec.image}
                        alt={sec.imageAlt || sec.heading}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-24">
            {/* Recent Posts Card */}
            <div className="bg-white rounded-lg border border-gray-100 p-4 sm:p-5 shadow-xs">
              <h3 className="text-xl sm:text-2xl font-bold text-[#241121] mb-3 pb-2 border-b border-gray-100">
                {recentArticlesTitle}
              </h3>

              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={post.href}
                    className="flex items-center gap-3 group"
                  >
                    <div className="relative w-30 h-20 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <span className="text-[14px] text-gray-400 block mb-0.5">
                        {post.date}
                      </span>
                      <h4 className="text-xs sm:text-base font-bold text-[#241121] group-hover:text-[#cb5855] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Quote CTA Banner */}
            <NeedCustomCard
              title={needCustomCard.title}
              description={needCustomCard.description}
              buttonText={needCustomCard.buttonText}
              buttonHref={needCustomCard.buttonHref}
            />
          </aside>
        </div>
      </div>
    </article>
  );
}
