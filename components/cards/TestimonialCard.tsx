import React from "react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating?: number;
  imageSrc: string;
}

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  onPrev,
  onNext,
  className = "",
}: TestimonialCardProps) {
  const rating = testimonial.rating ?? 5;

  return (
    <div
      className={`relative bg-[#34142b] rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden text-white shadow-xl flex flex-col justify-between ${className}`}
    >
      {/* Background Subtle Organic Curved Waves */}
      <div className="absolute right-0 bottom-0 w-80 h-80 pointer-events-none opacity-20">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border-[30px] border-white/10" />
        <div className="absolute -right-10 -bottom-10 w-60 h-60 rounded-full border-[25px] border-white/15" />
      </div>

      <div className="relative z-10">
        {/* Double Quote Icon in Coral */}
        <div className="mb-6">
          <svg
            className="w-10 h-10 text-[#cb5855]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-.962 0-1.92-.423-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-.962 0-1.92-.423-2.748-1.179z" />
          </svg>
        </div>

        {/* Testimonial Quote Body */}
        <p className="text-white/85 text-base sm:text-[17px] leading-relaxed mb-8">
          {testimonial.quote}
        </p>

        {/* Author Info */}
        <div>
          <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide">
            {testimonial.name}
          </h4>
          <p className="text-xs sm:text-sm text-white/60 mt-0.5">
            {testimonial.role}
          </p>

          {/* Star Rating */}
          <div className="flex items-center gap-1 mt-3">
            {[...Array(rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-[#cb5855] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Slider Buttons (Bottom Right) */}
      <div className="relative z-10 flex items-center gap-2.5 justify-end mt-6 sm:mt-0">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-lg bg-[#4a2240] text-white/90 hover:bg-[#5a2a4e] hover:text-white flex items-center justify-center transition-colors duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-lg bg-[#cb5855] text-white hover:bg-[#b84e4b] flex items-center justify-center transition-colors duration-200 shadow-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
