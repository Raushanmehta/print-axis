import Breadcrumb from "@/components/common/Breadcrumb";
import AboutSection from "@/sections/home/AboutSection";
import ProcessSection from "@/sections/home/ProcessSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import { site } from "@/data";

// About page rendering company overview and why choose us.
export default function AboutPage() {
  const { about, process, testimonial, pageTopSection } = site;

  return (
    <main>
      <Breadcrumb data={pageTopSection} title="About Us" breadcrumb="About Us" />
      <AboutSection data={about} showButton={false} />
      <ProcessSection data={process} />
      <TestimonialSection data={testimonial} />
    </main>
  );
}