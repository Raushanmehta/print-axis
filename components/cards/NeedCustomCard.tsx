import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

export interface NeedCustomCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export default function NeedCustomCard({
  title = "Need Custom Printing?",
  description = "Get high-quality custom prints for your business, events or personal use.",
  buttonText = "Get a Quote",
  buttonHref = "/get-a-quote",
  imageSrc,
  imageAlt = "Custom printed products mockup",
  className = "",
}: NeedCustomCardProps) {
  return (
    <div
      className={`bg-[#34142b] rounded-lg p-4 sm:p-5 text-white shadow-md overflow-hidden relative flex flex-col justify-between ${className}`}
    >
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-44 h-54 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div
        className={`relative z-10 ${imageSrc ? "flex items-start justify-between gap-4" : "flex flex-col"
          }`}
      >
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-1.5">
            {title}
          </h3>
          <p
            className={`text-sm text-white/75 leading-relaxed mb-4 ${imageSrc ? "max-w-[210px]" : "max-w-md text-base"
              }`}
          >
            {description}
          </p>
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-[#cb5855] hover:bg-[#ba4c49] text-white text-sm font-semibold shadow-xs transition-all duration-200 group w-fit"
          >
            <span>{buttonText}</span>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {imageSrc && (
          <div className="relative w-24 h-28 sm:w-28 sm:h-44 shrink-0 rounded-lg overflow-hidden shadow-xs border border-white/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="120px"
            />
          </div>
        )}
      </div>
    </div>
  );
}
