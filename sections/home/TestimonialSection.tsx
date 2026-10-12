"use client";

import React, { useState } from "react";
import Image from "next/image";
import TestimonialCard, {
  TestimonialItem,
} from "@/components/cards/TestimonialCard";

export interface TestimonialSectionProps {
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  testimonials?: TestimonialItem[];
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rohit-mehta",
    name: "Rohit Mehta",
    role: "Founder, Mehta Creations",
    quote:
      "PrintAxis has been our go-to printing partner for all our marketing materials. The quality, attention to detail, and timely delivery are exceptional. Our brand looks more professional thanks to their amazing work.",
    rating: 5,
    imageSrc: "/images/testimonial-client.jpg",
  },
  {
    id: "ananya-sharma",
    name: "Ananya Sharma",
    role: "Brand Director, Apex Studio",
    quote:
      "Working with PrintAxis transformed our packaging presentations. Their precision, color matching, and premium paper selections helped us win major retail partners with confidence.",
    rating: 5,
    imageSrc: "/images/testimonial-client.jpg",
  },
];

export default function TestimonialSection({
  tagline = "TESTIMONIALS",
  titlePart1 = "What Our",
  titleHighlight = "Clients Say",
  subtitle = "We take pride in delivering high-quality printing solutions that help businesses grow. Here's what our clients have to say about working with us.",
  testimonials = DEFAULT_TESTIMONIALS,
}: TestimonialSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex] || testimonials[0];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Tagline */}
          <div className="flex items-center justify-center gap-3 mb-3.5">
            <span
              className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
              {tagline}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#241121]">
            <span>{titlePart1} </span>
            <span className="text-[#cb5855]">{titleHighlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Testimonial Content Grid */}
        <div className="mt-14 sm:mt-18 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Dark Plum Testimonial Card */}
          <div className="lg:col-span-7">
            <TestimonialCard
              testimonial={currentTestimonial}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>

          {/* Right Column: Circular Portrait with Orbital Ring & Accent Shapes */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              {/* Orbital Ring Arc 1 */}
              <div
                className="absolute inset-0 rounded-full border border-[#cb5855]/30 -m-3 pointer-events-none"
                aria-hidden="true"
              />

              {/* Orbital Ring Arc 2 */}
              <div
                className="absolute -top-4 -bottom-4 -left-4 -right-4 rounded-full border border-dashed border-[#cb5855]/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Top-Right Accent Dot */}
              <div
                className="absolute top-4 right-5 w-3.5 h-3.5 rounded-full bg-[#cb5855] shadow-xs z-20"
                aria-hidden="true"
              />

              {/* Bottom-Left Solid Coral Circle Badge */}
              <div
                className="absolute bottom-6 left-2 w-9 h-9 rounded-full bg-[#ba4f4c] border-2 border-white shadow-md z-20"
                aria-hidden="true"
              />

              {/* Far Right Matrix Dots Pattern */}
              <div
                className="absolute -right-6 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-5 gap-2 opacity-40 pointer-events-none"
                aria-hidden="true"
              >
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#cb5855]"
                  />
                ))}
              </div>

              {/* Main Client Portrait Container */}
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
                <Image
                  src={currentTestimonial.imageSrc}
                  alt={currentTestimonial.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}