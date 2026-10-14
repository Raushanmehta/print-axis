import { notFound } from "next/navigation";
import PageTopSection from "@/components/common/PageTopSection";
import BlogDetailSection from "@/sections/BlogDetailSection";
import CtaSection from "@/sections/home/CtaSection";
import { site } from "@/data";

interface BlogDetailRouteProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export function generateStaticParams() {
  const posts = site.blog?.blogPosts || [];
  const slugs = new Set<string>();
  posts.forEach((post) => {
    if (post.id) slugs.add(post.id);
    const hrefSlug = post.href?.replace("/blog/", "").replace(/^\//, "");
    if (hrefSlug) slugs.add(hrefSlug);
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

// Blog detail page showing article content and sidebar.
export default async function BlogPostDetailPage({ params }: BlogDetailRouteProps) {
  const { slug } = await params;
  const blogData = site.blog;

  const post = blogData?.blogPosts?.find(
    (item: any) =>
      item.slug === slug ||
      String(item.id) === slug ||
      item.href === `/blog/${slug}` ||
      item.href?.endsWith(`/${slug}`)
  );

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageTopSection
        data={site.pageTopSection}
        title="Blog Details"
        breadcrumb="Blog Details"
      />
      <BlogDetailSection
        slug={slug}
        data={post}
      />
      <CtaSection data={site.cta} />
    </main>
  );
}
