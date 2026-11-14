// Shared by the quote form and the API route that validates its submissions.
export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1–3 months",
  "3+ months out",
  "Just exploring",
] as const;

export const BUDGET_OPTIONS = [
  "Under $2,500",
  "$2,500 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Not sure yet",
] as const;

export const CONTACT_METHODS = ["Email", "Phone call", "Text message"] as const;
