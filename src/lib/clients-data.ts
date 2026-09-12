export type Client = {
  name: string;
  logoSrc?: string;
  url?: string;
};

// Add a logoSrc (place the image file in /public) and/or url for any client
// once assets or links are available — both are optional.
export const clients: Client[] = [
  { name: "Nixon Home Care, Inc." },
  { name: "Nixon Counseling Services", logoSrc: "/clients/nixon-counseling-services.png" },
  { name: "SK Wellness Services", logoSrc: "/clients/sk-wellness-services.png" },
  { name: "El Paso Gymnastics", logoSrc: "/clients/el-paso-gymnastics.jpg" },
  { name: "Anchor Health Solutions", logoSrc: "/clients/anchor-health-solutions.jpg" },
  { name: "Konnecting the Dots Institute" },
  { name: "FitJust4u", logoSrc: "/clients/fitjust4u.jpg" },
];
