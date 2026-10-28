import Breadcrumb from "@/components/common/Breadcrumb";
import GallerySection from "@/sections/GallerySection";
import { site } from "@/data";

// Gallery page showcasing completed printing work and portfolio.
export default function GalleryPage() {
  const { gallery, pageTopSection } = site;

  return (
    <main>
      <Breadcrumb data={pageTopSection} title="Our Gallery" breadcrumb="Gallery" />
      <GallerySection data={gallery} />
    </main>
  );
}