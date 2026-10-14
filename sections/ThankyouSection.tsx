"use client";

import React from "react";
import Link from "next/link";
import { siteMap, type PrintAxisThankyouData } from "@/data";
import {
  SuccessBadgeCheckIcon,
  HomeIcon,
} from "@/components/icons";
import {
  FadeUp,
  FadeDown,
  ScaleIn,
  AnimatedButton,
} from "@/utils/animations";

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

// Thank you section confirming successful submission with action buttons.
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

  return (
    <section className="relative w-full bg-white py-8 lg:py-14 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <ScaleIn delay={0.05}>
            <div className="relative mb-5 flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-[#cb5855]/15 animate-ping opacity-60" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#cb5855] to-[#e06864] text-white flex items-center justify-center shadow-lg shadow-[#cb5855]/25">
                <SuccessBadgeCheckIcon className="w-10 h-10 stroke-white fill-none stroke-[2.5]" />
              </div>
            </div>
          </ScaleIn>

          <FadeDown delay={0.12}>
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
          </FadeDown>

          <FadeUp delay={0.18}>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#241121] tracking-tight leading-tight">
              <span>{titlePart1} </span>
              <span className="text-[#cb5855]">{titleHighlight}</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.24}>
            <p className="mt-3 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </FadeUp>

          {referenceNumber && (
            <FadeUp delay={0.3}>
              <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#fdf0ef] border border-[#cb5855]/20 text-xs font-semibold text-[#cb5855]">
                <span>{referencePrefix}</span>
                <span className="font-mono">{referenceNumber}</span>
              </div>
            </FadeUp>
          )}

          <FadeUp delay={0.34}>
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
              <AnimatedButton glow>
                <Link
                  href={backBtn.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#cb5855] hover:bg-[#ba4c49] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs"
                >
                  <HomeIcon className="w-4 h-4" />
                  <span>{backBtn.label}</span>
                </Link>
              </AnimatedButton>

              <AnimatedButton>
                <Link
                  href={servicesBtn.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-[#241121] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs"
                >
                  <span>{servicesBtn.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </AnimatedButton>

              <AnimatedButton>
                <Link
                  href={contactBtn.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#cb5855]/30 text-[#cb5855] hover:bg-[#fdf0ef] text-xs sm:text-sm font-semibold transition-all duration-200"
                >
                  <span>{contactBtn.label}</span>
                </Link>
              </AnimatedButton>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
