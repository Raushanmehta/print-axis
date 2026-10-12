import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  icon: React.ReactNode;
}

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export default function ServiceCard({
  service,
  className = "",
}: ServiceCardProps) {
  const targetHref = service.href || `/services/${service.id}`;

  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Top Photographic Mockup */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
          <Image
            src={service.imageSrc}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Floating Circular Icon Badge Overlapping Image */}
        <div className="relative -mt-6 ml-6 z-10 w-12 h-12 rounded-full bg-[#fdf0ef] border-2 border-white shadow-sm flex items-center justify-center text-[#cb5855] transition-transform duration-300 group-hover:scale-110">
          {service.icon}
        </div>

        {/* Card Text Content */}
        <div className="p-6 pt-3">
          <h3 className="text-lg sm:text-xl font-bold text-[#241121] group-hover:text-[#cb5855] transition-colors duration-200">
            {service.title}
          </h3>

          <p className="mt-2 text-sm text-[#665e64] leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between">
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

        {/* Circular Arrow Button */}
        <Link
          href={targetHref}
          aria-label={`Learn more about ${service.title}`}
          className="w-9 h-9 rounded-full border border-[#cb5855]/40 flex items-center justify-center text-[#cb5855] group-hover:border-[#cb5855] group-hover:bg-[#cb5855] group-hover:text-white transition-all duration-200"
        >
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
