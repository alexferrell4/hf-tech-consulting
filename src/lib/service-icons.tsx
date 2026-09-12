import { Zap, Cloud, Code2, BarChart3, Globe, FileText, Headphones, Megaphone } from "lucide-react";
import type { ServiceIconKey } from "@/lib/services-data";

export const serviceIconMap: Record<ServiceIconKey, typeof Zap> = {
  Zap,
  Code2,
  Globe,
  Cloud,
  BarChart3,
  FileText,
  Headphones,
  Megaphone,
};
