"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NeedCustomCard from "@/components/cards/NeedCustomCard";
import { siteMap } from "@/data";
import {
  QualityBadgeIcon,
  CustomDesignIcon,
  TruckIcon,
  ShareDesignIcon,
  PalettePreviewIcon,
  PrinterIcon,
  BoxPackagingIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@/components/icons";

export interface ServiceFeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode | string;
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
  icon?: React.ReactNode | string;
}

export interface ServiceDetailSectionProps {
  slug?: string;
  data?: any;
  mainTitlePart1?: string;
  mainTitleHighlight?: string;
  description?: string;
  heroImage?: string;
  heroImageAlt?: string;
  features?: ServiceFeatureItem[];
  otherServicesTitle?: string;
  otherServices?: OtherServiceItem[];
  processTagline?: string;
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: ProcessStepItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaImageSrc?: string;
  ctaImageAlt?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
}

function getFeatureIcon(iconName?: string): React.ReactNode {
  switch (iconName?.toLowerCase()) {
    case "custom":
    case "design":
      return <CustomDesignIcon className="w-8 h-8 text-[#cb5855]" />;
    case "speed":
    case "truck":
    case "delivery":
      return <TruckIcon className="w-8 h-8 text-[#cb5855]" />;
    case "quality":
    default:
      return <QualityBadgeIcon className="w-8 h-8 text-[#cb5855]" />;
  }
}

function getProcessIcon(iconName?: string): React.ReactNode {
  switch (iconName?.toLowerCase()) {
    case "share-design":
    case "design":
    case "file":
    case "step-1":
      return <ShareDesignIcon className="w-10 h-10 text-[#cb5855]" />;
    case "preview":
    case "mockup":
    case "palette":
    case "step-2":
      return <PalettePreviewIcon className="w-10 h-10 text-[#cb5855]" />;
    case "printing":
    case "printer":
    case "step-3":
      return <PrinterIcon className="w-10 h-10 text-[#cb5855]" />;
    case "delivery":
    case "package":
    case "box":
    case "step-4":
    default:
      return <BoxPackagingIcon className="w-10 h-10 text-[#cb5855]" />;
  }
}

