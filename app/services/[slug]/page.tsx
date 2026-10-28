import { Suspense } from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import ServiceDetailSection from "@/sections/ServiceDetailSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
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

async function ServiceDetailContent({ params }: ServiceDetailRouteProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
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
    <>
      <Breadcrumb
        data={site.pageTopSection}
        title={matchedService.title || "Service Detail"}
        parentLabel="Services"
        parentHref="/services"
        breadcrumb={matchedService.title || "Service Detail"}
      />
      <ServiceDetailSection
        slug={slug}
        data={matchedService}
      />
      <WhyChooseUsSection data={site.whyChooseUs} />
    </>
  );
}

// Service details page rendering specific printing service information with Suspense for instant navigation.
export default function ServiceDetailPage({ params }: ServiceDetailRouteProps) {
  return (
    <main>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <ServiceDetailContent params={params} />
      </Suspense>
    </main>
  );
}