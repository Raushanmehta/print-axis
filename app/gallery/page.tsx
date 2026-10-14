import PageTopSection from "@/components/common/PageTopSection";
import GallerySection from "@/sections/GallerySection";
import CtaSection from "@/sections/home/CtaSection";
import { site } from "@/data";

// Gallery page showcasing completed printing work and portfolio.
export default function GalleryPage() {
  const { gallery, cta, pageTopSection } = site;

  return (
    <main>
      <PageTopSection data={pageTopSection} title="Our Gallery" breadcrumb="Gallery" />
      <GallerySection data={gallery} />
      <CtaSection data={cta} />
    </main>
  );
}