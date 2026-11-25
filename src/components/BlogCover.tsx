import { Zap, Code2, Cloud, HeartPulse, Headphones, Users, FileText } from "lucide-react";

const icons: Record<string, typeof Zap> = {
  Automation: Zap,
  "Software Development": Code2,
  "Cloud Solutions": Cloud,
  Healthcare: HeartPulse,
  "IT Support": Headphones,
  Community: Users,
};

// Typographic cover for posts without a photo, so the blog grid stays even.
export default function BlogCover({ category, className = "" }: { category: string; className?: string }) {
  const Icon = icons[category] ?? FileText;
  return (
    <div aria-hidden="true" className={`relative overflow-hidden bg-muted border-b border-border ${className}`}>
      <Icon
        className="absolute -right-4 -bottom-6 h-36 w-36 text-foreground/[0.07]"
        strokeWidth={1}
      />
      <div className="absolute left-6 top-6 right-6 flex items-center gap-2 text-foreground">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
        <span className="font-mono text-xs uppercase tracking-[0.08em]">{category}</span>
      </div>
    </div>
  );
}
