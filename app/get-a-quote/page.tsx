import PageTopSection from "@/components/common/PageTopSection";
import GetAQuoteSection from "@/sections/GetAQuoteSection";
import CtaSection from "@/sections/home/CtaSection";
import { site } from "@/data";

// Quote request page with comprehensive custom estimation form.
export default function GetAQuotePage() {
  const { getAQuote, cta, pageTopSection } = site;

  return (
    <main>
      <PageTopSection data={pageTopSection} title="Get A Quote" breadcrumb="Get A Quote" />
      <GetAQuoteSection data={getAQuote} />
      <CtaSection data={cta} />
    </main>
  );
}