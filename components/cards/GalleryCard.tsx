"use client";

import React from "react";
import Image from "next/image";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description?: string;
}

export interface GalleryCardProps {
  item: GalleryItem;
  onPreview?: (item: GalleryItem) => void;
}

export default function GalleryCard({ item, onPreview }: GalleryCardProps) {
  return (
    <div
      onClick={() => onPreview?.(item)}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 border border-gray-100/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onPreview?.(item);
        }
      }}
      aria-label={`View ${item.title}`}
    >
      {/* Background Image */}
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
      />

      {/* Hover Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#241121]/85 via-[#241121]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10">
        {/* Top Right Zoom Icon Button */}
        <div className="flex justify-end">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#cb5855] text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </div>

        {/* Bottom Content Info */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block text-[10px] sm:text-[11px] font-semibold text-white/90 bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full mb-1">
            {item.category}
          </span>
          <h4 className="text-white font-bold text-xs sm:text-sm leading-snug line-clamp-1">
            {item.title}
          </h4>
        </div>
      </div>
    </div>
  );
}
