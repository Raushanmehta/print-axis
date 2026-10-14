"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteMap, type PrintAxisContactData } from "@/data";
import {
  CallIcon,
  EmailIcon,
  LocationIcon,
  UserIcon,
  PhoneOutlineIcon,
  LayersIcon,
  ChevronDownIcon,
  ChatBubbleIcon,
  SendIcon,
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  XSocialIcon,
  MapPinSolidIcon,
} from "@/components/icons";
import {
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
  StaggerContainer,
  StaggerItem,
  AnimatedIcon,
  AnimatedButton,
} from "@/utils/animations";

export interface ContactInfoItem {
  id: string;
  title: string;
  lines: string[];
  note: string;
  icon: React.ReactNode;
}

export interface ContactSectionProps {
  data?: PrintAxisContactData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  phoneNumbers?: string[];
  emailAddresses?: string[];
  officeAddress?: string[];
  serviceOptions?: string[];
}

function getSocialIcon(name: string): React.ReactNode {
  switch (name.toLowerCase()) {
    case "facebook":
      return <FacebookIcon className="w-6 h-6 fill-current" />;
    case "linkedin":
      return <LinkedInIcon className="w-6 h-6 fill-current" />;
    case "instagram":
      return <InstagramIcon className="w-6 h-6 fill-current" />;
    case "youtube":
      return <YouTubeIcon className="w-6 h-6 fill-current" />;
    case "x":
    case "twitter":
    default:
      return <XSocialIcon className="w-5 h-5 fill-current" />;
  }
}

