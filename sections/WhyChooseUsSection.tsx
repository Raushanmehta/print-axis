"use client";

import React from "react";
import Image from "next/image";

export interface WhyChooseUsFeature {
  id: string;
  text: string;
}

export interface WhyChooseUsSectionProps {
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  features?: WhyChooseUsFeature[];
  imageSrc?: string;
  imageAlt?: string;
}

const defaultFeatures: WhyChooseUsFeature[] = [
  { id: "1", text: "High-Quality Printing" },
  { id: "2", text: "Vibrant & Long-Lasting Prints" },
  { id: "3", text: "Wide Range of T-shirt Options" },
  { id: "4", text: "Affordable Pricing" },
  { id: "5", text: "No Minimum Order" },
  { id: "6", text: "On-Time Delivery" },
];

export default function WhyChooseUsSection({
  tagline = "WHY CHOOSE US",
  titlePart1 = "Custom T-shirts for",
  titleHighlight = "Every Occasion",
  description = "Whether it's for your business, event, school, sports team or personal use, our custom T-shirt printing solutions help you stand out with style and quality.",
  features = defaultFeatures,
  imageSrc = "/images/why-choose-tshirts.jpg",
  imageAlt = "Custom T-shirts Stack with Graphic Print on Wooden Table",
}: WhyChooseUsSectionProps) {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle & Features */}
          <div className="lg:col-span-6 xl:col-span-7">
            {/* Title Block with Left Red Border Accent */}
            <div className="border-l-[3px] border-[#cb5855] pl-4 sm:pl-5">
              {/* Tagline with horizontal dash */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-[2px] bg-[#cb5855]" />
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#cb5855] uppercase">
                  {tagline}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold leading-[1.18] tracking-tight">
                <span className="text-[#241121] block">{titlePart1}</span>
                <span className="text-[#cb5855] block">{titleHighlight}</span>
              </h2>
            </div>

            {/* Description Subtitle */}
            <p className="text-gray-500 text-xs sm:text-sm lg:text-[15px] leading-relaxed mt-5 mb-8 max-w-xl">
              {description}
            </p>

            {/* 6 Features: 2 Columns x 3 Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-5 max-w-xl">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-3">
                  {/* Red Circle with Checkmark Icon */}
                  <div className="w-5 h-5 rounded-full bg-[#cb5855] text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#cb5855]/25">
                    <svg
                      className="w-3 h-3 text-white"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2.5 6.2 4.8 8.5 9.5 3.5" />
                    </svg>
                  </div>

                  {/* Feature Text */}
                  <span className="text-xs sm:text-sm font-semibold text-[#241121] tracking-tight">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High Quality T-shirts Image */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-100 group">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle light vignette border for depth */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl sm:rounded-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
