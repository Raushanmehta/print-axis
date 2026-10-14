import { site } from "@/data";
import AboutSection from "@/sections/home/AboutSection";
import BlogSection from "@/sections/home/BlogSection";
import CtaSection from "@/sections/home/CtaSection";
import HeroSection from "@/sections/home/HeroSection";
import ProcessSection from "@/sections/home/ProcessSection";
import ServiceSection from "@/sections/home/ServiceSection";
import TestimonialSection from "@/sections/home/TestimonialSection";

// Homepage rendering hero, services, process, and testimonial sections.
export default function Home() {
  const { hero, about, service, process, testimonial, cta, blog } = site;

  return (
    <main>
      <HeroSection data={hero} />
      <AboutSection data={about} />
      <ServiceSection data={service} />
      <ProcessSection data={process} />
      <TestimonialSection data={testimonial} />
      <CtaSection data={cta} />
      <BlogSection data={blog} />
    </main>
  );
}
