import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ServiceCard, { ServiceItem } from "@/components/cards/ServiceCard";
import { site, type PrintAxisServiceData } from "@/data";
import {
  PrinterIcon,
  Cube3DIcon,
  OffsetIcon,
  BrandingIcon,
  BoxPackagingIcon,
  TShirtIcon,
} from "@/components/icons";

export interface ServicesPageProps {
  data?: PrintAxisServiceData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  services?: ServiceItem[];
}

function getServiceIcon(iconName: string): React.ReactNode {
  switch (iconName.toLowerCase()) {
    case "printer":
    case "printing-services":
      return <PrinterIcon className="w-8 h-8" />;
    case "3d":
    case "3d-printing":
      return <Cube3DIcon className="w-8 h-8" />;
    case "offset":
    case "offset-printing":
      return <OffsetIcon className="w-8 h-8" />;
    case "design":
    case "branding":
      return <BrandingIcon className="w-8 h-8" />;
    case "packaging":
    case "packaging-boxes":
      return <BoxPackagingIcon className="w-8 h-8" />;
    case "apparel":
    case "apparel-printing":
    default:
      return <TShirtIcon className="w-8 h-8" />;
  }
}

// Services page displaying all printing solutions and capabilities.
export default function ServicesPage(props: ServicesPageProps = {}) {
  const fallback = site.service;
  const tagline = props.tagline || props.data?.tagline || fallback.tagline;
  const titlePart1 = props.titlePart1 || props.data?.titlePart1 || fallback.titlePart1;
  const titleHighlight =
    props.titleHighlight ||
    `${props.data?.titleHighlight1 || fallback.titleHighlight1} ${props.data?.titleHighlight2 || fallback.titleHighlight2}`;
  const subtitle = props.subtitle || props.data?.description || fallback.description;

  const rawServices = props.services || props.data?.servicesList || fallback.servicesList;
  const formattedServices: ServiceItem[] = (rawServices as any[]).map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    imageSrc: item.imageSrc,
    href: item.href,
    icon:
      typeof item.icon === "string"
        ? getServiceIcon(item.icon)
        : item.icon || getServiceIcon(item.id),
  }));

  return (
    <main>
      <Breadcrumb data={site.pageTopSection} title="Our Services" breadcrumb="Services" />
      <section className="relative w-full bg-white py-8 lg:py-12 overflow-hidden">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span
                className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
                {tagline}
              </span>
              <span
                className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
                aria-hidden="true"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#241121]">
              <span>{titlePart1} </span>
              <span className="text-[#cb5855]">{titleHighlight}</span>
            </h2>

            <p className="mt-2 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 mt-4 sm:mt-6">
            {formattedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}