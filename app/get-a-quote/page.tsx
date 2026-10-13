import PageTopSection from "@/components/common/PageTopSection";
import GetAQuoteSection from "@/sections/GetAQuoteSection";
import CtaSection from "@/sections/home/CtaSection";
import { siteMap } from "@/data";

export default function GetAQuotePage() {
  const { getAQuote, cta, pageTopSection } = siteMap;

  return (
    <main>
      <PageTopSection data={pageTopSection} title="Get A Quote" breadcrumb="Get A Quote" />
      <GetAQuoteSection data={getAQuote} />
      <CtaSection data={cta} />
    </main>
  );
}