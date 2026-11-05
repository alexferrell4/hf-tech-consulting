"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";
import { estimateReadingTime } from "@/lib/blog-data";

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(
    () => Array.from(new Set(posts.map((post) => post.category))),
    [posts]
  );
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? posts.filter((post) => post.category === active) : posts;

  return (
    <div>
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter articles by category">
          <button
            onClick={() => setActive(null)}
            aria-pressed={active === null}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === null
                ? "bg-accent-cta text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-accent hover:bg-accent/10"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === category
                  ? "bg-accent-cta text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-accent hover:bg-accent/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-muted-foreground">No articles in this category yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group panel overflow-hidden flex flex-col"
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
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
