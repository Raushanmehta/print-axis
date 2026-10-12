import React from "react";

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessSectionProps {
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Consultation",
    description:
      "We understand your requirements, ideas and goals to suggest the best solution.",
    icon: (
      <svg
        className="w-11 h-11 text-[#cb5855]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.5 15.5l-2.5 2v-2.2A5.5 5.5 0 0 1 4 11c0-2.76 2.46-5 5.5-5 1.48 0 2.82.53 3.82 1.41"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.5 7c3.04 0 5.5 2.24 5.5 5 0 1.25-.5 2.39-1.34 3.25L20 18l-3.2-1.07c-.7.36-1.47.57-2.3.57-3.04 0-5.5-2.24-5.5-5s2.46-5 5.5-5z"
        />
        <circle cx="14.5" cy="12" r="1.5" fill="currentColor" />
        <path strokeLinecap="round" d="M14.5 9.5a2.5 2.5 0 0 1 2.5 2.5" />
      </svg>
    ),
  },
  {
    stepNumber: "02",
    title: "Design & Proof",
    description:
      "Our creative team creates designs and shares proofs for your approval.",
    icon: (
      <svg
        className="w-11 h-11 text-[#cb5855]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect width="18" height="12" x="3" y="3" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 15v6" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14.5 5.5-5.5 5.5v2h2l5.5-5.5a1.41 1.41 0 0 0-2-2z"
        />
      </svg>
    ),
  },
  {
    stepNumber: "03",
    title: "Printing",
    description:
      "Using advanced technology, we print with precision and vibrant quality.",
    icon: (
      <svg
        className="w-11 h-11 text-[#cb5855]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <polyline points="6 9 6 2 18 2 18 9" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
        />
        <rect width="12" height="8" x="6" y="14" rx="1" />
        <circle cx="18" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    stepNumber: "04",
    title: "Delivery",
    description:
      "Your order is carefully packaged and delivered on time, anywhere you need.",
    icon: (
      <svg
        className="w-11 h-11 text-[#cb5855]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 18H9" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 18h2a1 1 0 0 0 1-1v-5l-3-4h-5v10"
        />
        <circle cx="7.5" cy="18" r="2" />
        <circle cx="17.5" cy="18" r="2" />
        <path strokeLinecap="round" d="M2 7h3M1 11h4M3 15h2" />
      </svg>
    ),
  },
];

export default function ProcessSection({
  tagline = "HOW WE DO",
  titlePart1 = "From Idea to Print",
  titleHighlight = "Our Simple Process",
  subtitle = "We follow a streamlined process to deliver high-quality printing solutions with precision, speed, and complete customer satisfaction.",
  steps = DEFAULT_STEPS,
}: ProcessSectionProps) {
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

        {/* 4 Steps Row */}
        <div className="mt-14 sm:mt-18 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative flex flex-col items-center group"
            >
              {/* Connector Line to Next Step (Visible on desktop lg) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:flex items-center justify-center absolute top-14 left-[calc(50%+64px)] w-[calc(100%-128px)] z-0"
                  aria-hidden="true"
                >
                  <div className="flex-1 border-t-2 border-dashed border-[#cb5855]/40" />
                  <div className="w-6 h-6 rounded-full bg-[#cb5855] text-white flex items-center justify-center text-[10px] shrink-0 mx-1.5 shadow-xs transition-transform duration-200 group-hover:scale-110">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 border-t-2 border-dashed border-[#cb5855]/40" />
                </div>
              )}

              {/* Large Circular Icon Container */}
              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#fdf0ef] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs">
                {step.icon}

                {/* Step Number Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#cb5855] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  {step.stepNumber}
                </div>
              </div>

              {/* Step Title */}
              <h3 className="mt-7 text-lg sm:text-xl font-bold text-[#241121] text-center group-hover:text-[#cb5855] transition-colors duration-200">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="mt-2.5 text-xs sm:text-sm text-[#665e64] text-center leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}