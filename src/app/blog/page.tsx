import type { Metadata } from "next";
import { getSortedPosts } from "@/lib/blog-data";
import { breadcrumbJsonLd, buildOpenGraph, jsonLdHtml, SITE_NAME, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogList from "@/components/BlogList";

const title = "Blog & Insights";
const description =
  "Practical articles on workflow automation, custom software, cloud solutions, and IT support for small and midsize businesses in Houston, TX.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: buildOpenGraph({
    path: "/blog",
    title: `${title} | ${SITE_NAME}`,
    description,
  }),
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export default function BlogIndexPage() {
  const posts = getSortedPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog/#blog`,
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(blogJsonLd) }} />

      <main className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
          <div className="absolute inset-0 circuit-pattern opacity-30" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />

          <h1 className="eyebrow mb-4">Blog & Insights</h1>
          <p className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Practical guidance for small business technology
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16 max-w-3xl">
            Straightforward articles on workflow automation, software, cloud solutions, and IT
            support — written for business owners, not engineers.
          </p>

          <BlogList posts={posts} />
        </div>
      </main>
    </>
  );
}
