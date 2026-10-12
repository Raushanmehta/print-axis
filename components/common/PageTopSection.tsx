
import Link from "next/link";

export interface PageTopSectionProps {
  title?: string;
  breadcrumb?: string;
  breadcrumbs?: string;
}

export default function PageTopSection({
  title = "Contact Us",
  breadcrumb,
  breadcrumbs,
}: PageTopSectionProps) {
  // Simple props usage: breadcrumb or breadcrumbs or title
  const activePage = breadcrumb || breadcrumbs || title;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#351c2f] via-[#3a2034] to-[#45253e] py-16 sm:py-20 md:py-24 lg:py-28 text-white">
      {/* Bottom-Left 8-Petal Asterisk Flower / Sparkle Icon */}
      <div
        className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 lg:bottom-10 lg:left-14 pointer-events-none z-10"
        aria-hidden="true"
      >
        <svg
          className="w-7 h-7 sm:w-9 sm:h-9 text-[#e06864]"
          viewBox="0 0 40 40"
          fill="currentColor"
        >
          <g transform="translate(20,20)">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <rect
                key={angle}
                x="-2.5"
                y="-15"
                width="5"
                height="10"
                rx="2.5"
                transform={`rotate(${angle})`}
                fill="currentColor"
              />
            ))}
            <circle cx="0" cy="0" r="3.5" fill="currentColor" />
          </g>
        </svg>
      </div>

      {/* Right Side: Paper Airplane with Looped Dotted Line */}
      <div
        className="absolute right-2 sm:right-6 md:right-10 lg:right-16 top-0 bottom-0 w-56 sm:w-72 md:w-88 lg:w-[420px] pointer-events-none flex items-center justify-end z-0"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full max-h-[180px] sm:max-h-[220px] lg:max-h-[250px]"
          viewBox="0 0 380 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Looped Dotted Line */}
          <path
            d="M20 185 C 65 170, 95 135, 135 145 C 185 160, 215 115, 185 80 C 160 50, 125 75, 155 115 C 185 145, 250 150, 275 105 C 295 65, 315 35, 335 25"
            stroke="#e06864"
            strokeWidth="2.2"
            strokeDasharray="5 6"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* Paper Airplane */}
          <g transform="translate(330, 8) rotate(15)">
            <path
              d="M34 2 L2 20 L15 24 Z"
              fill="none"
              stroke="#e06864"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M34 2 L15 24 L20 34 Z"
              fill="none"
              stroke="#e06864"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M34 2 L15 24"
              stroke="#e06864"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* Centered Title and Breadcrumbs */}
      <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center flex flex-col items-center justify-center">
        {/* Title from Props */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h1>

        {/* Simple Breadcrumb: Home > [Breadcrumb from Props] */}
        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-sm sm:text-base font-normal">
          <Link
            href="/"
            className="text-white/90 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <span
            className="text-[#e06864] font-semibold select-none"
            aria-hidden="true"
          >
            &gt;
          </span>
          <span className="text-[#e06864] font-medium">{activePage}</span>
        </div>
      </div>
    </section>
  );
}
