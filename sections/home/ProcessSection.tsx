import React from "react";
import Image from "next/image";
import { siteMap, PrintAxisProcessData } from "@/data";
import { ChevronRightIcon } from "@/components/icons";

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
}

export interface ProcessSectionProps {
  data?: PrintAxisProcessData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

export default function ProcessSection(props: ProcessSectionProps) {
  const data = props.data || siteMap.process;

  const tagline = props.tagline || data?.tagline || siteMap.process.tagline;
  const titlePart1 = props.titlePart1 || data?.titlePart1 || siteMap.process.titlePart1;
  const titleHighlight = props.titleHighlight || data?.titleHighlight || siteMap.process.titleHighlight;
  const subtitle = props.subtitle || data?.subtitle || siteMap.process.subtitle;
  const steps = (props.steps || data?.steps || siteMap.process.steps) as ProcessStep[];

  return (
    <section className="relative w-full bg-white py-8 lg:py-12 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span
              className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
              {tagline}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#241121]">
            <span>{titlePart1} </span>
            <span className="text-[#cb5855]">{titleHighlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 relative">
          {steps.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative flex flex-col items-center group"
            >
              {/* Connector Line to Next Step (Visible on desktop lg) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:flex items-center justify-center absolute top-12 sm:top-16 left-[calc(50%+54px)] sm:left-[calc(50%+70px)] w-[calc(100%-108px)] sm:w-[calc(100%-140px)] z-0"
                  aria-hidden="true"
                >
                  {/* Left animated dashed line flowing right */}
                  <div className="flex-1 overflow-hidden h-2 flex items-center">
                    <svg className="w-full h-2 overflow-visible" preserveAspectRatio="none">
                      <line
                        x1="0"
                        y1="1"
                        x2="100%"
                        y2="1"
                        stroke="#cb5855"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        strokeOpacity="0.55"
                        className="animate-dash-flow"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="0"
                          to="-24"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </svg>
                  </div>

                  {/* Middle Arrow Badge */}
                  <div className="w-8 h-8 rounded-full bg-[#cb5855] text-white flex items-center justify-center text-[15px] shrink-0 mx-2 shadow-xs transition-transform duration-200 group-hover:scale-110">
                    <ChevronRightIcon className="w-3.5 h-3.5" />
                  </div>

                  {/* Right animated dashed line flowing right */}
                  <div className="flex-1 overflow-hidden h-2 flex items-center">
                    <svg className="w-full h-2 overflow-visible" preserveAspectRatio="none">
                      <line
                        x1="0"
                        y1="1"
                        x2="100%"
                        y2="1"
                        stroke="#cb5855"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        strokeOpacity="0.55"
                        className="animate-dash-flow"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="0"
                          to="-24"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </svg>
                  </div>
                </div>
              )}

              {/* Circular Icon Container */}
              <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#fdf0ef] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs">
                {step.imageSrc ? (
                  <Image
                    src={step.imageSrc}
                    alt={step.title}
                    width={64}
                    height={64}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  step.icon
                )}

                {/* Step Number Badge */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#cb5855] text-white text-[16px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  {step.stepNumber}
                </div>
              </div>

              {/* Step Title */}
              <h3 className="mt-4 text-base sm:text-lg font-bold text-[#241121] text-center group-hover:text-[#cb5855] transition-colors duration-200">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="mt-1.5 text-xs sm:text-sm text-[#665e64] text-center leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}