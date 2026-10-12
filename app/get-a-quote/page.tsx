import PageTopSection from "@/components/common/PageTopSection";
import GetAQuoteSection from "@/sections/GetAQuoteSection";
import CtaSection from "@/sections/home/CtaSection";

export default function GetAQuotePage() {
  return (
    <main>
      <PageTopSection title="Get A Quote" breadcrumb="Get A Quote" />
      <GetAQuoteSection />
      <CtaSection />

    </main>
  );
}