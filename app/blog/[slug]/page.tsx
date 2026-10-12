import PageTopSection from "@/components/common/PageTopSection";
import BlogDetailSection from "@/sections/BlogDetailSection";
import CtaSection from "@/sections/home/CtaSection";

export function generateStaticParams() {
  return [
    { slug: "creative-print-packaging" },
    { slug: "offset-vs-digital-printing" },
    { slug: "branding-with-custom-stationery" },
  ];
}

export default function BlogPostDetailPage() {
  return (
    <main>
      <PageTopSection title="Blog Details" breadcrumb="Blog Details" />
      <BlogDetailSection />
      <CtaSection />
    </main>
  );
}
