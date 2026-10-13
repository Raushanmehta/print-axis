import siteData from "./site.json";

// Types
export type RawSiteData = typeof siteData;
export type PrintAxisSchema = typeof siteData.PrintAxis;
export type PrintAxisSections = PrintAxisSchema["sections"];
export type PrintAxisTemplateComponents = PrintAxisSchema["templateComponents"];

// Types
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// Types
export type PrintAxisTopbarData = PrintAxisSections["topbar"]["variants"]["PrintAxisTopbar1"];
export type PrintAxisNavbarData = PrintAxisSections["navbar"]["variants"]["PrintAxisNavbar1"];
export type PrintAxisFooterData = PrintAxisSections["footer"]["variants"]["PrintAxisFooter1"];
export type PrintAxisPageTopData = PrintAxisSections["pageTopSection"]["variants"]["PrintAxisPageTopSection1"];
export type PrintAxisPageTopSectionData = PrintAxisPageTopData;
export type PrintAxisHeroData = PrintAxisSections["hero"]["variants"]["PrintAxisHero1"];
export type PrintAxisAboutData = PrintAxisSections["about"]["variants"]["PrintAxisAbout1"];
export type PrintAxisServicesData = PrintAxisSections["service"]["variants"]["PrintAxisService1"];
export type PrintAxisServiceData = PrintAxisServicesData;
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
export type PrintAxisThankYouData = PrintAxisSections["thankyou"]["variants"]["PrintAxisThankyou1"];
export type PrintAxisThankyouData = PrintAxisThankYouData;
export type PrintAxisNotFoundData = PrintAxisSections["notFound"]["variants"]["PrintAxisNotFound1"];
export type PrintAxisServicesPageData = PrintAxisServicesData;

// Types
export type NavItem = PrintAxisNavbarData["navLinks"][number];
export type ServiceItem = PrintAxisServicesData["servicesList"][number];
export type WhyChooseUsItem = PrintAxisWhyChooseUsData["featuresList"][number];
export type TestimonialItem = PrintAxisTestimonialData["testimonialsList"][number];
export type ProcessStepItem = PrintAxisProcessData["steps"][number];
export type BlogPostItem = PrintAxisBlogData["blogPosts"][number];
export type PrintAxisBlogPost = BlogPostItem;
export type GalleryItem = PrintAxisGalleryData["galleryItems"][number];
export type ContactPhoneCard = PrintAxisContactData["phoneCard"];
export type ContactEmailCard = PrintAxisContactData["emailCard"];
export type ContactOfficeCard = PrintAxisContactData["officeCard"];

// Location
const sec = siteData.PrintAxis.sections;

export const siteMap = {
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

  // Compatibility
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

  // Root
  PrintAxis: siteData.PrintAxis,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default siteData;
