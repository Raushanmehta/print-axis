import PageTopSection from "@/components/common/PageTopSection";
import AboutSection from "@/sections/home/AboutSection";
import CtaSection from "@/sections/home/CtaSection";
import ProcessSection from "@/sections/home/ProcessSection";
import TestimonialSection from "@/sections/home/TestimonialSection";

export default function AboutPage() {
  return (
    <main>
      <PageTopSection title="About Us" breadcrumb="About Us" />
      <AboutSection />
      <ProcessSection />
      <CtaSection />
      <TestimonialSection />
    </main>
  );
}