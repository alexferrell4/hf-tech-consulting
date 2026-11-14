import { services } from "@/lib/services-data";
import { BUDGET_OPTIONS, TIMELINE_OPTIONS, CONTACT_METHODS } from "@/lib/quote-options";
import { BUSINESS_EMAIL, SITE_NAME } from "@/lib/seo";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM_ADDRESS = `${SITE_NAME} Website <website@hftechconsulting.com>`;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

const singleLine = (value: unknown, max: number) => clean(value, max).replace(/[\r\n]+/g, " ");

// Only accept values the forms actually offer, so nothing arbitrary reaches the email.
const oneOf = (value: unknown, allowed: readonly string[]) =>
  typeof value === "string" && allowed.includes(value) ? value : "";

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const serviceTitle = (slug: unknown) => services.find((service) => service.slug === slug)?.title;

// Handles both the contact form and the quote request form (kind: "quote").
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Report success so
  // bots get no signal that they were filtered.
  if (typeof body.website === "string" && body.website.length > 0) {
    return Response.json({ ok: true });
  }

  const isQuote = body.kind === "quote";
  const name = singleLine(body.name, 120);
  const email = singleLine(body.email, 200);
  const phone = singleLine(body.phone, 40);
  const company = singleLine(body.company, 160);
  const message = clean(body.message, 5000);

  if (!name || !EMAIL_PATTERN.test(email) || message.length < 10) {
    return Response.json(
      { error: "Please include your name, a valid email, and a few details about your project." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return Response.json({ error: "The form is temporarily unavailable." }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Company", company || "Not provided"],
  ];

  let subject: string;
  if (isQuote) {
    const requested = (Array.isArray(body.services) ? body.services : [])
      .map(serviceTitle)
      .filter((title): title is string => Boolean(title));
    rows.push(
      ["Services", requested.join(", ") || "Not specified"],
      ["Timeline", oneOf(body.timeline, TIMELINE_OPTIONS) || "Not specified"],
      ["Budget", oneOf(body.budget, BUDGET_OPTIONS) || "Not specified"],
      ["Preferred contact", oneOf(body.contactMethod, CONTACT_METHODS) || "Not specified"]
    );
    subject = `Quote request from ${name}${company ? ` (${company})` : ""}`;
  } else {
    const service = serviceTitle(body.service) ?? "Not specified";
    rows.push(["Service", service]);
    subject = `New inquiry from ${name} (${service})`;
  }

  const text = `${rows.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nProject details:\n${message}`;
  const html = `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">${rows
    .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`)
    .join("")}</table><p style="font-family:sans-serif;font-size:14px"><strong>Project details</strong></p><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(message)}</p>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [process.env.CONTACT_TO_EMAIL ?? BUSINESS_EMAIL],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    console.error("Contact form: Resend rejected the email", response.status, await response.text());
    return Response.json({ error: "We couldn't send your message." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
