import React from "react";
import Link from "next/link";

export interface CtaSectionProps {
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImageSrc?: string;
}

export default function CtaSection({
  titlePart1 = "Let’s Bring Your",
  titleHighlight = "Ideas to Print",
  description = "Custom printing solutions for your business, events and personal needs. Get high-quality prints that make an impact.",
  buttonText = "Get a Quote",
  buttonHref = "/contact",
  backgroundImageSrc = "/images/cta-banner.png",
}: CtaSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-no-repeat bg-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center bg-[#fdf5f4]"
      style={{
        backgroundImage: `url('${backgroundImageSrc}')`,
      }}
    >
      {/* Soft gradient backdrop for narrow mobile viewports */}
      <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent pointer-events-none lg:hidden"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-20 text-center flex flex-col items-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold tracking-tight leading-[1.12] text-[#241121]">
          <span>{titlePart1}</span>
          <br />
          <span className="text-[#cb5855] inline-block mt-1">
            {titleHighlight}
          </span>
        </h2>

        {/* Subtitle / Description */}
        <p className="mt-4 sm:mt-5 text-[#5b525a] text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl mx-auto">
          {description}
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-9">
          <Link
            href={buttonHref}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] text-white font-semibold text-sm sm:text-base tracking-wide shadow-sm hover:shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200"
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
    </section>
  );
}