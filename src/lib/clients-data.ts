export type Client = {
  name: string;
  logoSrc?: string;
  url?: string;
};

// Add a logoSrc (place the image file in /public) and/or url for any client
// once assets or links are available — both are optional.
export const clients: Client[] = [
  { name: "Nixon Home Care, Inc.", logoSrc: "/clients/nixon-home-care.png" },
  { name: "Nixon Counseling Services", logoSrc: "/clients/nixon-counseling-services.png" },
  { name: "SK Wellness Services", logoSrc: "/clients/sk-wellness-services.png" },
  { name: "El Paso Gymnastics", logoSrc: "/clients/el-paso-gymnastics.png" },
  { name: "Anchor Health Solutions", logoSrc: "/clients/anchor-health-solutions.png" },
  { name: "Konnecting the Dots Institute", logoSrc: "/clients/konnecting-the-dots-institute.png" },
  { name: "FitJust4u", logoSrc: "/clients/fitjust4u.png" },
];
