export type Client = {
  name: string;
  logoSrc?: string;
  url?: string;
};

// Add a logoSrc (place the image file in /public) and/or url for any client
// once assets or links are available — both are optional.
export const clients: Client[] = [
  { name: "Nixon Home Care, Inc." },
  { name: "Nixon Counseling Services" },
  { name: "SK Wellness Services" },
  { name: "El Paso Gymnastics" },
  { name: "Anchor Health Solutions" },
  { name: "Konnecting the Dots Institute" },
  { name: "FitJust4u" },
];
