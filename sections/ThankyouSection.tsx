"use client";

import React from "react";
import Link from "next/link";
import { siteMap, type PrintAxisThankyouData } from "@/data";
import {
  SuccessBadgeCheckIcon,
  HomeIcon,
  FileTextIcon,
  CheckCircleIcon,
  TruckIcon,
} from "@/components/icons";

export interface ThankyouStepItem {
  step: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ThankyouSectionProps {
  data?: PrintAxisThankyouData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  referenceNumber?: string;
  steps?: ThankyouStepItem[];
}

const defaultStepIcons: React.ReactNode[] = [
  <FileTextIcon key="step-1" className="w-6 h-6 text-[#cb5855]" />,
  <CheckCircleIcon key="step-2" className="w-6 h-6 text-[#cb5855]" />,
  <TruckIcon key="step-3" className="w-6 h-6 text-[#cb5855]" />,
];

export default function ThankyouSection(props: ThankyouSectionProps) {
  const fallback = siteMap.thankyou;
  const tagline = props.tagline || props.data?.tagline || fallback.tagline;
  const titlePart1 = props.titlePart1 || props.data?.titlePart1 || fallback.titlePart1;
  const titleHighlight = props.titleHighlight || props.data?.titleHighlight || fallback.titleHighlight;
  const subtitle = props.subtitle || props.data?.subtitle || fallback.subtitle;
  const referenceNumber = props.referenceNumber;
  const referencePrefix = props.data?.referencePrefix || fallback.referencePrefix;
  const backBtn = props.data?.backButton || fallback.backButton;
  const servicesBtn = props.data?.servicesButton || fallback.servicesButton;
  const contactBtn = props.data?.contactButton || fallback.contactButton;

  const rawSteps = props.steps || props.data?.steps || fallback.steps;

  return (
    <section className="relative w-full bg-white py-8 lg:py-14 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Main Success Container */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Animated Success Badge */}
          <div className="relative mb-5 flex items-center justify-center">
            {/* Glowing outer ring */}
            <div className="absolute w-24 h-24 rounded-full bg-[#cb5855]/15 animate-ping opacity-60" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#cb5855] to-[#e06864] text-white flex items-center justify-center shadow-lg shadow-[#cb5855]/25">
              <SuccessBadgeCheckIcon className="w-10 h-10 stroke-white fill-none stroke-[2.5]" />
            </div>
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span
              className="w-8 h-[2px] bg-[#cb5855] rounded-full inline-block"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#cb5855] uppercase">
              {tagline}
            </span>
            <span
              className="w-8 h-[2px] bg-[#cb5855] rounded-full inline-block"
              aria-hidden="true"
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#241121] tracking-tight leading-tight">
            <span>{titlePart1} </span>
            <span className="text-[#cb5855]">{titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {referenceNumber && (
            <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#fdf0ef] border border-[#cb5855]/20 text-xs font-semibold text-[#cb5855]">
              <span>{referencePrefix}</span>
              <span className="font-mono">{referenceNumber}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={backBtn.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#cb5855] hover:bg-[#ba4c49] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <HomeIcon className="w-4 h-4" />
              <span>{backBtn.label}</span>
            </Link>

            <Link
              href={servicesBtn.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-[#241121] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs"
            >
              <span>{servicesBtn.label}</span>
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href={contactBtn.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#cb5855]/30 text-[#cb5855] hover:bg-[#fdf0ef] text-xs sm:text-sm font-semibold transition-all duration-200"
            >
              <span>{contactBtn.label}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
