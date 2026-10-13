import PageTopSection from "@/components/common/PageTopSection";
import ServiceDetailSection from "@/sections/ServiceDetailSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import CtaSection from "@/sections/home/CtaSection";
import { siteMap } from "@/data";

export function generateStaticParams() {
  const services = siteMap.service?.servicesList || [];
  const slugs = new Set<string>();
  services.forEach((s) => {
    if (s.id) slugs.add(s.id);
    const hrefSlug = s.href?.replace("/services/", "").replace(/^\//, "");
    if (hrefSlug) slugs.add(hrefSlug);
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const { service, whyChooseUs, cta, pageTopSection } = siteMap;

  // Find the matching service item to pass down
  const matchedService = service?.servicesList?.find(
    (s: any) =>
      s.id === resolvedParams?.slug ||
      s.href === `/services/${resolvedParams?.slug}` ||
      s.href?.endsWith(`/${resolvedParams?.slug}`)
  );

  return (
    <main>
      <PageTopSection data={pageTopSection} title="Service Detail" breadcrumb="Service Detail" />
      <ServiceDetailSection
        slug={resolvedParams?.slug}
        data={matchedService}
      />
      <WhyChooseUsSection data={whyChooseUs} />
      <CtaSection data={cta} />
    </main>
  );
}