// Contact section with contact cards, form, and directions.
export default function ContactSection(props: ContactSectionProps) {
  const fallback = siteMap.contact;
  const tagline = props.tagline || props.data?.tagline || fallback.tagline;
  const titlePart1 = props.titlePart1 || props.data?.titlePart1 || fallback.titlePart1;
  const titleHighlight = props.titleHighlight || props.data?.titleHighlight || fallback.titleHighlight;
  const subtitle = props.subtitle || props.data?.subtitle || fallback.subtitle;

  const phoneCard = props.data?.phoneCard || fallback.phoneCard;
  const emailCard = props.data?.emailCard || fallback.emailCard;
  const officeCard = props.data?.officeCard || fallback.officeCard;

  const phoneNumbers = props.phoneNumbers || phoneCard.phoneNumbers;
  const emailAddresses = props.emailAddresses || emailCard.emailAddresses;
  const officeAddress = props.officeAddress || officeCard.officeAddress;

  const formConfig = props.data?.form || fallback.form;
  const serviceOptions = props.serviceOptions || formConfig.serviceOptions;

  const sideImage = props.data?.sideImage || fallback.sideImage;
  const followUs = props.data?.followUs || fallback.followUs;
  const mapBanner = props.data?.mapBanner || fallback.mapBanner;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section className="relative w-full bg-[#faf8f9] py-8 lg:py-12 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeDown delay={0.05}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span
                className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#cb5855] uppercase">
                {tagline}
              </span>
              <span
                className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
                aria-hidden="true"
              />
            </div>
          </FadeDown>

          <FadeUp delay={0.12}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#241121]">
              <span>{titlePart1} </span>
              <span className="text-[#cb5855]">{titleHighlight}</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p className="mt-2 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </FadeUp>
        </div>

        <StaggerContainer speed="fast" className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <StaggerItem variant="up">
            <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3 h-full">
              <AnimatedIcon animation="pulse">
                <div className="w-16 h-16 rounded-full bg-[#fdf0ef] flex items-center justify-center shrink-0 text-[#cb5855]">
                  <CallIcon className="w-8 h-8 fill-current" />
                </div>
              </AnimatedIcon>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-[#241121]">{phoneCard.title}</h3>
                {phoneNumbers.map((phone) => (
                  <Link
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm font-semibold text-[#332233] hover:text-[#cb5855] transition-colors mt-0.5"
                  >
                    {phone}
                  </Link>
                ))}
                <span className="text-[11px] text-[#888] mt-1">
                  {phoneCard.hours}
                </span>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem variant="up">
            <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3 h-full">
              <AnimatedIcon animation="pulse">
                <div className="w-16 h-16 rounded-full bg-[#fdf0ef] flex items-center justify-center shrink-0 text-[#cb5855]">
                  <EmailIcon className="w-8 h-8 text-[#cb5855]" />
                </div>
              </AnimatedIcon>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-[#241121]">
                  {emailCard.title}
                </h3>
                {emailAddresses.map((email) => (
                  <Link
                    key={email}
                    href={`mailto:${email}`}
                    className="text-xs sm:text-sm font-semibold text-[#332233] hover:text-[#cb5855] transition-colors mt-0.5"
                  >
                    {email}
                  </Link>
                ))}
                <span className="text-[11px] text-[#888] mt-1">
                  {emailCard.note}
                </span>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem variant="up">
            <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3 h-full">
              <AnimatedIcon animation="pulse">
                <div className="w-16 h-16 rounded-full bg-[#fdf0ef] flex items-center justify-center shrink-0 text-[#cb5855]">
                  <LocationIcon className="w-8 h-8 fill-current" />
                </div>
              </AnimatedIcon>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-[#241121]">{officeCard.title}</h3>
                {officeAddress.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-xs sm:text-sm font-semibold text-[#332233] leading-snug mt-0.5"
                  >
                    {line}
                  </p>
                ))}
                <span className="text-[11px] text-[#888] mt-1">
                  {officeCard.note}
                </span>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <div className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          <FadeLeft delay={0.15} className="lg:col-span-7">
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-100 shadow-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#cb5855] uppercase">
                {formConfig.tagline}
              </span>
              <span
                className="w-6 h-[2px] bg-[#cb5855] rounded-full inline-block"
                aria-hidden="true"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#241121]">
              <span>{formConfig.titlePart1} </span>
              <span className="text-[#cb5855]">{formConfig.titleHighlight}</span>
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-[#5b525a]">
              {formConfig.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-sm text-xs sm:text-sm text-[#241121] placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition-colors"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <EmailIcon className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-sm text-xs sm:text-sm text-[#241121] placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <PhoneOutlineIcon className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Your Phone *"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-sm text-xs sm:text-sm text-[#241121] placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition-colors"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <LayersIcon className="w-4 h-4 text-gray-400" />
                  </div>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full pl-9 pr-8 py-2 bg-white border border-gray-200 rounded-sm text-xs sm:text-sm text-[#241121] focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select Service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none text-gray-400">
                  <ChatBubbleIcon className="w-4 h-4" />
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-sm text-xs sm:text-sm text-[#241121] placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition-colors resize-none"
                />
              </div>

              <AnimatedButton glow>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-sm bg-[#851028] hover:bg-[#720e22] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <SendIcon className="w-3.5 h-3.5 fill-current rotate-45 -mt-0.5" />
                  <span>{formConfig.buttonLabel}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </AnimatedButton>

              {formSubmitted && (
                <div className="p-2.5 bg-green-50 text-green-800 text-xs sm:text-sm rounded-sm text-center font-medium animate-in fade-in duration-300">
                  {formConfig.successMessage}
                </div>
              )}
            </form>
          </div>
        </FadeLeft>

        <FadeRight delay={0.2} className="lg:col-span-5">
          <div className="flex flex-col space-y-4">
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xs border border-gray-100 bg-white group">
              <Image
                src={sideImage.src}
                alt={sideImage.alt}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-102"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#241121]">{followUs.title}</h4>
              <p className="mt-1 text-xs sm:text-sm text-[#5b525a] leading-relaxed">
                {followUs.description}
              </p>

              <div className="flex items-center gap-2.5 mt-3">
                {followUs.socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-12 h-12 rounded-full bg-[#fdf0ef] text-[#cb5855] hover:bg-[#cb5855] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                  >
                    {getSocialIcon(item.name)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeRight>
      </div>

        <div className="mt-4 sm:mt-6 bg-[#fdf2f1] rounded-lg p-4 sm:p-6 border border-[#fae0de]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-6 h-[2px] bg-[#cb5855] rounded-full inline-block"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#cb5855] uppercase">
                  {mapBanner.tagline}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#241121]">
                <span>{mapBanner.titlePart1} </span>
                <span className="text-[#cb5855]">{mapBanner.titleHighlight}</span>
              </h3>

              <p className="mt-1.5 text-xs sm:text-sm text-[#5b525a] leading-relaxed">
                {mapBanner.description}
              </p>

              <div className="mt-3 sm:mt-4">
                <Link
                  href={mapBanner.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white border border-[#cb5855] text-[#cb5855] hover:bg-[#cb5855] hover:text-white font-semibold text-xs sm:text-sm shadow-xs transition-all duration-200"
                >
                  <MapPinSolidIcon className="w-3.5 h-3.5 fill-current" />
                  <span>{mapBanner.directionsLabel}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative w-full h-48 sm:h-56 rounded-sm overflow-hidden border border-[#fae0de] shadow-xs bg-[#e8ece9]">
              <svg
                className="w-full h-full object-cover"
                viewBox="0 0 600 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="600" height="300" fill="#f0ede5" />

                <rect x="260" y="230" width="70" height="50" rx="3" fill="#cbe4ca" />
                <rect x="470" y="240" width="80" height="40" rx="3" fill="#cbe4ca" />
                <rect x="10" y="235" width="85" height="50" rx="3" fill="#cbe4ca" />
                <circle cx="280" cy="180" r="30" fill="#daf0d8" />

                <path d="M-10 60 L610 60" stroke="#ffffff" strokeWidth="22" />
                <path d="M-10 160 L610 160" stroke="#ffffff" strokeWidth="24" />
                <path d="M-10 240 L610 240" stroke="#ffffff" strokeWidth="18" />
                <path d="M140 -10 L140 310" stroke="#ffffff" strokeWidth="20" />
                <path d="M380 -10 L380 310" stroke="#ffffff" strokeWidth="26" />
                <path d="M520 -10 L520 310" stroke="#ffffff" strokeWidth="16" />

                <path d="M40 -10 L300 310" stroke="#ffffff" strokeWidth="16" />
                <path d="M550 -10 L220 310" stroke="#ffffff" strokeWidth="18" />
                <path d="M-10 130 L450 310" stroke="#ffffff" strokeWidth="12" />

                <path d="M20 -10 L20 180" stroke="#d4e8f2" strokeWidth="8" />

                <path d="M-10 160 L610 160" stroke="#ffebc2" strokeWidth="4" />
                <path d="M380 -10 L380 310" stroke="#ffebc2" strokeWidth="4" />

                <circle cx="200" cy="160" r="45" stroke="#ffffff" strokeWidth="14" fill="none" />
                <circle cx="200" cy="160" r="45" stroke="#ffebc2" strokeWidth="2" fill="none" />

                <text x="150" y="155" fill="#758276" fontSize="11" fontFamily="sans-serif" fontWeight="500">
                  Connaught Place
                </text>
              </svg>

              <div className="absolute bottom-4 left-1/3 flex items-center gap-1.5 bg-white/95 px-2 py-0.5 rounded-sm shadow-xs border border-gray-100 text-[10px] font-semibold text-[#0066cc]">
                <span className="w-3.5 h-3.5 rounded-xs bg-[#0066cc] text-white flex items-center justify-center text-[8px] font-bold">
                  M
                </span>
                <span>{mapBanner.metroStation}</span>
              </div>

              <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className="w-7 h-7 rounded-sm bg-[#cb5855] text-white flex items-center justify-center shadow-md animate-bounce duration-1000">
                  <LocationIcon className="w-3.5 h-3.5 fill-current" />
                </div>

                <div className="bg-white/95 backdrop-blur-xs px-2.5 py-1.5 rounded-sm shadow-md border border-gray-100 text-left">
                  <h5 className="text-[11px] font-bold text-[#241121]">{mapBanner.officePin.title}</h5>
                  <p className="text-[9px] text-gray-500 leading-tight mt-0.5">
                    {mapBanner.officePin.lines[0]}
                    <br />
                    {mapBanner.officePin.lines[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
