import type { Metadata } from "next";
import { breadcrumbJsonLd, buildOpenGraph, jsonLdHtml, BUSINESS_EMAIL, SITE_NAME } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

const title = "Privacy Policy";
const description =
  "How H.F. Tech Consulting collects, uses, and protects information from visitors to hftechconsulting.com, including data collected through our contact form, analytics, and advertising.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: buildOpenGraph({
    path: "/privacy",
    title: `${title} | ${SITE_NAME}`,
    description,
  }),
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy" },
]);

const EFFECTIVE_DATE = "September 12, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumbs) }}
      />

      <main className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
          <div className="absolute inset-0 circuit-pattern opacity-30" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy" }]} />

          <h1 className="text-sm uppercase tracking-widest text-accent mb-4">Legal</h1>
          <p className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Privacy Policy
          </p>
          <p className="text-muted-foreground mb-16">Effective date: {EFFECTIVE_DATE}</p>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <p>
                This Privacy Policy explains how H.F. Tech Consulting (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) collects, uses, and shares information when you visit{" "}
                <span className="text-foreground">hftechconsulting.com</span> (the &quot;Site&quot;). By
                using the Site, you agree to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <p>
                  <span className="text-foreground font-semibold">Information you provide directly.</span>{" "}
                  When you submit our contact form, we (through our form provider, JotForm) collect the
                  information you enter — typically your name, email address, phone number, and the
                  details of your message. We use this information only to respond to your inquiry.
                </p>
                <p>
                  <span className="text-foreground font-semibold">Automatically collected information.</span>{" "}
                  Like most websites, we automatically receive certain technical information when you
                  visit, such as your general location, device and browser type, pages viewed, and how
                  you arrived at the Site. We use this aggregated, privacy-conscious analytics data
                  (via Vercel Analytics) to understand how the Site is used and to improve it.
                </p>
                <p>
                  <span className="text-foreground font-semibold">Cookies and advertising data.</span> We
                  use Google AdSense to display advertising on the Site. Google and its partners may use
                  cookies and similar technologies to serve ads based on your prior visits to this and
                  other websites. See the &quot;Cookies &amp; Advertising&quot; section below for details
                  and how to opt out.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Information</h2>
              <ul className="space-y-3">
                {[
                  "To respond to inquiries submitted through our contact form",
                  "To understand how visitors use the Site so we can improve it",
                  "To display advertising, including personalized advertising served by Google AdSense",
                  "To maintain the security and proper functioning of the Site",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies &amp; Advertising</h2>
              <div className="space-y-4">
                <p>
                  This Site uses Google AdSense to serve advertisements. Google, as a third-party
                  vendor, uses cookies to serve ads based on your visits to this and other sites on the
                  internet. Google&apos;s use of advertising cookies enables it and its partners to serve
                  ads based on your visit to this Site and/or other sites.
                </p>
                <p>
                  You may opt out of personalized advertising by visiting{" "}
                  <a
                    href="https://myaccount.google.com/mypreferences/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 underline"
                  >
                    Google Ads Settings
                  </a>
                  . You can also opt out of a third-party vendor&apos;s use of cookies for personalized
                  advertising by visiting{" "}
                  <a
                    href="https://optout.aboutads.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 underline"
                  >
                    www.aboutads.info
                  </a>
                  {" "}or{" "}
                  <a
                    href="https://optout.networkadvertising.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 underline"
                  >
                    www.networkadvertising.org
                  </a>
                  . Most browsers also let you block or delete cookies through their settings.
                </p>
                <p>
                  For more on how Google uses information from sites that use its services, see{" "}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 underline"
                  >
                    How Google Uses Information from Sites or Apps that Use Our Services
                  </a>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
              <p className="mb-4">We rely on the following third-party services to operate the Site:</p>
              <ul className="space-y-3">
                {[
                  "Google AdSense — displays advertising and may use cookies as described above",
                  "JotForm — processes and stores contact form submissions on our behalf",
                  "Vercel Analytics — provides aggregated, privacy-conscious website analytics",
                  "Vercel — hosts the Site",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Each of these providers has its own privacy practices governing how it handles data. We
                encourage you to review their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
              <p>
                We do not sell your personal information. We share information only with the
                third-party service providers described above, as necessary to operate the Site and
                respond to your inquiries, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Choices</h2>
              <p>
                You can decline to submit personal information by not using our contact form — this
                will only limit our ability to respond to you directly. You can control or delete
                cookies through your browser settings, and opt out of personalized advertising using
                the links in the &quot;Cookies &amp; Advertising&quot; section above. If you would like
                us to delete information you previously submitted through our contact form, email us at
                the address below and we will honor that request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Children&apos;s Privacy</h2>
              <p>
                This Site is not directed at children under the age of 13, and we do not knowingly
                collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p>
                We take reasonable measures to protect information submitted through the Site, but no
                method of transmission or storage over the internet is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your information,
                contact us at{" "}
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-accent hover:text-accent/80 underline"
                >
                  {BUSINESS_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
