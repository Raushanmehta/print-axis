import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
import ServiceDetailSection from "@/sections/ServiceDetailSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import CtaSection from "@/sections/home/CtaSection";
import { site } from "@/data";

interface ServiceDetailRouteProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export function generateStaticParams() {
  const services = site.service?.servicesList || [];
  const slugs = new Set<string>();
  services.forEach((s) => {
    if (s.id) slugs.add(s.id);
    const hrefSlug = s.href?.replace("/services/", "").replace(/^\//, "");
    if (hrefSlug) slugs.add(hrefSlug);
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

// Service details page rendering specific printing service information.
export default async function ServiceDetailPage({ params }: ServiceDetailRouteProps) {
  const { slug } = await params;
  const serviceData = site.service;

  const matchedService = serviceData?.servicesList?.find(
    (s: any) =>
      s.id === slug ||
      (s as any).slug === slug ||
      s.href === `/services/${slug}` ||
      s.href?.endsWith(`/${slug}`)
  );

  if (!matchedService) {
    notFound();
  }

  return (
    <main>
      <PageTopSection
        data={site.pageTopSection}
        title={matchedService.title || "Service Detail"}
        breadcrumb="Service Detail"
      />
      <ServiceDetailSection
        slug={slug}
        data={matchedService}
      />
      <WhyChooseUsSection data={site.whyChooseUs} />
      <CtaSection data={site.cta} />
    </main>
  );
}