import PageTopSection from "@/components/common/PageTopSection";
import BlogDetailSection from "@/sections/BlogDetailSection";
import CtaSection from "@/sections/home/CtaSection";
import { siteMap } from "@/data";

export function generateStaticParams() {
  const posts = siteMap.blog?.blogPosts || [];
  return posts.map((post) => ({
    slug: post.href.replace("/blog/", "").replace(/^\//, "") || post.id,
  }));
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const { blog, cta, pageTopSection } = siteMap;

  // Match the specific post to pass directly as data
  const matchedPost = blog?.blogPosts?.find(
    (p: any) =>
      p.id === resolvedParams?.slug ||
      p.href === `/blog/${resolvedParams?.slug}` ||
      p.href?.endsWith(`/${resolvedParams?.slug}`)
  );

  return (
    <main>
      <PageTopSection
        data={pageTopSection}
        title="Blog Details"
        breadcrumb="Blog Details"
      />
      <BlogDetailSection
        slug={resolvedParams?.slug}
        data={matchedPost}
      />
      <CtaSection data={cta} />
    </main>
  );
}
