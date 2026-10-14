import siteData from "@/data/site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type PrintAxisSchema = typeof siteData.PrintAxis;
export type PrintAxisSections = PrintAxisSchema["sections"];
export type PrintAxisTemplateComponents = PrintAxisSchema["templateComponents"];

// Aliases matching reference schema conventions
export type ServicesSchema = PrintAxisSchema;
export type ServicesSections = PrintAxisSections;
export type ServicesTemplateComponents = PrintAxisTemplateComponents;

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type PrintAxisTopbarData = PrintAxisSections["topbar"]["variants"]["PrintAxisTopbar1"];
export type PrintAxisNavbarData = PrintAxisSections["navbar"]["variants"]["PrintAxisNavbar1"];
export type PrintAxisFooterData = PrintAxisSections["footer"]["variants"]["PrintAxisFooter1"];
export type PrintAxisPageTopSectionData = PrintAxisSections["pageTopSection"]["variants"]["PrintAxisPageTopSection1"];
export type PrintAxisPageTopData = PrintAxisPageTopSectionData;
export type PrintAxisHeroData = PrintAxisSections["hero"]["variants"]["PrintAxisHero1"];
export type PrintAxisAboutData = PrintAxisSections["about"]["variants"]["PrintAxisAbout1"];
export type PrintAxisServiceData = PrintAxisSections["service"]["variants"]["PrintAxisService1"];
export type PrintAxisServicesData = PrintAxisServiceData;
export type PrintAxisWhyChooseUsData = PrintAxisSections["whyChooseUs"]["variants"]["PrintAxisWhyChooseUs1"];
export type PrintAxisTestimonialData = PrintAxisSections["testimonial"]["variants"]["PrintAxisTestimonial1"];
export type PrintAxisTestimonialPageData = PrintAxisTestimonialData;
export type PrintAxisCtaData = PrintAxisSections["cta"]["variants"]["PrintAxisCta1"];
export type PrintAxisProcessData = PrintAxisSections["process"]["variants"]["PrintAxisProcess1"];
export type PrintAxisBlogData = PrintAxisSections["blog"]["variants"]["PrintAxisBlog1"];
export type PrintAxisBlogPageData = PrintAxisBlogData;
export type PrintAxisGalleryData = PrintAxisSections["gallery"]["variants"]["PrintAxisGallery1"];
export type PrintAxisGetAQuoteData = PrintAxisSections["getAQuote"]["variants"]["PrintAxisGetAQuote1"];
export type PrintAxisContactData = PrintAxisSections["contact"]["variants"]["PrintAxisContact1"];
export type PrintAxisThankyouData = PrintAxisSections["thankyou"]["variants"]["PrintAxisThankyou1"];
export type PrintAxisThankYouData = PrintAxisThankyouData;
export type PrintAxisNotFoundData = PrintAxisSections["notFound"]["variants"]["PrintAxisNotFound1"];
export type PrintAxisServicesPageData = PrintAxisServicesData;

// ── Inferred Sub-item Data Models ──
export type NavItem = PrintAxisNavbarData["navLinks"][0];
export type ServiceItem = PrintAxisServicesData["servicesList"][0];
export type BlogPost = PrintAxisBlogData["blogPosts"][0];
export type BlogPostItem = BlogPost;
export type PrintAxisBlogPost = BlogPost;
export type WhyChooseUsFeature = PrintAxisWhyChooseUsData["featuresList"][0];
export type WhyChooseUsItem = WhyChooseUsFeature;
export type TestimonialItem = PrintAxisTestimonialData["testimonialsList"][0];
export type ProcessStep = PrintAxisProcessData["steps"][0];
export type ProcessStepItem = ProcessStep;
export type GalleryItem = PrintAxisGalleryData["galleryItems"][0];
export type ContactPhoneCard = PrintAxisContactData["phoneCard"];
export type ContactEmailCard = PrintAxisContactData["emailCard"];
export type ContactOfficeCard = PrintAxisContactData["officeCard"];

