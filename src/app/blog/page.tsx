import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSortedPosts, estimateReadingTime } from "@/lib/blog-data";
import { breadcrumbJsonLd, buildOpenGraph, jsonLdHtml, SITE_NAME, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

const title = "Blog & Insights";
const description =
  "Practical, no-nonsense articles on workflow automation, custom software, cloud solutions, and IT support for small and midsize businesses in Houston, TX and beyond.";

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

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

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

          <h1 className="text-sm uppercase tracking-widest text-accent mb-4">Blog & Insights</h1>
          <p className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Practical guidance for small business technology
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16 max-w-3xl">
            Straightforward articles on workflow automation, software, cloud solutions, and IT
            support — written for business owners, not engineers.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group gradient-border overflow-hidden hover:glow transition-shadow duration-300 flex flex-col"
              >
                {post.image && (
                  <div className="relative w-full h-48 bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium">
                      {post.category}
                    </span>
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    <span>·</span>
                    <span>{estimateReadingTime(post)} min read</span>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-medium">
                    Read article
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
