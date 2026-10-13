import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

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
      className={`group relative bg-white rounded-sm overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Top Photographic Mockup */}
        <div className="relative w-full aspect-[20/10] overflow-hidden bg-gray-50">
          <Image
            src={service.imageSrc}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Floating Circular Icon Badge Overlapping Image */}
        <div className="relative -mt-8 ml-4 z-10 w-16 h-16 rounded-full bg-[#fdf0ef] border-2 border-white shadow-sm flex items-center justify-center text-[#cb5855] transition-transform duration-300 group-hover:scale-110">
          {service.icon}
        </div>

        {/* Card Text Content */}
        <div className="px-4 pb-1 pt-2">
          <h3 className="text-base sm:text-lg font-bold text-[#241121] group-hover:text-[#cb5855] transition-colors duration-200">
            {service.title}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-[#665e64] leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-4 pb-4 flex items-center justify-between">
        <Link
          href={targetHref}
          className="text-xs sm:text-sm font-semibold text-[#cb5855] inline-flex items-center gap-1.5 "
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
          className="w-10 h-10 rounded-full border border-[#cb5855]/40 flex items-center justify-center text-[#cb5855] group-hover:border-[#cb5855] group-hover:bg-[#cb5855] group-hover:text-white transition-all duration-200"
        >
          <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
