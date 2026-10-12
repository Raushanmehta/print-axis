import PageTopSection from "@/components/common/PageTopSection";
import CtaSection from "@/sections/home/CtaSection";

export default function BlogPage() {
  return (
    <main>
      <PageTopSection title="Our Blogs" breadcrumb="Blog" />
      <CtaSection />
    </main>
  );
}