import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

export interface FooterProps {
  quickLinks?: FooterLink[];
  services?: FooterLink[];
  contactInfo?: ContactInfo;
  copyrightText?: string;
}

const DEFAULT_QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "How We Do", href: "/how-we-do" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const DEFAULT_SERVICES: FooterLink[] = [
  { label: "Digital Printing", href: "/services/digital-printing" },
  { label: "Offset Printing", href: "/services/offset-printing" },
  { label: "Large Format Printing", href: "/services/large-format-printing" },
  { label: "Packaging & Labels", href: "/services/packaging-labels" },
  { label: "Business Stationery", href: "/services/business-stationery" },
  { label: "Promotional Products", href: "/services/promotional-products" },
  { label: "Custom Printing Solutions", href: "/services/custom-printing" },
];

const DEFAULT_CONTACT_INFO: ContactInfo = {
  phone: "+91 98765 43210",
  email: "info@printaxis.com",
  addressLine1: "123 Printing Street,",
  addressLine2: "Industrial Area, New Delhi – 110020",
};

export default function Footer({
  quickLinks = DEFAULT_QUICK_LINKS,
  services = DEFAULT_SERVICES,
  contactInfo = DEFAULT_CONTACT_INFO,
  copyrightText = "© 2025 PrintAxis. All Rights Reserved.",
}: FooterProps) {
  return (
    <footer className="w-full bg-[#261021] text-white pt-16 lg:pt-20">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Bio & Socials */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/logo-white.png"
                alt="PrintAxis - Paper & Printing Solutions"
                width={360}
                height={96}
                className="h-16 sm:h-20 lg:h-[88px] xl:h-[94px] w-auto object-contain transition-all"
              />
            </Link>

            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              We deliver high-quality printing and customized paper solutions for
              businesses, events, and personal needs with precision, creativity,
              and care.
            </p>

            {/* Social Icons in order: Facebook, Instagram, LinkedIn, YouTube */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
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

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white/90 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              Quick Links
            </h3>
            <div
              className="w-8 h-[2.5px] bg-[#cb5855] mt-2 mb-6 rounded-full"
              aria-hidden="true"
            />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2.5 text-white/85 hover:text-white text-sm transition-all duration-200"
                  >
                    <svg
                      className="w-3 h-3 text-[#cb5855] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              Our Services
            </h3>
            <div
              className="w-8 h-[2.5px] bg-[#cb5855] mt-2 mb-6 rounded-full"
              aria-hidden="true"
            />
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2.5 text-white/85 hover:text-white text-sm transition-all duration-200"
                  >
                    <svg
                      className="w-3 h-3 text-[#cb5855] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch (with subtle vertical divider) */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              Get In Touch
            </h3>
            <div
              className="w-8 h-[2.5px] bg-[#cb5855] mt-2 mb-6 rounded-full"
              aria-hidden="true"
            />

            <div className="space-y-5">
              {/* Call Us */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-12 h-12 rounded-full bg-[#3d1833] flex items-center justify-center shrink-0 text-[#e06864] transition-colors group-hover:bg-[#4d1f40]">
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 9 4.31c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 tracking-wider">
                    Call Us
                  </span>
                  <Link
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-semibold text-white tracking-wide hover:text-[#e06864] transition-colors"
                  >
                    {contactInfo.phone}
                  </Link>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-12 h-12 rounded-full bg-[#3d1833] flex items-center justify-center shrink-0 text-[#e06864] transition-colors group-hover:bg-[#4d1f40]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 tracking-wider">
                    Email Us
                  </span>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm font-semibold text-white tracking-wide hover:text-[#e06864] transition-colors"
                  >
                    {contactInfo.email}
                  </Link>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-12 h-12 rounded-full bg-[#3d1833] flex items-center justify-center shrink-0 text-[#e06864] transition-colors group-hover:bg-[#4d1f40]">
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 tracking-wider">
                    Visit Us
                  </span>
                  <p className="text-sm font-semibold text-white tracking-wide leading-snug">
                    {contactInfo.addressLine1}
                    <br />
                    {contactInfo.addressLine2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-14 lg:mt-16 border-t border-white/10 py-6">
          <p className="text-xs sm:text-sm text-white/70">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}