"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import GalleryCard, { GalleryItem } from "@/components/cards/GalleryCard";
import { siteMap, type PrintAxisGalleryData } from "@/data";
import {
  FadeUp,
  FadeDown,
  StaggerContainer,
  StaggerItem,
} from "@/utils/animations";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

export interface GallerySectionProps {
  data?: PrintAxisGalleryData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  items?: GalleryItem[];
}

// Gallery section displaying project portfolio with interactive shadcn Dialog slider.
export default function GallerySection(props: GallerySectionProps) {
  const fallback = siteMap.gallery;
  const tagline = props.tagline || props.data?.tagline || fallback.tagline;
  const titlePart1 = props.titlePart1 || props.data?.titlePart1 || fallback.titlePart1;
  const titleHighlight = props.titleHighlight || props.data?.titleHighlight || fallback.titleHighlight;
  const subtitle = props.subtitle || props.data?.subtitle || fallback.subtitle;
  const items: GalleryItem[] = (props.items || props.data?.galleryItems || fallback.galleryItems) as GalleryItem[];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handlePreview = (item: GalleryItem) => {
    const idx = items.findIndex((i) => i.id === item.id);
    const targetIdx = idx >= 0 ? idx : 0;
    setSelectedIndex(targetIdx);
    setCurrent(targetIdx);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!api || !isOpen) return;
    api.scrollTo(selectedIndex, true);
  }, [api, isOpen, selectedIndex]);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const activeItem = items[current] || items[0];

  return (
    <section className="bg-white py-8 lg:py-12 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7">
          <FadeDown delay={0.05}>
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="w-6 h-[2px] bg-[#cb5855]"></span>
              <span className="text-xs font-bold tracking-widest text-[#cb5855] uppercase">
                {tagline}
              </span>
              <span className="w-6 h-[2px] bg-[#cb5855]"></span>
            </div>
          </FadeDown>

          <FadeUp delay={0.12}>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#241121] tracking-tight">
              {titlePart1} <span className="text-[#cb5855]">{titleHighlight}</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p className="text-gray-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
              {subtitle}
            </p>
          </FadeUp>
        </div>

        <StaggerContainer speed="fast" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item) => (
            <StaggerItem key={item.id} variant="scale">
              <GalleryCard
                item={item}
                onPreview={handlePreview}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Shadcn Dialog Modal with Embla Carousel Slider */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 overflow-hidden bg-[#241121] border-white/10 max-w-4xl">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              startIndex: selectedIndex,
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {items.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/60 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.alt || item.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 95vw, 896px"
                      priority
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Slider Navigation Arrows */}
            <CarouselPrevious
              className="absolute left-3 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black text-white border-white/20 hover:border-white w-10 h-10 transition-all cursor-pointer"
            />
            <CarouselNext
              className="absolute right-3 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black text-white border-white/20 hover:border-white w-10 h-10 transition-all cursor-pointer"
            />
          </Carousel>

          {/* Modal Bottom Details */}
          {activeItem && (
            <div className="p-4 sm:p-5 flex items-center justify-between bg-[#241121] text-white border-t border-white/10 gap-4">
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-semibold tracking-wider text-[#cb5855] uppercase block">
                  {activeItem.category}
                </span>
                <DialogTitle className="mt-0.5 truncate">
                  {activeItem.title}
                </DialogTitle>
                {activeItem.description && (
                  <DialogDescription className="mt-1 line-clamp-2">
                    {activeItem.description}
                  </DialogDescription>
                )}
              </div>

              {/* Slider Counter Badge */}
              <div className="shrink-0 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white/90">
                {current + 1} / {items.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

