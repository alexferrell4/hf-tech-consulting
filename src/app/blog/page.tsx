import type { Metadata } from "next";
import { getSortedPosts } from "@/lib/blog-data";
import { breadcrumbJsonLd, buildOpenGraph, jsonLdHtml, SITE_NAME, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogList from "@/components/BlogList";
import PageHero from "@/components/PageHero";

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

      <main className="pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />

          <PageHero
            label="Blog"
            title="Practical guidance on small business technology"
            description="Articles on workflow automation, software, cloud and IT support, written for business owners rather than engineers."
          />

          <BlogList posts={posts} />
        </div>
      </main>
    </>
  );
}
