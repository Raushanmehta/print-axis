"use client";

import React from "react";
import Image from "next/image";
import { siteMap, type PrintAxisWhyChooseUsData } from "@/data";
import { CheckmarkIcon } from "@/components/icons";
import {
  FadeLeft,
  FadeRight,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  AnimatedIcon,
} from "@/utils/animations";

export interface WhyChooseUsFeature {
  id: string;
  text: string;
}

export interface WhyChooseUsSectionProps {
  data?: PrintAxisWhyChooseUsData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  features?: WhyChooseUsFeature[];
  imageSrc?: string;
  imageAlt?: string;
}

// Why choose us section highlighting printing advantages and features.
export default function WhyChooseUsSection(props: WhyChooseUsSectionProps) {
  const fallback = siteMap.whyChooseUs;
  const tagline = props.tagline || props.data?.tagline || fallback.tagline;
  const titlePart1 = props.titlePart1 || props.data?.titlePart1 || fallback.titlePart1;
  const titleHighlight = props.titleHighlight || props.data?.titleHighlight || fallback.titleHighlight;
  const description = props.description || props.data?.description || fallback.description;
  const rawFeatures = props.features || props.data?.featuresList || fallback.featuresList;
  const imageSrc = props.imageSrc || props.data?.imageSrc || fallback.imageSrc;
  const imageAlt = props.imageAlt || props.data?.imageAlt || fallback.imageAlt;

  return (
    <section className="bg-white pt-4 lg:pt-6 pb-8 lg:pb-12 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
          <div className="lg:col-span-6 xl:col-span-7">
            <FadeLeft delay={0.08}>
              <div className="border-l-[3px] border-[#cb5855] pl-3.5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-8 h-[2px] bg-[#cb5855]" />
                  <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#cb5855] uppercase">
                    {tagline}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.16] tracking-tight">
                  <span className="text-[#241121] block">{titlePart1}</span>
                  <span className="text-[#cb5855] block">{titleHighlight}</span>
                </h2>
              </div>
            </FadeLeft>

            <FadeLeft delay={0.16}>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-2.5 mb-4 max-w-xl">
                {description}
              </p>
            </FadeLeft>

            <StaggerContainer speed="fast" className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 max-w-xl">
              {rawFeatures.map((feature) => (
                <StaggerItem key={feature.id} variant="left">
                  <div className="flex items-center gap-2.5 group">
                    <AnimatedIcon animation="bounce">
                      <div className="w-5 h-5 rounded-full bg-[#cb5855] text-white flex items-center justify-center flex-shrink-0 shadow-xs transition-transform group-hover:scale-110">
                        <CheckmarkIcon className="w-2.5 h-2.5 text-white" />
                      </div>
                    </AnimatedIcon>

                    <span className="text-xs sm:text-sm font-semibold text-[#241121] tracking-tight group-hover:text-[#cb5855] transition-colors duration-200">
                      {feature.text}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="lg:col-span-6 xl:col-span-5">
            <FadeRight delay={0.15}>
              <ScaleIn delay={0.2}>
                <div className="relative aspect-[6/3] w-full rounded-md overflow-hidden shadow-md border border-gray-100 group">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-md pointer-events-none" />
                </div>
              </ScaleIn>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
}
