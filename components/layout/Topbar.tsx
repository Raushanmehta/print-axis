import React from "react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="w-full bg-[#362136] text-white text-xs sm:text-[13px]">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-y-2">
        {/* Left Section: Contact Details */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-5">
          {/* Phone */}
          <Link
            href="tel:+919876543210"
            className="flex items-center gap-2 text-white/95 hover:text-white transition-colors duration-200 group"
          >
            {/* Phone Icon with Waves */}
            <svg
              className="w-4 h-4 text-[#e06864] shrink-0 transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <path d="M14.05 2a9 9 0 0 1 8 7.94" />
              <path d="M14.05 6A5 5 0 0 1 18 10" />
            </svg>
            <span className="font-normal tracking-wide">+91 98765 43210</span>
          </Link>

          {/* Divider */}
          <span
            className="h-4 w-px bg-white/20 hidden xs:inline-block"
            aria-hidden="true"
          />

          {/* Email */}
          <Link
            href="mailto:info@printaxis.com"
            className="flex items-center gap-2 text-white/95 hover:text-white transition-colors duration-200 group"
          >
            {/* Email Icon */}
            <svg
              className="w-4 h-4 text-[#e06864] shrink-0 transition-transform duration-200 group-hover:scale-110"
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
            <span className="font-normal tracking-wide">info@printaxis.com</span>
          </Link>
        </div>

        {/* Right Section: Social Media Circular Icons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Facebook */}
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-white/90 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
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
            className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-white/90 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            <svg
              className="w-3.5 h-3.5"
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
            className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-white/90 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-white/90 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}