import Breadcrumb from "@/components/common/Breadcrumb";
import GetAQuoteSection from "@/sections/GetAQuoteSection";
import { site } from "@/data";

// Quote request page with comprehensive custom estimation form.
export default function GetAQuotePage() {
  const { getAQuote, pageTopSection } = site;

  return (
    <main>
      <Breadcrumb data={pageTopSection} title="Get A Quote" breadcrumb="Get A Quote" />
      <GetAQuoteSection data={getAQuote} />
    </main>
  );
}