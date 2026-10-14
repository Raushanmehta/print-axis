import PageTopSection from "@/components/common/PageTopSection";
import ContactSection from "@/sections/ContactSection";
import CtaSection from "@/sections/home/CtaSection";
import { site } from "@/data";

// Contact page with company inquiry form and location details.
export default function ContactPage() {
  const { contact, cta, pageTopSection } = site;

  return (
    <main>
      <PageTopSection data={pageTopSection} title="Contact Us" breadcrumbs="Contact Us" />
      <ContactSection data={contact} />
      <CtaSection data={cta} />
    </main>
  );
}