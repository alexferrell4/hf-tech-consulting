// Builds /contact links that carry context (a service, a quiz or calculator
// result) into the contact form, which reads these params on load.
export function contactHref({ service, note }: { service?: string; note?: string } = {}): string {
  const params = new URLSearchParams();
  if (service) params.set("service", service);
  if (note) params.set("note", note);
  const query = params.toString();
  return query ? `/contact?${query}` : "/contact";
}
