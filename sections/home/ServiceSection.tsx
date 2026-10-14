"use client";

import React from "react";
import Link from "next/link";
import ServiceCard, { ServiceItem } from "@/components/cards/ServiceCard";
import { siteMap, PrintAxisServiceData } from "@/data";
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  LayersIcon,
  TruckIcon,
  PrinterIcon,
  Cube3DIcon,
  OffsetIcon,
  BrandingIcon,
} from "@/components/icons";
import {
  FadeLeft,
  FadeDown,
  StaggerContainer,
  StaggerItem,
  AnimatedButton,
  AnimatedIcon,
} from "@/utils/animations";

export interface ServiceFeatureItem {
  id: string;
  title: string;
  icon: React.ReactNode | string;
}

export interface ServiceSectionProps {
  data?: PrintAxisServiceData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight1?: string;
  titleHighlight2?: string;
  description?: string;
  exploreButtonText?: string;
  exploreButtonHref?: string;
  features?: ServiceFeatureItem[];
  services?: ServiceItem[];
  servicesList?: ServiceItem[];
}

const renderServiceFeatureIcon = (icon: React.ReactNode | string) => {
  if (React.isValidElement(icon)) return icon;

  const iconName = typeof icon === "string" ? icon.toLowerCase() : "";

  switch (iconName) {
    case "quality":
    case "badge":
      return <BadgeCheckIcon />;
    case "variety":
    case "layers":
      return <LayersIcon />;
    case "delivery":
    case "truck":
      return <TruckIcon />;
    default:
      return null;
  }
};

const renderServiceCardIcon = (icon: React.ReactNode | string) => {
  if (React.isValidElement(icon)) return icon;

  const iconName = typeof icon === "string" ? icon.toLowerCase() : "";

  switch (iconName) {
    case "printer":
    case "printing-services":
      return <PrinterIcon />;
    case "3d":
    case "cube":
    case "3d-printing":
      return <Cube3DIcon />;
    case "offset":
    case "offset-printing":
      return <OffsetIcon />;
    case "design":
    case "branding":
    case "design-branding":
      return <BrandingIcon />;
    default:
      return null;
  }
};

// Services section highlighting core printing offerings and features.
export default function ServiceSection(props: ServiceSectionProps) {
  const data = props.data || siteMap.service;

  const tagline = props.tagline || data?.tagline || siteMap.service.tagline;
  const titlePart1 = props.titlePart1 || data?.titlePart1 || siteMap.service.titlePart1;
  const titleHighlight1 = props.titleHighlight1 || data?.titleHighlight1 || siteMap.service.titleHighlight1;
  const titleHighlight2 = props.titleHighlight2 || data?.titleHighlight2 || siteMap.service.titleHighlight2;
  const description = props.description || data?.description || siteMap.service.description;

  const exploreButtonText = props.exploreButtonText || data?.exploreButton?.label || siteMap.service.exploreButton.label;
  const exploreButtonHref = props.exploreButtonHref || data?.exploreButton?.href || siteMap.service.exploreButton.href;

  const features = props.features || data?.features || siteMap.service.features;
  const rawServices =
    props.services ||
    props.servicesList ||
    data?.servicesList ||
    (data as any)?.services ||
    siteMap.service.servicesList ||
    [];

  const formattedServices: ServiceItem[] = (rawServices as any[]).map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    imageSrc: item.imageSrc,
    href: item.href,
    icon: renderServiceCardIcon(item.icon),
  }));

  return (
    <section className="relative w-full bg-white py-8 lg:py-12 overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#fbf0ef]/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28">
            <FadeDown delay={0.05}>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
                  {tagline}
                </span>
              </div>
            </FadeDown>

            <FadeLeft delay={0.12}>
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
            </FadeLeft>

            <FadeLeft delay={0.2}>
              <p className="mt-2 text-[#5b525a] text-sm sm:text-base leading-relaxed max-w-md">
                {description}
              </p>
            </FadeLeft>

            <StaggerContainer speed="fast" className="mt-4 sm:mt-5 space-y-3">
              {features.map((feature) => (
                <StaggerItem key={feature.id} variant="left">
                  <div className="flex items-center gap-3.5 group">
                    <AnimatedIcon animation="pulse">
                      <div className="w-12 h-12 rounded-full bg-[#fdf0ef] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
                        {renderServiceFeatureIcon(feature.icon)}
                      </div>
                    </AnimatedIcon>
                    <span className="text-sm sm:text-[15px] font-semibold text-[#241121]">
                      {feature.title}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeLeft delay={0.3}>
              <div className="mt-4 sm:mt-5">
                <AnimatedButton glow>
                  <Link
                    href={exploreButtonHref}
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] text-white font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-sm transition-all duration-200"
                  >
                    <span>{exploreButtonText}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1 inline-flex items-center">
                      <ArrowRightIcon />
                    </span>
                  </Link>
                </AnimatedButton>
              </div>
            </FadeLeft>
          </div>

          <div className="lg:col-span-7">
            <StaggerContainer speed="fast" className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
              {formattedServices.slice(0, 4).map((service) => (
                <StaggerItem key={service.id} variant="scale">
                  <ServiceCard service={service} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}