// ── Convenience & Short Aliases ──
export type HeroData = PrintAxisHeroData;
export type AboutData = PrintAxisAboutData;
export type ServicesData = PrintAxisServicesData;
export type WhyChooseUsData = PrintAxisWhyChooseUsData;
export type TestimonialsData = PrintAxisTestimonialData;
export type CtaData = PrintAxisCtaData;
export type ProcessData = PrintAxisProcessData;
export type BlogData = PrintAxisBlogData;
export type GalleryData = PrintAxisGalleryData;
export type GetAQuoteData = PrintAxisGetAQuoteData;
export type ContactData = PrintAxisContactData;
export type ThankyouData = PrintAxisThankyouData;
export type FooterData = PrintAxisFooterData;
export type NavbarData = PrintAxisNavbarData;
export type TopbarData = PrintAxisTopbarData;
export type PageTopSectionData = PrintAxisPageTopSectionData;

// ── Default Site Data (Unified Schema Node Map) ──
const sec = siteData.PrintAxis.sections;

export const site = {
  topbar: sec.topbar.variants.PrintAxisTopbar1,
  navbar: sec.navbar.variants.PrintAxisNavbar1,
  footer: sec.footer.variants.PrintAxisFooter1,
  pageTopSection: sec.pageTopSection.variants.PrintAxisPageTopSection1,
  hero: sec.hero.variants.PrintAxisHero1,
  about: sec.about.variants.PrintAxisAbout1,
  service: sec.service.variants.PrintAxisService1,
  services: sec.service.variants.PrintAxisService1,
  whyChooseUs: sec.whyChooseUs.variants.PrintAxisWhyChooseUs1,
  testimonial: sec.testimonial.variants.PrintAxisTestimonial1,
  testimonials: sec.testimonial.variants.PrintAxisTestimonial1,
  testimonialPage: sec.testimonial.variants.PrintAxisTestimonial1,
  cta: sec.cta.variants.PrintAxisCta1,
  process: sec.process.variants.PrintAxisProcess1,
  blog: sec.blog.variants.PrintAxisBlog1,
  blogPage: sec.blog.variants.PrintAxisBlog1,
  gallery: sec.gallery.variants.PrintAxisGallery1,
  getAQuote: sec.getAQuote.variants.PrintAxisGetAQuote1,
  contact: sec.contact.variants.PrintAxisContact1,
  thankyou: sec.thankyou.variants.PrintAxisThankyou1,
  thankYou: sec.thankyou.variants.PrintAxisThankyou1,
  notFound: sec.notFound.variants.PrintAxisNotFound1,
  servicesPage: sec.service.variants.PrintAxisService1,

  // Compatibility & Legacy Keys
  topbarData: sec.topbar.variants.PrintAxisTopbar1,
  navbarData: sec.navbar.variants.PrintAxisNavbar1,
  footerData: sec.footer.variants.PrintAxisFooter1,
  pageTopSectionData: sec.pageTopSection.variants.PrintAxisPageTopSection1,
  heroData: sec.hero.variants.PrintAxisHero1,
  aboutData: sec.about.variants.PrintAxisAbout1,
  serviceData: sec.service.variants.PrintAxisService1,
  servicesData: sec.service.variants.PrintAxisService1,
  whyChooseUsData: sec.whyChooseUs.variants.PrintAxisWhyChooseUs1,
  testimonialData: sec.testimonial.variants.PrintAxisTestimonial1,
  testimonialsData: sec.testimonial.variants.PrintAxisTestimonial1,
  testimonialPageData: sec.testimonial.variants.PrintAxisTestimonial1,
  ctaData: sec.cta.variants.PrintAxisCta1,
  processData: sec.process.variants.PrintAxisProcess1,
  blogData: sec.blog.variants.PrintAxisBlog1,
  blogPageData: sec.blog.variants.PrintAxisBlog1,
  galleryData: sec.gallery.variants.PrintAxisGallery1,
  getAQuoteData: sec.getAQuote.variants.PrintAxisGetAQuote1,
  contactData: sec.contact.variants.PrintAxisContact1,
  thankyouData: sec.thankyou.variants.PrintAxisThankyou1,
  thankYouData: sec.thankyou.variants.PrintAxisThankyou1,
  notFoundData: sec.notFound.variants.PrintAxisNotFound1,
  servicesPageData: sec.service.variants.PrintAxisService1,

  // Root References
  PrintAxis: siteData.PrintAxis,
  Services: siteData.PrintAxis,
};

export const siteMap = site;
export type SiteData = typeof site;
export default siteData;
