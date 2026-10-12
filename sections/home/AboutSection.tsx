import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface AboutSectionProps {
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  largeImageSrc?: string;
  smallImage1Src?: string;
  smallImage2Src?: string;
}

export default function AboutSection({
  tagline = "ABOUT PRINTAXIS",
  titlePart1 = "Print Solutions",
  titleHighlight = "Built for Your Brand",
  description = "At PrintAxis, we combine creativity, technology, and craftsmanship to deliver high-quality printing solutions for businesses of all sizes. From marketing materials to custom packaging, we help brands communicate better, stand out, and make a lasting impression.",
  buttonText = "KNOW MORE",
  buttonHref = "/about",
  largeImageSrc = "/images/about-machine.jpg",
  smallImage1Src = "/images/about-brochures.jpg",
  smallImage2Src = "/images/about-packaging.jpg",
}: AboutSectionProps) {
  return (
    <section className="relative w-full bg-white py-8 lg:py-12 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          {/* Left Column: Heading, Paragraph, CTA and 2 Smaller Images */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Tagline / Sub-header */}
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
                  {tagline}
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight leading-[1.12] text-[#241121]">
                <span>{titlePart1}</span>
                <br />
                <span className="text-[#cb5855] inline-block mt-1">
                  {titleHighlight}
                </span>
              </h2>

              {/* Description Paragraph */}
              <p className="mt-2 text-[#5b525a] text-sm sm:text-base leading-relaxed max-w-xl">
                {description}
              </p>

              {/* Action Button */}
              <div className="mt-2 sm:mt-4">
                <Link
                  href={buttonHref}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5  bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] text-white font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-sm hover:shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200"
                >
                  <span>{buttonText}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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

            {/* Bottom 2 Smaller Gallery Images */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-2 pt-4">
              {/* Small Image 1: Stack of brochures */}
              <div className="relative group overflow-hidden  shadow-md border border-gray-100 bg-gray-50 aspect-[4/3]">
                <Image
                  src={smallImage1Src}
                  alt="PrintAxis Ideas Printed Brighter brochures"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Small Image 2: Packaging boxes */}
              <div className="relative group overflow-hidden  shadow-md border border-gray-100 bg-gray-50 aspect-[4/3]">
                <Image
                  src={smallImage2Src}
                  alt="PrintAxis Packaging & Mailing Boxes"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Large Industrial Press Machine Image */}
          <div className="lg:col-span-6 relative flex items-center lg:pr-6 xl:pr-10">
            <div className="relative w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]">
              {/* Main Showcase Image Container */}
              <div className="relative z-10 w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] overflow-hidden shadow-xl border border-gray-100 bg-gray-50 group">
                <Image
                  src={largeImageSrc}
                  alt="PrintAxis Industrial Digital Printing Press Machine"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outer Decorative Accent Geometric Frame on Right Edge */}
      {/* Corner Graphic Accents (matching screenshot) */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 lg:w-28 pointer-events-none hidden sm:flex flex-col justify-between items-end z-0"
        aria-hidden="true"
      >
        {/* Top-Right Graphic Accent (Flush to right edge) */}
        <div className="w-full flex justify-end">
          <svg
            className="w-16 sm:w-20 md:w-24 lg:w-28 h-24 sm:h-28 md:h-32 lg:h-36 text-[#cb5855]"
            viewBox="0 0 110 140"
            fill="currentColor"
          >
            <polygon points="110,0 0,0 0,65 50,65 50,140 110,140" />
          </svg>
        </div>

        {/* Vertical thin accent line running between top and bottom blocks */}
        <div className="w-[1.5px] bg-[#cb5855]/70 h-full my-2 mr-8 sm:mr-10 md:mr-11 lg:mr-12" />

        {/* Bottom-Right Graphic Accent (Flush to right edge) */}
        <div className="w-full flex justify-end">
          <svg
            className="w-16 sm:w-20 md:w-24 lg:w-28 h-24 sm:h-28 md:h-32 lg:h-36 text-[#cb5855]"
            viewBox="0 0 110 140"
            fill="currentColor"
          >
            <polygon points="110,140 0,140 0,75 50,75 50,0 110,0" />
          </svg>
        </div>
      </div>
    </section>
  );
}