"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import GalleryCard, { GalleryItem } from "@/components/cards/GalleryCard";
import { siteMap, type PrintAxisGalleryData } from "@/data";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export interface GallerySectionProps {
  data?: PrintAxisGalleryData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  items?: GalleryItem[];
}

export default function GallerySection(props: GallerySectionProps) {
  const fallback = siteMap.gallery;
  const tagline = props.tagline || props.data?.tagline || fallback.tagline;
  const titlePart1 = props.titlePart1 || props.data?.titlePart1 || fallback.titlePart1;
  const titleHighlight = props.titleHighlight || props.data?.titleHighlight || fallback.titleHighlight;
  const subtitle = props.subtitle || props.data?.subtitle || fallback.subtitle;
  const items: GalleryItem[] = (props.items || props.data?.galleryItems || fallback.galleryItems) as GalleryItem[];

  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const handleNext = useCallback(() => {
    if (!activeItem) return;
    const currentIndex = items.findIndex((i) => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % items.length;
    setActiveItem(items[nextIndex]);
  }, [activeItem, items]);

  const handlePrev = useCallback(() => {
    if (!activeItem) return;
    const currentIndex = items.findIndex((i) => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setActiveItem(items[prevIndex]);
  }, [activeItem, items]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === "Escape") setActiveItem(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem, handleNext, handlePrev]);

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7">
          {/* Tagline with red lines on both sides */}
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="w-6 h-[2px] bg-[#cb5855]"></span>
            <span className="text-xs font-bold tracking-widest text-[#cb5855] uppercase">
              {tagline}
            </span>
            <span className="w-6 h-[2px] bg-[#cb5855]"></span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#241121] tracking-tight">
            {titlePart1} <span className="text-[#cb5855]">{titleHighlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onPreview={(item) => setActiveItem(item)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
          onClick={() => setActiveItem(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveItem(null)}
            className="absolute top-4 right-4 z-50 w-9 h-9 rounded-lg bg-white/10 hover:bg-[#cb5855] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            aria-label="Close modal"
          >
            <CloseIcon className="w-4 h-4" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-9 h-9 rounded-lg bg-white/10 hover:bg-[#cb5855] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            aria-label="Previous item"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-9 h-9 rounded-lg bg-white/10 hover:bg-[#cb5855] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            aria-label="Next item"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl w-full bg-[#1b0d19] rounded-lg overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/40">
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            <div className="p-3 sm:p-4 bg-[#241121] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/10">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeItem.title}
                </h3>
                {activeItem.description && (
                  <p className="text-xs text-white/70 mt-0.5 max-w-xl">
                    {activeItem.description}
                  </p>
                )}
              </div>

              <div className="text-[11px] text-white/50 whitespace-nowrap">
                Item {items.findIndex((i) => i.id === activeItem.id) + 1} of{" "}
                {items.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
