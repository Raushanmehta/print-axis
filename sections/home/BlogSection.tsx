"use client";

import React, { useState } from "react";
import BlogCard, { BlogPost } from "@/components/cards/BlogCard";

export interface BlogSectionProps {
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  posts?: BlogPost[];
}

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: "business-card-ideas-2025",
    date: "15 Mar 2025",
    title: "5 Creative Business Card Design Ideas for 2025",
    description:
      "Discover innovative business card designs that leave a lasting impression and help your brand stand out.",
    imageSrc: "/images/blog-business-cards.jpg",
    href: "/blog/business-card-ideas-2025",
  },
  {
    id: "why-brochures-work-digital-age",
    date: "10 Mar 2025",
    title: "Why Brochures Still Work in the Digital Age",
    description:
      "Learn how professionally printed brochures can still create real impact in today’s digital world.",
    imageSrc: "/images/blog-brochures.jpg",
    href: "/blog/why-brochures-work-digital-age",
  },
  {
    id: "custom-packaging-brand-value",
    date: "05 Mar 2025",
    title: "How Custom Packaging Boosts Your Brand Value",
    description:
      "See how custom packaging can enhance your product presentation and build stronger customer trust.",
    imageSrc: "/images/blog-packaging.jpg",
    href: "/blog/custom-packaging-brand-value",
  },
];

export default function BlogSection({
  tagline = "OUR BLOGS",
  titlePart1 = "Insights &",
  titleHighlight = "Printing Ideas",
  subtitle = "Explore tips, trends and ideas to make the most of your printing needs and grow your brand with creativity.",
  posts = DEFAULT_POSTS,
}: BlogSectionProps) {
  const [activePosts, setActivePosts] = useState(posts);

  const handlePrev = () => {
    setActivePosts((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      if (last) copy.unshift(last);
      return copy;
    });
  };

  const handleNext = () => {
    setActivePosts((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      if (first) copy.push(first);
      return copy;
    });
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Tagline with lines on both sides */}
          <div className="flex items-center justify-center gap-3 mb-3.5">
            <span
              className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
              {tagline}
            </span>
            <span
              className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
              aria-hidden="true"
            />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#241121]">
            <span>{titlePart1} </span>
            <span className="text-[#cb5855]">{titleHighlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Carousel / Grid Container with Side Navigation Arrows */}
        <div className="relative mt-14 sm:mt-18 lg:mt-20">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous blog articles"
            className="hidden xl:flex absolute -left-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#fdf0ef] text-[#cb5855] items-center justify-center hover:bg-[#fae0de] hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm z-20"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* 3-Column Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activePosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next blog articles"
            className="hidden xl:flex absolute -right-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#fdf0ef] text-[#cb5855] items-center justify-center hover:bg-[#fae0de] hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm z-20"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}