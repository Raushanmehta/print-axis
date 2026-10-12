import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
}

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export default function BlogCard({ post, className = "" }: BlogCardProps) {
  const targetHref = post.href || `/blog/${post.id}`;

  return (
    <article
      className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Top Photographic Cover */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
          <Image
            src={post.imageSrc}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Card Content */}
        <div className="p-6 pt-5">
          {/* Date Badge */}
          <span className="inline-block bg-[#fdf0ef] text-[#cb5855] text-xs font-semibold px-3 py-1 rounded-md mb-3.5">
            {post.date}
          </span>

          {/* Post Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#241121] group-hover:text-[#cb5855] transition-colors duration-200 leading-snug">
            <Link href={targetHref}>{post.title}</Link>
          </h3>

          {/* Excerpt Description */}
          <p className="mt-2.5 text-sm text-[#665e64] leading-relaxed line-clamp-3">
            {post.description}
          </p>
        </div>
      </div>

      {/* Read More Footer */}
      <div className="px-6 pb-6 pt-1">
        <Link
          href={targetHref}
          className="text-sm font-semibold text-[#cb5855] inline-flex items-center gap-1.5 hover:underline group/link"
        >
          <span>Read More</span>
          <span
            className="transition-transform duration-200 group-hover/link:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