export default function ServiceDetailSection(props: ServiceDetailSectionProps) {
  const allServices = (siteMap.service?.servicesList || []) as any[];

  // Match current service by slug or href, fallback to first service
  const matchedService =
    props.data ||
    (props.slug
      ? allServices.find(
          (s) =>
            s.id === props.slug ||
            s.href === `/services/${props.slug}` ||
            s.href?.endsWith(`/${props.slug}`)
        )
      : null) ||
    allServices[0] ||
    {};

  const mainTitlePart1 =
    props.mainTitlePart1 ||
    matchedService.mainTitlePart1 ||
    matchedService.title ||
    "Printing Services";
  const mainTitleHighlight =
    props.mainTitleHighlight ||
    matchedService.mainTitleHighlight ||
    "Services";
  const description =
    props.description ||
    matchedService.detailDescription ||
    matchedService.description ||
    "";
  const heroImage =
    props.heroImage ||
    matchedService.heroImage ||
    matchedService.imageSrc ||
    "/images/service-printing.jpg";
  const heroImageAlt =
    props.heroImageAlt ||
    matchedService.heroImageAlt ||
    matchedService.title ||
    "Service image";

  const rawFeatures =
    props.features ||
    matchedService.features ||
    (siteMap.service as any)?.features ||
    [];
  const features = rawFeatures.map((f: any) => ({
    id: f.id,
    title: f.title,
    description: f.description,
    icon: React.isValidElement(f.icon)
      ? f.icon
      : getFeatureIcon(typeof f.icon === "string" ? f.icon : f.id),
  }));

  const otherServicesTitle =
    props.otherServicesTitle ||
    matchedService.otherServicesTitle ||
    "Other Services";

  const rawOtherServices =
    props.otherServices ||
    (siteMap.service as any)?.otherServices ||
    allServices;

  const otherServices: OtherServiceItem[] = rawOtherServices.map((s: any) => {
    const isCurrent =
      (props.slug &&
        (s.href?.endsWith(`/${props.slug}`) || s.id === props.slug)) ||
      matchedService.id === s.id ||
      matchedService.href === s.href;

    return {
      id: s.id,
      name: s.name || s.title,
      image: s.image || s.imageSrc,
      href: s.href,
      active: !!isCurrent,
    };
  });

  const processTagline =
    props.processTagline ||
    matchedService.processTagline ||
    (siteMap.service as any)?.process?.processTagline ||
    "OUR PROCESS";
  const processTitle =
    props.processTitle ||
    matchedService.processTitle ||
    (siteMap.service as any)?.process?.processTitle ||
    "How It Works";
  const processSubtitle =
    props.processSubtitle ||
    matchedService.processSubtitle ||
    (siteMap.service as any)?.process?.processSubtitle ||
    "";

  const rawProcessSteps =
    props.processSteps ||
    matchedService.processSteps ||
    (siteMap.service as any)?.process?.processSteps ||
    [];
  const processSteps = rawProcessSteps.map((step: any) => ({
    stepNumber: step.stepNumber,
    title: step.title,
    description: step.description,
    icon: React.isValidElement(step.icon)
      ? step.icon
      : getProcessIcon(
          typeof step.icon === "string" ? step.icon : step.stepNumber
        ),
  }));

  const ctaTitle =
    props.ctaTitle ||
    matchedService.ctaTitle ||
    (siteMap.service as any)?.needHelpCta?.ctaTitle ||
    "Need Custom Printing?";
  const ctaDescription =
    props.ctaDescription ||
    matchedService.ctaDescription ||
    (siteMap.service as any)?.needHelpCta?.ctaDescription ||
    "Get high-quality custom prints for your business, events or personal use.";
  const ctaImageSrc =
    props.ctaImageSrc ||
    matchedService.ctaImageSrc ||
    (siteMap.service as any)?.needHelpCta?.ctaImageSrc ||
    "/images/why-choose-tshirts.jpg";
  const ctaImageAlt =
    props.ctaImageAlt ||
    matchedService.ctaImageAlt ||
    (siteMap.service as any)?.needHelpCta?.ctaImageAlt ||
    "Custom printed products";
  const ctaButtonText =
    props.ctaButtonText ||
    matchedService.ctaButtonText ||
    (siteMap.service as any)?.needHelpCta?.ctaButtonText ||
    "Request a Free Quote";
  const ctaButtonHref =
    props.ctaButtonHref ||
    matchedService.ctaButtonHref ||
    (siteMap.service as any)?.needHelpCta?.ctaButtonHref ||
    "/get-a-quote";

  return (
    <section className="bg-white pt-8 lg:pt-12 pb-0 lg:pb-0">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Top 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          {/* Left Column (Content & Big Image) */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Hero Main Machine Image */}
            <div className="relative aspect-[20/9] w-full rounded-lg overflow-hidden border border-gray-100 shadow-xs bg-gray-50">
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
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#241121] tracking-tight mt-4 sm:mt-5">
              {mainTitlePart1}{" "}
              <span className="text-[#cb5855]">{mainTitleHighlight}</span>
            </h1>

            {/* Description Text */}
            <p className="text-gray-500 text-xs sm:text-sm lg:text-[15px] leading-relaxed mt-1.5 max-w-4xl">
              {description}
            </p>

            {/* 3 Key Feature Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-5">
              {features.map((feature: any, idx: number) => (
                <div
                  key={feature.id}
                  className={`flex flex-col items-center text-center ${
                    idx !== features.length - 1
                      ? "sm:border-r sm:border-gray-100 sm:pr-4"
                      : ""
                  }`}
                >
                  {/* Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#fdf2f1] flex items-center justify-center mb-2.5 text-[#cb5855] shadow-xs">
                    {feature.icon}
                  </div>
                  <h2 className="font-bold text-sm sm:text-lg text-[#241121] leading-snug">
                    {feature.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed max-w-xs mx-auto">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Sidebar: Other Services & CTA Card) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Card 1: Other Services */}
            <div className="bg-white rounded-lg border border-gray-100 p-4 sm:p-5 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#241121] mb-3">
                {otherServicesTitle}
              </h2>

              <div className="space-y-2">
                {otherServices.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className={`flex items-center justify-between px-2 rounded-lg transition-all duration-200 group ${
                      service.active
                        ? "bg-[#fdf2f1] border border-[#cb5855]/30 text-[#cb5855]"
                        : "hover:bg-gray-50 text-gray-700 hover:text-[#241121]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-25 h-15 rounded-sm overflow-hidden border border-gray-200 shrink-0 bg-gray-100">
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

                    <ChevronRightIcon
                      className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                        service.active
                          ? "text-[#cb5855]"
                          : "text-gray-400 group-hover:text-[#cb5855]"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Card 2: Need Custom Card */}
            <NeedCustomCard
              title={ctaTitle}
              description={ctaDescription}
              imageSrc={ctaImageSrc}
              imageAlt={ctaImageAlt}
              buttonText={ctaButtonText}
              buttonHref={ctaButtonHref}
            />
          </div>
        </div>

        {/* Bottom Card: OUR PROCESS — How It Works */}
        <div className="mt-4 sm:mt-6 bg-[#fdf7f6] rounded-lg p-4 sm:p-6 border border-[#fae4e1]">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-1 sm:mb-2 pb-3 sm:pb-2">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-sm font-bold tracking-widest text-[#cb5855] uppercase">
                  {processTagline}
                </span>
                <span className="w-8 h-[2px] bg-[#cb5855]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#241121] tracking-tight">
                {processTitle}
              </h2>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm max-w-md leading-relaxed">
              {processSubtitle}
            </p>
          </div>

          {/* 4 Steps Row Connected with Arrows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 sm:gap-4 items-center">
            {processSteps.map((step: any, index: number) => (
              <React.Fragment key={step.stepNumber}>
                {/* Step Item */}
                <div className="flex flex-col items-center text-center group lg:col-span-1">
                  {/* Badge */}
                  <div className="w-20 h-20 rounded-full bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#cb5855] mb-2.5 group-hover:scale-105 group-hover:shadow-sm transition-all duration-300">
                    {step.icon}
                  </div>

                  <span className="text-xs sm:text-base font-bold text-[#cb5855]">
                    {step.stepNumber}
                  </span>
                  <h3 className="font-bold text-xs sm:text-lg text-[#241121] mt-0.5 mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-gray-500 leading-relaxed max-w-[150px]">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (between steps) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-[#cb5855] lg:col-span-1">
                    <ArrowRightIcon className="w-6 h-6 opacity-70" />
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
