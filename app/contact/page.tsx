import Breadcrumb from "@/components/common/Breadcrumb";
import ContactSection from "@/sections/ContactSection";
import { site } from "@/data";

// Contact page with company inquiry form and location details.
export default function ContactPage() {
  const { contact, pageTopSection } = site;

  return (
    <main>
      <Breadcrumb data={pageTopSection} title="Contact Us" breadcrumbs="Contact Us" />
      <ContactSection data={contact} />
    </main>
  );
}