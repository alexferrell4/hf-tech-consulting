import { services } from "@/lib/services-data";
import { getSortedPosts } from "@/lib/blog-data";
import { faqs } from "@/lib/faq-data";
import { BUSINESS_EMAIL, BUSINESS_PHONE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

// Plain-text site summary for AI assistants and answer engines (llmstxt.org).
export function GET() {
  const lines = [
    `# ${SITE_NAME}`,
    "",
    "> Business technology consulting firm based in Houston, Texas. Workflow automation, custom software, cloud solutions, data analytics, website management, and IT support for small and midsize businesses, including healthcare providers, home care agencies, and counseling practices.",
    "",
    `Founded and run by Harrison Ferrell. Clients work directly with the person doing the work. Serves the Greater Houston area and Texas, and remote clients elsewhere. Contact: ${BUSINESS_EMAIL}, ${BUSINESS_PHONE}, ${SITE_URL}/contact`,
    "",
    "## Services",
    "",
    ...services.map((s) => `- [${s.title}](${SITE_URL}/services/${s.slug}): ${s.intro}`),
    "",
    "## Articles",
    "",
    ...getSortedPosts().map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`),
    "",
    "## Frequently asked questions",
    "",
    ...faqs.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
    "## Pages",
    "",
    `- [About](${SITE_URL}/about)`,
    `- [All services](${SITE_URL}/services)`,
    `- [FAQ](${SITE_URL}/faq)`,
    `- [Contact](${SITE_URL}/contact)`,
    `- [Request a quote](${SITE_URL}/quote)`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
