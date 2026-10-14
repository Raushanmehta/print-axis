"use client";

import React from "react";
import Image from "next/image";
import { ZoomInIcon } from "@/components/icons";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={() => onPreview?.(item)}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 border border-gray-100/90 shadow-xs hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Hover Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#241121]/85 via-[#241121]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 z-10">
        {/* Top Right Zoom Icon Button */}
        <div className="flex justify-end">
          <div className="w-8 h-8 rounded-lg bg-[#cb5855] text-white flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <ZoomInIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Content Info */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h4 className="text-white font-bold text-xs sm:text-sm leading-snug line-clamp-2">
            {item.title}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}
