"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface QuoteButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface NavbarProps {
  navItems?: NavItem[];
  quoteButtonText?: string;
  quoteButtonHref?: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "services", label: "Services", href: "/services" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "faqs", label: "Faqs", href: "/faqs" },
  { id: "contact", label: "Contact Us", href: "/contact" },
];

/**
 * Reusable, strictly typed CTA Button matching the exact design
 */
export const QuoteButton: React.FC<QuoteButtonProps> = ({
  label = "GET A QUOTE",
  href = "/contact",
  onClick,
  className = "",
}) => {
  const content = (
    <>
      <span className="font-bold tracking-wider text-sm sm:text-[15px] uppercase">
        {label}
      </span>
      <svg
        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.2"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </>
  );

  const baseClasses =
    "group inline-flex items-center justify-center gap-2.5 px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] text-white shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {content}
    </button>
  );
};

export default function Navbar({
  navItems = DEFAULT_NAV_ITEMS,
  quoteButtonText = "GET A QUOTE",
  quoteButtonHref = "/contact",
}: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100/80 sticky top-0 z-50 transition-shadow shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-22 sm:h-22 py-1.5">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center shrink-0 py-1">
            <Image
              src="/logo/logo-black.png"
              alt="PrintAxis - Paper & Printing Solutions"
              width={340}
              height={90}
              priority
              className="h-14 sm:h-18 lg:h-[78px] xl:h-[84px] w-auto object-contain transition-all"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative text-[15px] font-medium tracking-normal transition-colors duration-200 py-1 ${isActive
                    ? "text-[#c85956] font-semibold"
                    : "text-[#2e1b2f] hover:text-[#c85956]"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#c85956] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <QuoteButton
              label={quoteButtonText}
              href={quoteButtonHref}
            />
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2e1b2f] hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${isActive
                    ? "text-[#c85956] bg-red-50/50 font-semibold"
                    : "text-[#2e1b2f] hover:bg-gray-50 hover:text-[#c85956]"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3">
              <QuoteButton
                label={quoteButtonText}
                href={quoteButtonHref}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}