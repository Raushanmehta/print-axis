"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
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
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  servicesList?: string[];
  whyChooseItems?: WhyChooseItem[];
  helpTitlePart1?: string;
  helpTitleHighlight?: string;
  helpSubtitle?: string;
}

const defaultWhyChooseItems: WhyChooseItem[] = [
  {
    id: "quality",
    title: "High Quality Printing",
    description: "Premium materials and vibrant, long-lasting prints.",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
        <path d="M11 3l-3 6 4 12 4-12-3-6" />
        <path d="M2 9h20" />
      </svg>
    ),
  },
  {
    id: "turnaround",
    title: "Quick Turnaround",
    description: "On-time delivery for all your business needs.",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "pricing",
    title: "Competitive Pricing",
    description: "Best value without compromising quality.",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    id: "support",
    title: "Expert Support",
    description: "Our team is here to help you at every step.",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
];

const defaultServices = [
  "Choose a service",
  "Offset Printing",
  "Digital & Large Format Printing",
  "3D Printing & Prototyping",
  "Custom Packaging & Boxes",
  "Corporate Identity & Stationery",
  "Brochures, Catalogs & Flyers",
  "Business Cards & Letterheads",
  "Vinyl Banners & Signage",
];

export default function GetAQuoteSection({
  titlePart1 = "Request a",
  titleHighlight = "Quote",
  subtitle = "Fill out the form below with your printing requirements. We'll get back to you shortly with a customized quote.",
  servicesList = defaultServices,
  whyChooseItems = defaultWhyChooseItems,
  helpTitlePart1 = "Need Help",
  helpTitleHighlight = "with Your Quote?",
  helpSubtitle = "Have a specific requirement or a large printing project? Get in touch with our team for expert guidance.",
}: GetAQuoteSectionProps) {
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
    <section className="bg-[#fcfbfc] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#241121] tracking-tight">
                {titlePart1}{" "}
                <span className="text-[#cb5855]">{titleHighlight}</span>
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed max-w-xl">
                {subtitle}
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-emerald-600 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Thank you! Your quote request has been received. Our team will
                  review your requirements and contact you shortly.
                </span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs sm:text-sm font-semibold text-[#241121] mb-1.5"
                  >
                    Full Name <span className="text-[#cb5855]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs sm:text-sm font-semibold text-[#241121] mb-1.5"
                  >
                    Phone Number <span className="text-[#cb5855]">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Email Address & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-semibold text-[#241121] mb-1.5"
                  >
                    Email Address <span className="text-[#cb5855]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-xs sm:text-sm font-semibold text-[#241121] mb-1.5"
                  >
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white"
                  />
                </div>
              </div>

              {/* Row 3: Select Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs sm:text-sm font-semibold text-[#241121] mb-1.5"
                >
                  Select Service <span className="text-[#cb5855]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm text-gray-700 appearance-none cursor-pointer focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white pr-10"
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
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 4: Product Details */}
              <div>
                <label
                  htmlFor="productDetails"
                  className="block text-xs sm:text-sm font-semibold text-[#241121] mb-1.5"
                >
                  Product Details <span className="text-[#cb5855]">*</span>
                </label>
                <textarea
                  id="productDetails"
                  name="productDetails"
                  rows={4}
                  required
                  value={formData.productDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us about your printing requirements (size, quantity, material, color, design, etc.)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition bg-white resize-y leading-relaxed"
                />
              </div>

              {/* Row 5: Upload Files (Optional) */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#241121] mb-1.5">
                  Upload Files (Optional)
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border border-gray-200/90 rounded-xl p-3 sm:p-4 bg-[#fcfbfc] hover:bg-[#faf8f9] hover:border-[#cb5855]/40 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Coral Icon Badge */}
                    <div className="w-10 h-10 rounded-xl bg-[#cb5855]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cb5855]/20 group-hover:scale-105 transition-all">
                      <svg
                        className="w-5 h-5 text-[#cb5855]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-[#241121] group-hover:text-[#cb5855] transition-colors">
                        Choose Files
                      </p>
                      <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">
                        PDF, AI, PSD, JPG, PNG (Max 10MB)
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-medium text-gray-400 group-hover:text-[#cb5855] transition-colors pr-1">
                    Browse
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

                {/* Uploaded Files preview pills */}
                {formData.files.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {formData.files.map((file, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#cb5855]/10 text-[#cb5855] border border-[#cb5855]/20"
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

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#cb5855] hover:bg-[#ba4c49] active:scale-[0.99] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-[#cb5855]/20 hover:shadow-lg hover:shadow-[#cb5855]/30 transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Quote Request</span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Why Choose & Need Help Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1: Why Choose PrintAxis? */}
            <div className="bg-[#34142b] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
              {/* Subtle decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-7 tracking-tight relative z-10">
                Why Choose PrintAxis?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {whyChooseItems.map((item) => (
                  <div key={item.id} className="flex flex-col items-start">
                    {/* Circular Outline Icon Badge */}
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-3.5 text-white bg-white/[0.04] flex-shrink-0 transition-transform hover:scale-105">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-white leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Need Help with Your Quote? */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col sm:flex-row items-stretch">
              {/* Left Content Area */}
              <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold leading-tight tracking-tight">
                    <span className="text-[#241121] block">
                      {helpTitlePart1}
                    </span>
                    <span className="text-[#cb5855] block mt-0.5">
                      {helpTitleHighlight}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2.5 mb-6 leading-relaxed">
                    {helpSubtitle}
                  </p>
                </div>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border border-[#cb5855] text-[#cb5855] text-xs sm:text-sm font-semibold hover:bg-[#cb5855] hover:text-white transition-all duration-200 group w-fit"
                  >
                    <span>Contact Us</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Mockup Graphic Area */}
              <div className="relative w-full sm:w-44 md:w-52 min-h-[170px] sm:min-h-full bg-[#fdf5f4] flex items-center justify-center overflow-hidden p-3 sm:p-4">
                {/* Decorative background image or graphic */}
                <div className="relative w-full h-full min-h-[160px] flex items-center justify-center">
                  <Image
                    src="/images/blog-brochures.jpg"
                    alt="PrintAxis Quote Help Spiral Notebook and Print Mockup"
                    fill
                    className="object-cover object-center rounded-xl"
                    sizes="(max-width: 640px) 100vw, 220px"
                  />
                  {/* Subtle gradient vignette to blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
