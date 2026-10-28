import React from "react";

export function AboutTopAccentIcon({
  className = "w-20 sm:w-24 md:w-28 lg:w-40 h-24 sm:h-28 md:h-32 lg:h-40 text-[#cb5855]",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 110 100"
      fill="currentColor"
      {...props}
    >
      <polygon points="110,0 0,0 0,65 50,65 50,140 110,140" />
    </svg>
  );
}

export default AboutTopAccentIcon;
