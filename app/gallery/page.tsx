import PageTopSection from "@/components/common/PageTopSection";
import GallerySection from "@/sections/GallerySection";
import CtaSection from "@/sections/home/CtaSection";

export default function GalleryPage() {
  return (
    <main>
      <PageTopSection title="Our Gallery" breadcrumb="Gallery" />
      <GallerySection />
      <CtaSection />
    </main>
  );
}