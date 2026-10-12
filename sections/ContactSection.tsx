"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ContactInfoItem {
  id: string;
  title: string;
  lines: string[];
  note: string;
  icon: React.ReactNode;
}

export interface ContactSectionProps {
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  phoneNumbers?: string[];
  emailAddresses?: string[];
  officeAddress?: string[];
  serviceOptions?: string[];
}

export default function ContactSection({
  tagline = "GET IN TOUCH",
  titlePart1 = "Contact",
  titleHighlight = "Us",
  subtitle = "Have a question or need assistance? We're here to help. Reach out to us and we'll get back to you as soon as possible.",
  phoneNumbers = ["+91 98765 43210", "+91 87654 32109"],
  emailAddresses = ["info@printaxis.com", "support@printaxis.com"],
  officeAddress = [
    "123 Creative Business Park,",
    "New Delhi, DL 110001, India",
  ],
  serviceOptions = [
    "Printing Services",
    "3D Printing Service",
    "Offset Printing",
    "Design & Branding",
    "Packaging & Labels",
    "Custom Print Solutions",
  ],
}: ContactSectionProps) {
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
    <section className="relative w-full bg-[#faf8f9] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ================= 1. HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Tagline */}
          <div className="flex items-center justify-center gap-3 mb-3.5">
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

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold tracking-tight text-[#241121]">
            <span>{titlePart1} </span>
            <span className="text-[#cb5855]">{titleHighlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ================= 2. TOP CONTACT CARDS ================= */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-[#fdf0ef] flex items-center justify-center shrink-0 text-[#cb5855]">
              {/* Phone Icon */}
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-[#241121]">Phone Number</h3>
              {phoneNumbers.map((phone) => (
                <Link
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="text-sm font-semibold text-[#332233] hover:text-[#cb5855] transition-colors mt-0.5"
                >
                  {phone}
                </Link>
              ))}
              <span className="text-xs text-[#888] mt-2">
                Mon - Sat, 9:00 AM – 6:00 PM
              </span>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-[#fdf0ef] flex items-center justify-center shrink-0 text-[#cb5855]">
              {/* Email Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-[#241121]">
                Email Address
              </h3>
              {emailAddresses.map((email) => (
                <Link
                  key={email}
                  href={`mailto:${email}`}
                  className="text-sm font-semibold text-[#332233] hover:text-[#cb5855] transition-colors mt-0.5"
                >
                  {email}
                </Link>
              ))}
              <span className="text-xs text-[#888] mt-2">
                We reply within 24 hours
              </span>
            </div>
          </div>

          {/* Card 3: Our Office */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-[#fdf0ef] flex items-center justify-center shrink-0 text-[#cb5855]">
              {/* Location Pin Icon */}
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-[#241121]">Our Office</h3>
              {officeAddress.map((line, idx) => (
                <p
                  key={idx}
                  className="text-sm font-semibold text-[#332233] leading-snug mt-0.5"
                >
                  {line}
                </p>
              ))}
              <span className="text-xs text-[#888] mt-2">
                Visit us for business inquiries
              </span>
            </div>
          </div>
        </div>

        {/* ================= 3. FORM & FOLLOW US ================= */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-gray-100 shadow-sm">
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-xs font-bold tracking-[0.2em] text-[#cb5855] uppercase">
                SEND US A MESSAGE
              </span>
              <span
                className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
                aria-hidden="true"
              />
            </div>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#241121]">
              <span>Get in Touch </span>
              <span className="text-[#cb5855]">with Us</span>
            </h3>

            <p className="mt-2 text-sm text-[#5b525a]">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>

            {/* The Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Your Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#241121] placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition-colors"
                  />
                </div>

                {/* Your Email */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#241121] placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Your Phone */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    placeholder="Your Phone *"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#241121] placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition-colors"
                  />
                </div>

                {/* Select Service Dropdown */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m12.89 1.45 8 4a2 2 0 0 1 0 3.55l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1 0-3.55l8-4a2 2 0 0 1 1.79 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2 12 9.11 4.55a2 2 0 0 0 1.78 0L22 12"
                      />
                    </svg>
                  </div>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#241121] focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select Service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </div>
                <textarea
                  rows={4}
                  required
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[#241121] placeholder-gray-400 focus:outline-none focus:border-[#cb5855] focus:ring-1 focus:ring-[#cb5855] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#851028] hover:bg-[#720e22] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 fill-current rotate-45 -mt-0.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                <span>Send Message</span>
                <span aria-hidden="true">→</span>
              </button>

              {formSubmitted && (
                <div className="p-3 bg-green-50 text-green-800 text-sm rounded-xl text-center font-medium animate-in fade-in duration-300">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Branded Coffee Mug & Follow Us */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* Branded Mug Photo */}
            <div className="relative w-full aspect-[16/11] rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-white group">
              <Image
                src="/images/contact-mug.jpg"
                alt="PrintAxis Branded Merchandise"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-102"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Follow Us Section */}
            <div>
              <h4 className="text-xl font-bold text-[#241121]">Follow Us</h4>
              <p className="mt-1.5 text-sm text-[#5b525a] leading-relaxed">
                Stay connected with us for updates, offers and more printing inspiration.
              </p>

              {/* 5 Social Media Badges */}
              <div className="flex items-center gap-3.5 mt-5">
                {/* Facebook */}
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-[#fdf0ef] text-[#cb5855] hover:bg-[#cb5855] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full bg-[#fdf0ef] text-[#cb5855] hover:bg-[#cb5855] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-[#fdf0ef] text-[#cb5855] hover:bg-[#cb5855] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>

                {/* YouTube */}
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-full bg-[#fdf0ef] text-[#cb5855] hover:bg-[#cb5855] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                  </svg>
                </Link>

                {/* X / Twitter */}
                <Link
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="w-11 h-11 rounded-full bg-[#fdf0ef] text-[#cb5855] hover:bg-[#cb5855] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs font-bold text-sm"
                >
                  𝕏
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 4. VISIT OUR OFFICE & MAP BANNER ================= */}
        <div className="mt-14 sm:mt-18 bg-[#fdf2f1] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#fae0de]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Text & Directions Button */}
            <div className="lg:col-span-5 flex flex-col items-start">
              {/* Tagline */}
              <div className="flex items-center gap-2.5 mb-2">
                <span
                  className="w-6 h-[2px] bg-[#cb5855] rounded-full inline-block"
                  aria-hidden="true"
                />
                <span className="text-xs font-bold tracking-[0.2em] text-[#cb5855] uppercase">
                  Our Location
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#241121]">
                <span>Visit Our </span>
                <span className="text-[#cb5855]">Office</span>
              </h3>

              {/* Description */}
              <p className="mt-2.5 text-sm text-[#5b525a] leading-relaxed">
                We&apos;d love to meet you in person. Find us at our office or get directions for easy access.
              </p>

              {/* Get Directions Button */}
              <div className="mt-6">
                <Link
                  href="https://maps.google.com/?q=123+Creative+Business+Park+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#cb5855] text-[#cb5855] hover:bg-[#cb5855] hover:text-white font-semibold text-sm shadow-xs transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Get Directions</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Clean Vector Map Visual with Pin Card */}
            <div className="lg:col-span-7 relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden border border-[#fae0de] shadow-sm bg-[#e8ece9]">
              {/* Detailed Stylized Vector Map Graphics */}
              <svg
                className="w-full h-full object-cover"
                viewBox="0 0 600 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Land */}
                <rect width="600" height="300" fill="#f0ede5" />

                {/* Parks / Green Zones */}
                <rect x="260" y="230" width="70" height="50" rx="6" fill="#cbe4ca" />
                <rect x="470" y="240" width="80" height="40" rx="6" fill="#cbe4ca" />
                <rect x="10" y="235" width="85" height="50" rx="8" fill="#cbe4ca" />
                <circle cx="280" cy="180" r="30" fill="#daf0d8" />

                {/* Major Roads & Avenues */}
                <path d="M-10 60 L610 60" stroke="#ffffff" strokeWidth="22" />
                <path d="M-10 160 L610 160" stroke="#ffffff" strokeWidth="24" />
                <path d="M-10 240 L610 240" stroke="#ffffff" strokeWidth="18" />
                <path d="M140 -10 L140 310" stroke="#ffffff" strokeWidth="20" />
                <path d="M380 -10 L380 310" stroke="#ffffff" strokeWidth="26" />
                <path d="M520 -10 L520 310" stroke="#ffffff" strokeWidth="16" />

                {/* Diagonal Boulevards */}
                <path d="M40 -10 L300 310" stroke="#ffffff" strokeWidth="16" />
                <path d="M550 -10 L220 310" stroke="#ffffff" strokeWidth="18" />
                <path d="M-10 130 L450 310" stroke="#ffffff" strokeWidth="12" />

                {/* Water/Canal accents */}
                <path d="M20 -10 L20 180" stroke="#d4e8f2" strokeWidth="8" />

                {/* Road Centers / Yellow Lines */}
                <path d="M-10 160 L610 160" stroke="#ffebc2" strokeWidth="4" />
                <path d="M380 -10 L380 310" stroke="#ffebc2" strokeWidth="4" />

                {/* Connaught Place radial ring */}
                <circle cx="200" cy="160" r="45" stroke="#ffffff" strokeWidth="14" fill="none" />
                <circle cx="200" cy="160" r="45" stroke="#ffebc2" strokeWidth="2" fill="none" />

                {/* Street Labels */}
                <text x="150" y="155" fill="#758276" fontSize="11" fontFamily="sans-serif" fontWeight="500">
                  Connaught Place
                </text>
              </svg>

              {/* Metro Station Badge */}
              <div className="absolute bottom-6 left-1/3 flex items-center gap-1.5 bg-white/95 px-2.5 py-1 rounded-md shadow-sm border border-gray-100 text-[11px] font-semibold text-[#0066cc]">
                <span className="w-4 h-4 rounded bg-[#0066cc] text-white flex items-center justify-center text-[9px] font-bold">
                  M
                </span>
                <span>Rajiv Chowk Metro Station</span>
              </div>

              {/* Pin Marker with Tooltip Card */}
              <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5">
                {/* Red Pin */}
                <div className="w-8 h-8 rounded-full bg-[#cb5855] text-white flex items-center justify-center shadow-lg animate-bounce duration-1000">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </div>

                {/* Floating Office Card */}
                <div className="bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-xl shadow-lg border border-gray-100 text-left">
                  <h5 className="text-xs font-bold text-[#241121]">PrintAxis</h5>
                  <p className="text-[10px] text-gray-500 leading-tight mt-0.5">
                    123 Creative Business Park,
                    <br />
                    New Delhi, DL 110001
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
