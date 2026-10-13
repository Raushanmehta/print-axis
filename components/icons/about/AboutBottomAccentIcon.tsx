import React from "react";

export function AboutBottomAccentIcon({
  className = "w-16 sm:w-20 md:w-24 lg:w-28 h-24 sm:h-28 md:h-32 lg:h-36 text-[#cb5855]",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 110 140"
      fill="currentColor"
      {...props}
    >
      <polygon points="110,140 0,140 0,75 50,75 50,0 110,0" />
    </svg>
  );
}

export default AboutBottomAccentIcon;
