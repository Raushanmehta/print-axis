"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/utils/animations";

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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
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
          <AnimatedButton >
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] hover:from-black hover:via-black hover:to-black hover:bg-black hover:bg-none text-white text-xs sm:text-sm font-semibold tracking-wide uppercase border border-white/20 e shadow-sm hover:shadow-lg transition-all duration-300 group w-fit cursor-pointer"
            >
              <span>{buttonText}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 inline-flex items-center">
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </span>
            </Link>
          </AnimatedButton>
        </div>

        {imageSrc && (
          <div className="relative w-24 h-28 sm:w-28 sm:h-44 shrink-0 rounded-lg overflow-hidden shadow-xs border border-white/10 group">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="120px"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
