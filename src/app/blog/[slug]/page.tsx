import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { posts, getPostBySlug, estimateReadingTime } from "@/lib/blog-data";
import { services } from "@/lib/services-data";
import { breadcrumbJsonLd, buildOpenGraph, jsonLdHtml, SITE_URL } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogGallery from "@/components/BlogGallery";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  // metaTitle keeps the <title> tag within Google's ~60-char display budget
  // when the full title runs long; the page's own H1 always uses post.title.
  const metaTitle = post.metaTitle ?? post.title;

  return {
    title: metaTitle,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      ...buildOpenGraph({
        path: `/blog/${post.slug}`,
        title: metaTitle,
        description: post.description,
      }),
      ...(post.image && {
        images: [{ url: post.image, width: 1500, height: 2000, alt: post.title }],
      }),
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

// Renders a paragraph/list-item, turning the first occurrence of each of the
// post's inlineLinks phrases into a link to the matching service page.
// `remaining` is mutated across calls so each phrase is only linked once,
// at whichever point in the post it's first encountered.
function linkify(text: string, remaining: { text: string; slug: string }[]): ReactNode {
  for (let i = 0; i < remaining.length; i++) {
    const link = remaining[i];
    const idx = text.indexOf(link.text);
    if (idx !== -1) {
      remaining.splice(i, 1);
      const before = text.slice(0, idx);
      const after = text.slice(idx + link.text.length);
      return (
        <>
          {before}
          <Link
            href={`/services/${link.slug}`}
            className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
          >
            {link.text}
          </Link>
          {linkify(after, remaining)}
        </>
      );
    }
  }
  return text;
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedServices = services.filter((s) => post.relatedServices.includes(s.slug));
  const remainingInlineLinks = [...(post.inlineLinks ?? [])];

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    image: `${SITE_URL}${post.image ?? "/logo.png"}`,
    url: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(articleJsonLd) }} />

      <main className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
          <div className="absolute inset-0 circuit-pattern opacity-30" />
        </div>

        <article className="relative max-w-3xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />

          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
            <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium">
              {post.category}
            </span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>·</span>
            <span>{estimateReadingTime(post)} min read</span>
            <span>·</span>
            <span>By {post.author}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-balance">
            {post.title}
          </h1>

          {post.image && (
            <div className="relative gradient-border p-2 mb-12">
              <div className="relative w-full h-[65vh] max-h-180 min-h-80 rounded-[calc(var(--radius)-6px)] overflow-hidden bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          )}

          <div className="space-y-4 mb-12">
            {post.intro.map((paragraph, i) => (
              <p key={i} className="text-xl text-muted-foreground leading-relaxed">
                {linkify(paragraph, remainingInlineLinks)}
              </p>
            ))}
          </div>

          <div className="space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
                {section.paragraphs && (
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {linkify(paragraph, remainingInlineLinks)}
                      </p>
                    ))}
                  </div>
                )}
                {section.list && (
                  <ul className="space-y-3 mt-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                        <span>{linkify(item, remainingInlineLinks)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {post.gallery && post.gallery.length > 0 && (
            <section className="mt-16 pt-8 border-t border-border">
              <h2 className="eyebrow mb-6">
                Photos from the Day
              </h2>
              <BlogGallery images={post.gallery} alt={post.title} />
            </section>
          )}

          {relatedServices.length > 0 && (
            <section className="mt-16 pt-8 border-t border-border">
              <h2 className="eyebrow mb-4">
                Related Services
              </h2>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mt-16 gradient-border p-8 text-center">
            <p className="text-xl font-bold text-foreground mb-3">
              Have a process like this in your business?
            </p>
            <p className="text-muted-foreground mb-6">
              Schedule a consultation and we&apos;ll take a look at what makes sense for your team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cta text-accent-foreground font-medium rounded-full hover:bg-accent-cta/90 active:scale-[0.97] transition-all duration-200 group"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </section>

          <div className="mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium">
              ← Back to all articles
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
