import PageTopSection from "@/components/common/PageTopSection";
import AboutSection from "@/sections/home/AboutSection";
import CtaSection from "@/sections/home/CtaSection";
import ProcessSection from "@/sections/home/ProcessSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import { siteMap } from "@/data";

export default function AboutPage() {
  const { about, process, cta, testimonial, pageTopSection } = siteMap;

  return (
    <main>
      <PageTopSection data={pageTopSection} title="About Us" breadcrumb="About Us" />
      <AboutSection data={about} />
      <ProcessSection data={process} />
      <CtaSection data={cta} />
      <TestimonialSection data={testimonial} />
    </main>
  );
}