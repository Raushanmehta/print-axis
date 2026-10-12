import React from "react";
import Link from "next/link";
import ServiceCard, { ServiceItem } from "@/components/cards/ServiceCard";

export interface ServiceFeature {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export interface ServiceSectionProps {
  tagline?: string;
  titlePart1?: string;
  titleHighlight1?: string;
  titleHighlight2?: string;
  description?: string;
  exploreButtonText?: string;
  exploreButtonHref?: string;
  features?: ServiceFeature[];
  services?: ServiceItem[];
}

const DEFAULT_FEATURES: ServiceFeature[] = [
  {
    id: "quality",
    title: "Premium Quality Print",
    icon: (
      <svg
        className="w-5 h-5 text-[#cb5855]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="8" r="6" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"
        />
      </svg>
    ),
  },
  {
    id: "variety",
    title: "Wide Range of Products",
    icon: (
      <svg
        className="w-5 h-5 text-[#cb5855]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m12.89 1.45 8 4a2 2 0 0 1 0 3.55l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1 1.79 0z"
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
    id: "delivery",
    title: "On-Time Delivery",
    icon: (
      <svg
        className="w-5 h-5 text-[#cb5855]"
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
];

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: "printing-services",
    title: "Printing Services",
    description:
      "High-quality printing for brochures, flyers, banners, catalogs and more, crafted to make your brand stand out.",
    imageSrc: "/images/service-printing.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect width="12" height="8" x="6" y="14" />
      </svg>
    ),
  },
  {
    id: "3d-printing",
    title: "3D Printing Service",
    description:
      "Bring your ideas to life with precision 3D printing for prototypes, models and custom products.",
    imageSrc: "/images/service-3d-printing.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 16-9 5-9-5V8l9-5 9 5v8z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.27 6.96 12 12.01l8.73-5.05"
        />
      </svg>
    ),
  },
  {
    id: "offset-printing",
    title: "Offset Printing",
    description:
      "Cost-effective and consistent printing for bulk orders with exceptional color accuracy.",
    imageSrc: "/images/service-offset.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect width="18" height="14" x="3" y="3" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
        <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    id: "design-branding",
    title: "Design & Branding",
    description:
      "Creative design solutions including logo, stationery and marketing materials to elevate your brand identity.",
    imageSrc: "/images/service-branding.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ServiceSection({
  tagline = "OUR SERVICES",
  titlePart1 = "Complete Printing",
  titleHighlight1 = "Solutions for",
  titleHighlight2 = "Your Business",
  description = "From custom printing to creative design, we deliver high-quality solutions that help your brand make a lasting impression.",
  exploreButtonText = "EXPLORE ALL SERVICES",
  exploreButtonHref = "/services",
  features = DEFAULT_FEATURES,
  services = DEFAULT_SERVICES,
}: ServiceSectionProps) {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Subtle organic wavy background shape on bottom-left */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#fbf0ef]/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Title, Description, Feature List, CTA Button */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28">
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
                {tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12] text-[#241121]">
              <span>{titlePart1}</span>
              <br />
              <span className="text-[#cb5855] inline-block mt-1">
                {titleHighlight1}
              </span>
              <br />
              <span className="text-[#cb5855] inline-block">
                {titleHighlight2}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-[#5b525a] text-sm sm:text-base leading-relaxed max-w-md">
              {description}
            </p>

            {/* 3 Feature Bullet Points */}
            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-3.5 group">
                  <div className="w-10 h-10 rounded-full bg-[#fdf0ef] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <span className="text-sm sm:text-[15px] font-semibold text-[#241121]">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-9">
              <Link
                href={exploreButtonHref}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] text-white font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-sm hover:shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200"
              >
                <span>{exploreButtonText}</span>
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

          {/* Right Column: 2x2 Grid of 4 Service Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}