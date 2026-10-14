import PageTopSection from "@/components/common/PageTopSection";
import ThankyouSection from "@/sections/ThankyouSection";
import { site } from "@/data";

export const metadata = {
  title: "Thank You | PrintAxis",
  description:
    "Thank you for contacting PrintAxis. We have received your inquiry and our team will get in touch with you shortly.",
};

// Thank you page confirming quote submission with next steps.
export default function ThankYouPage() {
  const { thankyou, pageTopSection } = site;

  return (
    <main>
      <PageTopSection data={pageTopSection} title="Thank You" breadcrumb="Thank You" />
      <ThankyouSection data={thankyou} />
    </main>
  );
}
