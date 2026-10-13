import PageTopSection from "@/components/common/PageTopSection";
import GallerySection from "@/sections/GallerySection";
import CtaSection from "@/sections/home/CtaSection";
import { siteMap } from "@/data";

export default function GalleryPage() {
  const { gallery, cta, pageTopSection } = siteMap;

  return (
    <main>
      <PageTopSection data={pageTopSection} title="Our Gallery" breadcrumb="Gallery" />
      <GallerySection data={gallery} />
      <CtaSection data={cta} />
    </main>
  );
}