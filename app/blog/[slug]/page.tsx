import { Suspense } from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import BlogDetailSection from "@/sections/BlogDetailSection";
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

async function BlogDetailContent({ params }: BlogDetailRouteProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
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
    <>
      <Breadcrumb
        data={site.pageTopSection}
        title={post.title || "Blog Details"}
        parentLabel="Blog"
        parentHref="/blog"
        breadcrumb={post.title || "Blog Details"}
      />
      <BlogDetailSection
        slug={slug}
        data={post}
      />
    </>
  );
}

// Blog detail page showing article content and sidebar with Suspense for instant navigation.
export default function BlogPostDetailPage({ params }: BlogDetailRouteProps) {
  return (
    <main>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <BlogDetailContent params={params} />
      </Suspense>
    </main>
  );
}

