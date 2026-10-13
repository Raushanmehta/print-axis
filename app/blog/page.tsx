import React from "react";
import BlogCard, { BlogPost } from "@/components/cards/BlogCard";
import PageTopSection from "@/components/common/PageTopSection";
import CtaSection from "@/sections/home/CtaSection";
import { siteMap, type PrintAxisBlogData } from "@/data";

export interface BlogPageProps {
  data?: PrintAxisBlogData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  posts?: BlogPost[];
}

export default function BlogPage(props: BlogPageProps = {}) {
  const { cta, pageTopSection } = siteMap;
  const blog = props.data || siteMap.blog;

  const tagline = props.tagline || blog?.tagline || "OUR BLOGS";
  const titlePart1 = props.titlePart1 || blog?.titlePart1 || "Insights &";
  const titleHighlight =
    props.titleHighlight || blog?.titleHighlight || "Printing Ideas";
  const subtitle =
    props.subtitle ||
    blog?.subtitle ||
    "Explore tips, trends and ideas to make the most of your printing needs and grow your brand with creativity.";
  const posts =
    props.posts || (blog?.blogPosts as unknown as BlogPost[]) || [];

  return (
    <main>
      <PageTopSection
        data={pageTopSection}
        title="Our Blogs"
        breadcrumb="Blog"
      />
      <section className="relative w-full bg-white py-8 lg:py-12 overflow-hidden">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Tagline with lines on both sides */}
            <div className="flex items-center justify-center gap-3 mb-2">
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
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#241121]">
              <span>{titlePart1} </span>
              <span className="text-[#cb5855]">{titleHighlight}</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-4 mt-4 sm:mt-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection data={cta} />
    </main>
  );
}