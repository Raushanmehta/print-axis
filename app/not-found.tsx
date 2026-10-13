import Link from "next/link";
import { siteMap } from "@/data";
import { HomeIcon } from "@/components/icons";

export const metadata = {
    title: siteMap.notFound.metadata.title,
    description: siteMap.notFound.metadata.description,
};

export default function NotFound() {
    const data = siteMap.notFound;

    return (
        <main>
            <section className="relative w-full bg-white py-10 lg:py-16 overflow-hidden">
                <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
                    <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                        {/* Tagline */}
                        <div className="flex items-center justify-center gap-2.5 mb-2">
                            <span
                                className="w-8 h-[2px] bg-[#cb5855] rounded-full inline-block"
                                aria-hidden="true"
                            />
                            <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#cb5855] uppercase">
                                {data.tagline}
                            </span>
                            <span
                                className="w-8 h-[2px] bg-[#cb5855] rounded-full inline-block"
                                aria-hidden="true"
                            />
                        </div>

                        {/* Giant 404 Graphic */}
                        <div className="relative my-2 select-none">
                            <span className="text-8xl sm:text-9xl lg:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#241121] via-[#cb5855] to-[#241121] tracking-tighter leading-none inline-block">
                                {data.errorCode}
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#241121] tracking-tight">
                            {data.titlePart1}{" "}
                            <span className="text-[#cb5855]">{data.titleHighlight}</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-3 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-xl">
                            {data.subtitle}
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
                            <Link
                                href={data.homeButton.href}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#cb5855] hover:bg-[#ba4c49] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-sm"
                            >
                                <HomeIcon className="w-4 h-4" />
                                <span>{data.homeButton.label}</span>
                            </Link>

                            <Link
                                href={data.contactButton.href}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-[#241121] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs"
                            >
                                <span>{data.contactButton.label}</span>
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
