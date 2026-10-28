"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NeedCustomCard from "@/components/cards/NeedCustomCard";
import { siteMap } from "@/data";
import { CalendarIcon, AuthorIcon, ClockIcon } from "@/components/icons";
import {
  FadeUp,
  ScaleIn,
} from "@/utils/animations";

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

// Blog article section showing post content and recent articles.
export default function BlogDetailSection(props: BlogDetailSectionProps) {
  const allBlogPosts = (siteMap.blog?.blogPosts || []) as any[];

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
    matchedPost.name ||
    "Printing Techniques & Insights";
  const highLight =
    props.highLight ||
    props.titleHighlight ||
    matchedPost.highLight ||
    matchedPost.titleHighlight ||
    "";
  const publishDate =
    props.publishDate ||
    matchedPost.publishDate ||
    matchedPost.date ||
    "April 20, 2026";
  const authorName =
    props.authorName ||
    matchedPost.authorName ||
    matchedPost.author ||
    "PrintAxis Specialist";
  const readTime =
    props.readTime ||
    matchedPost.readTime ||
    "4 Min Read";
  const heroImage =
    props.heroImage ||
    matchedPost.heroImage ||
    matchedPost.imageSrc ||
    matchedPost.image ||
    "/images/blog-business-card.webp";

  const leadParagraph =
    matchedPost.leadParagraph ||
    matchedPost.detailParagraph1 ||
    matchedPost.description ||
    "High-impact print marketing starts with quality craftsmanship. Discover essential strategies and production nuances that turn everyday paper collateral into tangible brand assets.";
  const secondParagraph =
    matchedPost.secondParagraph ||
    matchedPost.detailParagraph2 ||
    "From tactile soft-touch laminations to precision metallic foils and UV spots, choosing the appropriate surface treatment elevates customer perception from first touch.";

  const quote = matchedPost.quote || {
    text: "Print is not dead; it has evolved into the most tangible expression of premium brand trust in a digital world.",
    author: "PrintAxis Technical Lead",
  };

  const sections: { heading: string; text: string; image: string; imageAlt?: string }[] =
    matchedPost.sections || [
      {
        heading: "1. Select the Right Substrate and GSM",
        text: "Paper weight and fiber texture dictate the longevity and hand-feel of your promotional pieces. For corporate identity, we recommend 350 GSM matte or uncoated cotton stocks.",
        image: "/images/blog-brochures.webp",
        imageAlt: "Paper stocks sample",
      },
      {
        heading: "2. Color Calibration & CMYK Precision",
        text: "Ensure all source assets are formatted in 300 DPI CMYK color profiles with appropriate 3mm bleed margins to eliminate trimming artifacts.",
        image: "/images/why-choose-tshirts.webp",
        imageAlt: "Print press calibration",
      },
    ];

  const recentArticlesTitle =
    matchedPost.recentArticlesTitle || "Recent Articles";
  const recentPosts: RecentPostItem[] = (
    props.recentPosts ||
    matchedPost.recentPosts ||
    allBlogPosts.slice(0, 3).map((p: any) => ({
      id: p.id,
      title: p.title,
      date: p.date,
      image: p.imageSrc || p.image,
      href: p.href || `/blog/${p.id}`,
    }))
  ) as RecentPostItem[];

  const needCustomCard = matchedPost.needCustomCard || {
    title: "Need Custom Printing?",
    description:
      "Get high-quality custom prints for your business, events or personal use.",
    buttonText: "Contact Us",
    buttonHref: "/contact",
  };

  return (
    <article className="bg-white py-8 lg:py-12">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          <div className="lg:col-span-8 flex flex-col">
            <FadeUp delay={0.08}>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#241121] leading-tight tracking-tight mb-3 sm:mb-4">
                {title}
                {highLight && (
                  <>
                    <br />
                    <span className="text-[#cb5855]">{highLight}</span>
                  </>
                )}
              </h1>
            </FadeUp>

            <FadeUp delay={0.14}>
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
            </FadeUp>

            <ScaleIn delay={0.2}>
              <div className="relative aspect-[22/10] w-full rounded-lg overflow-hidden mb-4 sm:mb-6 border border-gray-100 shadow-xs bg-gray-100 group">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </ScaleIn>

            <div className="prose max-w-none text-[#5b525a] text-xs sm:text-sm lg:text-[15px] leading-relaxed space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-[#241121] font-medium leading-relaxed">
                {leadParagraph}
              </p>

              <p>{secondParagraph}</p>

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

          <aside className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-24">
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
