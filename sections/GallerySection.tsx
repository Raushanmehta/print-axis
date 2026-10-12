"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import GalleryCard, { GalleryItem } from "@/components/cards/GalleryCard";

export interface GallerySectionProps {
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  items?: GalleryItem[];
}

const defaultGalleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Custom Product Box Packaging",
    category: "Packaging",
    image: "/images/gallery/work-1.jpg",
    alt: "PrintAxis Custom Product Packaging Box Mockup",
    description:
      "Full-color corrugated presentation box with precision die-cutting and satin matte finish.",
  },
  {
    id: "2",
    title: "Corporate Company Profile Brochure",
    category: "Corporate",
    image: "/images/gallery/work-2.jpg",
    alt: "Corporate Company Profile Booklet and Brochure",
    description:
      "Saddle-stitched executive company profile brochure featuring vivid color offset printing.",
  },
  {
    id: "3",
    title: "Custom Printed Graphic T-Shirt",
    category: "Apparel",
    image: "/images/gallery/work-3.jpg",
    alt: "Custom Printed Apparel and T-shirt on Display",
    description:
      "High-durability direct-to-garment (DTG) screen-printed tee with vibrant color payoff.",
  },
  {
    id: "4",
    title: "Restaurant Food Menu Card Stack",
    category: "Marketing",
    image: "/images/gallery/work-4.jpg",
    alt: "Restaurant Food Menu Cards Stack with High Gloss Finish",
    description:
      "Heavy cardstock food & drink menu with spill-resistant matte lamination.",
  },
  {
    id: "5",
    title: "Creative Editorial Magazine Spread",
    category: "Publications",
    image: "/images/gallery/work-5.jpg",
    alt: "Open Creative Magazine Spread with High Quality Layout",
    description:
      "Perfect-bound editorial catalog showcasing crisp typography and rich photography.",
  },
  {
    id: "6",
    title: "Corrugated Kraft Shipping Boxes",
    category: "Packaging",
    image: "/images/gallery/work-6.jpg",
    alt: "Branded Kraft Paper Shipping Boxes",
    description:
      "Eco-friendly natural kraft mailer boxes with custom soy-ink branded typography.",
  },
  {
    id: "7",
    title: "Exhibition Roll-Up Standee Banners",
    category: "Marketing",
    image: "/images/gallery/work-7.jpg",
    alt: "Trade Show Roll Up Pull Up Retractable Banners",
    description:
      "Heavy-duty anti-curl vinyl rollup banners with aluminum cassette base.",
  },
  {
    id: "8",
    title: "Embossed Foil Business Cards Stack",
    category: "Corporate",
    image: "/images/gallery/work-8.jpg",
    alt: "Stacked Premium Business Cards with PrintAxis Logo",
    description:
      "400 GSM soft-touch business cards with raised spot UV and metallic accents.",
  },
  {
    id: "9",
    title: "Hardcover Stamped Notebooks Stack",
    category: "Corporate",
    image: "/images/gallery/work-9.jpg",
    alt: "Hardcover Black Bound Notebooks Stacked",
    description:
      "Debossed leatherette hardcover journals with ribbon markers and archival paper.",
  },
  {
    id: "10",
    title: "Floral Invitation & Greeting Cards",
    category: "Stationery",
    image: "/images/gallery/work-10.jpg",
    alt: "Floral You are Invited Greeting Cards and Envelopes",
    description:
      "Textured linen cardstock invitations with matching custom printed envelopes.",
  },
  {
    id: "11",
    title: "Corporate Desk Tent Calendar 2026",
    category: "Stationery",
    image: "/images/gallery/work-11.jpg",
    alt: "2026 Desk Tent Calendar with Spiral Binding",
    description:
      "Wire-o bound desktop calendar with sturdy triangular stand and custom monthly sheets.",
  },
  {
    id: "12",
    title: "Custom Die-Cut Roll Stickers & Labels",
    category: "Packaging",
    image: "/images/gallery/work-12.jpg",
    alt: "Roll Label Stickers and Die Cut Decals",
    description:
      "Waterproof vinyl circle roll labels with peel-and-stick backing for branding.",
  },
  {
    id: "13",
    title: "Luxury Paper Shopping Gift Bags",
    category: "Packaging",
    image: "/images/gallery/work-13.jpg",
    alt: "Branded Paper Shopping Bags with Rope Handles",
    description:
      "Reinforced art paper luxury retail bags with woven cotton rope handles.",
  },
  {
    id: "14",
    title: "Corporate Letterhead & Envelopes",
    category: "Corporate",
    image: "/images/gallery/work-14.jpg",
    alt: "Corporate Identity Envelopes and Letterheads",
    description:
      "Executive stationery suite with matching Peel & Seal security envelopes.",
  },
  {
    id: "15",
    title: "Eco Cotton Canvas Tote Bags",
    category: "Apparel",
    image: "/images/gallery/work-15.jpg",
    alt: "PrintAxis Cotton Canvas Tote Bag on Chair",
    description:
      "Reusable 100% natural organic cotton tote bags with reinforced stitching.",
  },
  {
    id: "16",
    title: "Multi-Page Lookbook & Catalog",
    category: "Publications",
    image: "/images/gallery/work-16.jpg",
    alt: "Multi-Page Editorial Catalog on Wooden Surface",
    description:
      "Full-color product catalog with gloss cover lamination and crisp inside pages.",
  },
];

export default function GallerySection({
  tagline = "OUR GALLERY",
  titlePart1 = "Our Latest",
  titleHighlight = "Work",
  subtitle = "Take a look at some of our recent printing projects, showcasing our quality, creativity, and attention to detail.",
  items = defaultGalleryItems,
}: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Packaging",
    "Corporate",
    "Marketing",
    "Apparel",
    "Stationery",
    "Publications",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Tagline with red lines on both sides */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#cb5855]"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#cb5855] uppercase">
              {tagline}
            </span>
            <span className="w-8 h-[2px] bg-[#cb5855]"></span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#241121] tracking-tight">
            {titlePart1} <span className="text-[#cb5855]">{titleHighlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-xs sm:text-sm sm:text-base mt-3 leading-relaxed">
            {subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#cb5855] text-white shadow-sm shadow-[#cb5855]/20"
                    : "bg-gray-100/80 text-gray-600 hover:bg-gray-200/70"
                }`}
              >
                {cat === "All" ? "All Work" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Grid: 16 Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {filteredItems.map((item) => (
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveItem(null)}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-[#cb5855] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-[#cb5855] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            aria-label="Previous item"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-[#cb5855] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            aria-label="Next item"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl w-full bg-[#1b0d19] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
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

            <div className="p-5 sm:p-6 bg-[#241121] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10">
              <div>
                <span className="inline-block text-xs font-semibold text-[#cb5855] bg-white/10 px-2.5 py-0.5 rounded-full mb-1.5 uppercase tracking-wider">
                  {activeItem.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {activeItem.title}
                </h3>
                {activeItem.description && (
                  <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                    {activeItem.description}
                  </p>
                )}
              </div>

              <div className="text-xs text-white/50 whitespace-nowrap">
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
