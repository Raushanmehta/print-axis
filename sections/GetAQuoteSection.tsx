"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, type PrintAxisGetAQuoteData } from "@/data";
import {
  DiamondIcon,
  ClockIcon,
  TagIcon,
  HeadsetIcon,
  CheckCircleSolidIcon,
  ChevronDownIcon,
  UploadIcon,
  SpinnerIcon,
  ArrowRightIcon,
} from "@/components/icons";

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  service: string;
  productDetails: string;
  files: File[];
}

export interface GetAQuoteSectionProps {
  data?: PrintAxisGetAQuoteData;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  servicesList?: string[];
  whyChooseItems?: WhyChooseItem[];
  helpTitlePart1?: string;
  helpTitleHighlight?: string;
  helpSubtitle?: string;
}

function getWhyChooseIcon(id: string): React.ReactNode {
  switch (id) {
    case "quality":
      return <DiamondIcon className="w-8 h-8 text-white" />;
    case "turnaround":
      return <ClockIcon className="w-8 h-8 text-white" />;
    case "pricing":
      return <TagIcon className="w-8 h-8 text-white" />;
    case "support":
    default:
      return <HeadsetIcon className="w-8 h-8 text-white" />;
  }
}

// Quote request section with interactive estimate form and benefits.
export default function GetAQuoteSection(props: GetAQuoteSectionProps) {
  const fallback = site.getAQuote;
  const titlePart1 = props.titlePart1 || props.data?.titlePart1 || fallback.titlePart1;
  const titleHighlight = props.titleHighlight || props.data?.titleHighlight || fallback.titleHighlight;
  const subtitle = props.subtitle || props.data?.subtitle || fallback.subtitle;
  const successMessage = props.data?.successMessage || fallback.successMessage;
  const servicesList = props.servicesList || props.data?.servicesList || fallback.servicesList;
  const formLabels = props.data?.formLabels || fallback.formLabels;
  const whyChooseTitle = props.data?.whyChooseTitle || fallback.whyChooseTitle;

  const rawWhyChooseItems: WhyChooseItem[] = (props.whyChooseItems || props.data?.whyChooseItems || fallback.whyChooseItems) as WhyChooseItem[];
  const helpCard = props.data?.helpCard || fallback.helpCard;
  const helpTitlePart1 = props.helpTitlePart1 || helpCard.titlePart1;
  const helpTitleHighlight = props.helpTitleHighlight || helpCard.titleHighlight;
  const helpSubtitle = props.helpSubtitle || helpCard.subtitle;

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    service: "",
    productDetails: "",
    files: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...selectedFiles],
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        companyName: "",
        service: "",
        productDetails: "",
        files: [],
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section className="bg-[#fcfbfc] py-8 lg:py-12">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          <div className="lg:col-span-7 bg-white rounded-lg p-4 sm:p-6 border border-gray-100 shadow-xs">
            <div className="mb-4">
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#241121] tracking-tight">
                {titlePart1}{" "}
                <span className="text-[#cb5855]">{titleHighlight}</span>
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed max-w-xl">
                {subtitle}
              </p>
            </div>

            {submitted && (
              <div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2.5">
                <CheckCircleSolidIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-[#241121] mb-1"
                  >
                    {formLabels.fullName} <span className="text-[#cb5855]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={formLabels.fullNamePlaceholder}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs font-semibold text-[#241121] mb-1"
                  >
                    {formLabels.phoneNumber} <span className="text-[#cb5855]">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder={formLabels.phoneNumberPlaceholder}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-[#241121] mb-1"
                  >
                    {formLabels.email} <span className="text-[#cb5855]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={formLabels.emailPlaceholder}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-xs font-semibold text-[#241121] mb-1"
                  >
                    {formLabels.companyName}
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder={formLabels.companyNamePlaceholder}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-semibold text-[#241121] mb-1"
                >
                  {formLabels.service} <span className="text-[#cb5855]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-700 appearance-none cursor-pointer focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white pr-9"
                  >
                    {servicesList.map((service, index) => (
                      <option
                        key={index}
                        value={index === 0 ? "" : service}
                        disabled={index === 0}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="productDetails"
                  className="block text-xs font-semibold text-[#241121] mb-1"
                >
                  {formLabels.productDetails} <span className="text-[#cb5855]">*</span>
                </label>
                <textarea
                  id="productDetails"
                  name="productDetails"
                  rows={3}
                  required
                  value={formData.productDetails}
                  onChange={handleInputChange}
                  placeholder={formLabels.productDetailsPlaceholder}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white resize-y leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#241121] mb-1">
                  {formLabels.uploadTitle}
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border border-gray-200/90 rounded-lg p-2.5 sm:p-3 bg-[#fcfbfc] hover:bg-[#faf8f9] hover:border-[#cb5855]/40 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#cb5855]/10 flex items-center justify-center shrink-0 group-hover:bg-[#cb5855]/20 group-hover:scale-105 transition-all">
                      <UploadIcon className="w-6 h-6 text-[#cb5855]" />
                    </div>

                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-[#241121] group-hover:text-[#cb5855] transition-colors">
                        {formLabels.uploadChoose}
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5">
                        {formLabels.uploadFormats}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-medium text-gray-400 group-hover:text-[#cb5855] transition-colors pr-1">
                    {formLabels.uploadBrowse}
                  </span>

                  <input
                    ref={fileInputRef}
                    id="fileUpload"
                    type="file"
                    multiple
                    accept=".pdf,.ai,.psd,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </div>

                {formData.files.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {formData.files.map((file, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-medium bg-[#cb5855]/10 text-[#cb5855] border border-[#cb5855]/20"
                      >
                        <span className="truncate max-w-[180px]">{file.name}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(idx);
                          }}
                          className="hover:text-red-700 ml-1 text-sm leading-none"
                          aria-label="Remove file"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-lg bg-[#cb5855] hover:bg-[#ba4c49] active:scale-[0.99] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <SpinnerIcon className="animate-spin h-4 w-4 text-white" />
                      <span>{formLabels.submittingButton}</span>
                    </>
                  ) : (
                    <>
                      <span>{formLabels.submitButton}</span>
                      <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#34142b] rounded-lg p-4 sm:p-6 text-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight relative z-10">
                {whyChooseTitle}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
                {rawWhyChooseItems.map((item) => (
                  <div key={item.id} className="flex flex-col items-start">
                    <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mb-3 text-white bg-white/[0.04] shrink-0 transition-transform hover:scale-105">
                      {item.icon || getWhyChooseIcon(item.id)}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-white leading-snug mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 shadow-xs overflow-hidden flex flex-col sm:flex-row items-stretch">
              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold leading-tight tracking-tight">
                    <span className="text-[#241121] block">
                      {helpTitlePart1}
                    </span>
                    <span className="text-[#cb5855] block mt-0.5">
                      {helpTitleHighlight}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1.5 mb-4 leading-relaxed">
                    {helpSubtitle}
                  </p>
                </div>

                <div>
                  <Link
                    href={helpCard.buttonHref}
                    className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-lg border border-[#cb5855] text-[#cb5855] text-sm font-semibold hover:bg-[#cb5855] hover:text-white transition-all duration-200 group w-fit"
                  >
                    <span>{helpCard.buttonLabel}</span>
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="relative w-full sm:w-44 min-h-[140px] sm:min-h-full bg-[#fdf5f4] flex items-center justify-center overflow-hidden p-2.5 sm:p-3">
                <div className="relative w-full h-full min-h-[130px] flex items-center justify-center">
                  <Image
                    src={helpCard.imageSrc}
                    alt={helpCard.imageAlt}
                    fill
                    className="object-cover object-center rounded-lg"
                    sizes="(max-width: 640px) 100vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
