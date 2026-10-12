"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ServiceFeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface OtherServiceItem {
  id: string;
  name: string;
  image: string;
  href: string;
  active?: boolean;
}

export interface ProcessStepItem {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServiceDetailSectionProps {
  mainTitlePart1?: string;
  mainTitleHighlight?: string;
  description?: string;
  heroImage?: string;
  heroImageAlt?: string;
  features?: ServiceFeatureItem[];
  otherServices?: OtherServiceItem[];
  processTagline?: string;
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: ProcessStepItem[];
  ctaTitle?: string;
  ctaDescription?: string;
}

const defaultFeatures: ServiceFeatureItem[] = [
  {
    id: "quality",
    title: "Premium Quality",
    description: "Sharp, vibrant and durable prints on every t-shirt.",
    icon: (
      <svg
        className="w-5 h-5 text-[#cb5855]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
        <path d="M11 3l-3 6 4 12 4-12-3-6" />
        <path d="M2 9h20" />
      </svg>
    ),
  },
  {
    id: "custom",
    title: "Custom Designs",
    description: "Bring your unique ideas to life with precision.",
    icon: (
      <svg
        className="w-5 h-5 text-[#cb5855]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
  },
  {
    id: "speed",
    title: "Fast & Reliable",
    description: "On-time delivery for small and bulk orders.",
    icon: (
      <svg
        className="w-5 h-5 text-[#cb5855]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const defaultOtherServices: OtherServiceItem[] = [
  {
    id: "1",
    name: "Business Card Printing",
    image: "/images/blog-business-cards.jpg",
    href: "/services",
  },
  {
    id: "2",
    name: "Brochure & Flyer Printing",
    image: "/images/blog-brochures.jpg",
    href: "/services",
  },
  {
    id: "3",
    name: "T-shirt Printing",
    image: "/images/why-choose-tshirts.jpg",
    href: "/services",
    active: true,
  },
  {
    id: "4",
    name: "Packaging & Labels",
    image: "/images/about-packaging.jpg",
    href: "/services",
  },
  {
    id: "5",
    name: "Sticker Printing",
    image: "/images/gallery/work-12.jpg",
    href: "/services",
  },
  {
    id: "6",
    name: "Banner & Flex Printing",
    image: "/images/gallery/work-7.jpg",
    href: "/services",
  },
];

const defaultProcessSteps: ProcessStepItem[] = [
  {
    stepNumber: "Step 01",
    title: "Share Your Design",
    description: "Send us your logo, artwork or ideas.",
    icon: (
      <svg
        className="w-6 h-6 text-[#cb5855]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    stepNumber: "Step 02",
    title: "Get a Preview",
    description: "We create a digital mockup for your approval.",
    icon: (
      <svg
        className="w-6 h-6 text-[#cb5855]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
        <circle cx="13.5" cy="6.5" r="1" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="1" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="1" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    stepNumber: "Step 03",
    title: "Printing Process",
    description: "Your design is printed with high-quality materials.",
    icon: (
      <svg
        className="w-6 h-6 text-[#cb5855]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    ),
  },
  {
    stepNumber: "Step 04",
    title: "Delivery",
    description: "Your custom T-shirts are ready and delivered on time.",
    icon: (
      <svg
        className="w-6 h-6 text-[#cb5855]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

export default function ServiceDetailSection({
  mainTitlePart1 = "T-shirt Printing",
  mainTitleHighlight = "Services",
  description = "Bring your ideas to life with our premium T-shirt printing services. We offer high-quality custom printing for businesses, events, teams, and personal use. From simple logos to stunning full-color designs, we deliver vibrant, long-lasting prints on a wide range of T-shirts with a perfect finish.",
  heroImage = "/images/service-tshirt-machine.jpg",
  heroImageAlt = "Direct-to-garment digital flatbed printing machine printing graphic on t-shirt",
  features = defaultFeatures,
  otherServices = defaultOtherServices,
  processTagline = "OUR PROCESS",
  processTitle = "How It Works",
  processSubtitle = "We make custom T-shirt printing simple and hassle-free. Follow these easy steps to get your designs printed with high quality and on-time delivery.",
  processSteps = defaultProcessSteps,
  ctaTitle = "Need Custom T-shirt Printing?",
  ctaDescription = "Get high-quality custom prints for your business, events or personal use.",
}: ServiceDetailSectionProps) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Top 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (Content & Big Image) */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Hero Main Machine Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.06)] bg-gray-50">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
              />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#241121] tracking-tight mt-6 sm:mt-8">
              {mainTitlePart1}{" "}
              <span className="text-[#cb5855]">{mainTitleHighlight}</span>
            </h1>

            {/* Description Text */}
            <p className="text-gray-500 text-xs sm:text-sm lg:text-[15px] leading-relaxed mt-3 max-w-3xl">
              {description}
            </p>

            {/* 3 Key Feature Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-100">
              {features.map((feature, idx) => (
                <div
                  key={feature.id}
                  className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                    idx !== features.length - 1
                      ? "sm:border-r sm:border-gray-100 sm:pr-4"
                      : ""
                  }`}
                >
                  {/* Circular Blush Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#fdf2f1] flex items-center justify-center mb-3 text-[#cb5855] shadow-sm">
                    {feature.icon}
                  </div>
                  <h2 className="font-bold text-sm sm:text-base text-[#241121] leading-snug">
                    {feature.title}
                  </h2>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Sidebar: Other Services & CTA Card) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 1: Other Services */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-5 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
              <h2 className="text-lg sm:text-xl font-bold text-[#241121] mb-4">
                Other Services
              </h2>

              <div className="space-y-2">
                {otherServices.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className={`flex items-center justify-between p-2 rounded-xl transition-all duration-200 group ${
                      service.active
                        ? "bg-[#fdf2f1] border border-[#cb5855]/30 text-[#cb5855]"
                        : "hover:bg-gray-50 text-gray-700 hover:text-[#241121]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0 bg-gray-100">
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-semibold transition-colors ${
                          service.active
                            ? "text-[#cb5855]"
                            : "group-hover:text-[#cb5855]"
                        }`}
                      >
                        {service.name}
                      </span>
                    </div>

                    <svg
                      className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                        service.active
                          ? "text-[#cb5855]"
                          : "text-gray-400 group-hover:text-[#cb5855]"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Card 2: Need Custom T-shirt Printing? */}
            <div className="bg-[#34142b] rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-white shadow-lg overflow-hidden relative flex flex-col justify-between">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start justify-between gap-4 relative z-10">
                <div className="flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-white leading-tight mb-2">
                    {ctaTitle}
                  </h2>
                  <p className="text-xs text-white/75 leading-relaxed mb-4 max-w-[210px]">
                    {ctaDescription}
                  </p>
                  <Link
                    href="/get-a-quote"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#cb5855] hover:bg-[#ba4c49] text-white text-xs font-semibold shadow-md transition-all duration-200 group w-fit"
                  >
                    <span>Get a Quote</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>

                {/* Right Stack of T-shirts Image */}
                <div className="relative w-24 h-28 sm:w-28 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-white/10">
                  <Image
                    src="/images/why-choose-tshirts.jpg"
                    alt="Custom printed folded t-shirts stack"
                    fill
                    className="object-cover object-center"
                    sizes="120px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card: OUR PROCESS — How It Works */}
        <div className="mt-12 sm:mt-16 bg-[#fdf7f6] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#fae4e1]">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8 sm:mb-12 pb-6 border-b border-[#f3d3cf]/60">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold tracking-widest text-[#cb5855] uppercase">
                  {processTagline}
                </span>
                <span className="w-5 h-[2px] bg-[#cb5855]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241121] tracking-tight">
                {processTitle}
              </h2>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm max-w-md leading-relaxed">
              {processSubtitle}
            </p>
          </div>

          {/* 4 Steps Row Connected with Arrows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 items-center">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.stepNumber}>
                {/* Step Item */}
                <div className="flex flex-col items-center text-center group lg:col-span-1">
                  {/* Circular White Badge */}
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#cb5855] mb-3 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                    {step.icon}
                  </div>

                  <span className="text-xs font-bold text-[#cb5855]">
                    {step.stepNumber}
                  </span>
                  <h3 className="font-bold text-xs sm:text-sm text-[#241121] mt-0.5 mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed max-w-[150px]">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (between steps) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-[#cb5855] lg:col-span-1">
                    <svg
                      className="w-5 h-5 opacity-70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
