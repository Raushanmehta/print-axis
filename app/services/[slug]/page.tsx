import PageTopSection from "@/components/common/PageTopSection";
import ServiceDetailSection from "@/sections/ServiceDetailSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import CtaSection from "@/sections/home/CtaSection";


export default function ServiceDetailPage() {
    return (
        <main>
            <PageTopSection title="Service Detail" breadcrumb="Service Detail" />
            <ServiceDetailSection />
            <WhyChooseUsSection />
            <CtaSection />
        </main>
    );
}