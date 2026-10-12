import AboutSection from "@/sections/home/AboutSection";
import BlogSection from "@/sections/home/BlogSection";
import CtaSection from "@/sections/home/CtaSection";
import HeroSection from "@/sections/home/HeroSection";
import ProcessSection from "@/sections/home/ProcessSection";
import ServiceSection from "@/sections/home/ServiceSection";
import TestimonialSection from "@/sections/home/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProcessSection />
      <TestimonialSection />
      <CtaSection />
      <BlogSection />

    </div>
  );
}
