import React from "react";
import Link from "next/link";

export interface FeatureBadge {
  id: string;
  line1: string;
  line2: string;
  icon: React.ReactNode;
}

export interface HeroSectionProps {
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  titlePart2?: string;
  description?: string;
  quoteButtonText?: string;
  quoteButtonHref?: string;
  servicesButtonText?: string;
  servicesButtonHref?: string;
  features?: FeatureBadge[];
}

const DEFAULT_FEATURES: FeatureBadge[] = [
  {
    id: "quality",
    line1: "Premium",
    line2: "Print Quality",
    icon: (
      <svg
        className="w-10 h-10 text-[#cb5855] shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m12.89 1.45 8 4a2 2 0 0 1 0 3.55l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1 0-3.55l8-4a2 2 0 0 1 1.79 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2 12 9.11 4.55a2 2 0 0 0 1.78 0L22 12"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2 17 9.11 4.55a2 2 0 0 0 1.78 0L22 17"
        />
      </svg>
    ),
  },
  {
    id: "speed",
    line1: "Fast",
    line2: "Turnaround",
    icon: (
      <svg
        className="w-10 h-10 text-[#cb5855] shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 18H9" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 18h2a1 1 0 0 0 1-1v-5l-3-4h-5v10"
        />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
        <path strokeLinecap="round" d="M2 8h3M1 12h4" />
      </svg>
    ),
  },
  {
    id: "support",
    line1: "Dedicated",
    line2: "Support",
    icon: (
      <svg
        className="w-10 h-10 text-[#cb5855] shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 18v-6a9 9 0 0 1 18 0v6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 19a2 2 0 0 1-2 2H9" />
      </svg>
    ),
  },
];

export default function HeroSection({
  tagline = "PRINTING SOLUTIONS",
  titlePart1 = "High Quality",
  titleHighlight = "Printing",
  titlePart2 = "For Your Business",
  description = "From branding and packaging to marketing materials, we deliver premium printing solutions that make your brand stand out.",
  quoteButtonText = "GET A QUOTE",
  quoteButtonHref = "/contact",
  servicesButtonText = "OUR SERVICES",
  servicesButtonHref = "/services",
  features = DEFAULT_FEATURES,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden bg-white bg-cover bg-no-repeat bg-right lg:bg-center min-h-[400px] sm:min-h-[450px] lg:min-h-[450px] xl:min-h-[450px] flex items-center"
      style={{
        backgroundImage: "url('/images/hero-banner.png')",
      }}
    >
      {/* Soft gradient overlay on mobile screens to guarantee crisp text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20 lg:hidden pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-14 lg:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Headline, Text, CTA Buttons, Feature Badges */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            {/* Tagline / Sub-header */}
            <div className="flex items-center gap-3 mb-2">
              <span
                className="w-10 h-[2px] bg-[#cb5855] rounded-full inline-block"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
                {tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-extrabold tracking-tight leading-[1.08] text-[#241121]">
              <span>{titlePart1}</span>
              <br />
              <span className="text-[#cb5855] inline-block my-1">
                {titleHighlight}
              </span>
              <br />
              <span>{titlePart2}</span>
            </h1>

            {/* Description */}
            <p className="mt-2 text-[#5b525a] text-base sm:text-[17px] leading-relaxed max-w-lg">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-4 sm:mt-4 flex flex-wrap items-center gap-4">
              {/* Primary "GET A QUOTE" Button */}
              <Link
                href={quoteButtonHref}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] text-white font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-sm hover:shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200"
              >
                <span>{quoteButtonText}</span>
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

              {/* Secondary "OUR SERVICES" Button */}
              <Link
                href={servicesButtonHref}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#241121] bg-white/90 backdrop-blur-xs text-[#241121] font-semibold text-xs sm:text-sm tracking-wide uppercase hover:bg-[#241121] hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                <span>{servicesButtonText}</span>
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

            {/* Bottom 3 Feature Highlights */}
            <div className="mt-6 pt-7 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
              {features.map((item) => (
                <div key={item.id} className="flex items-center gap-3 group">
                  <div className="transition-transform duration-200 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#241121] leading-tight">
                      {item.line1}
                    </span>
                    <span className="text-[13px] font-bold text-[#241121] leading-tight">
                      {item.line2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Spacer letting the background banner mockup be clearly seen */}
          <div
            className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none min-h-[460px]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}