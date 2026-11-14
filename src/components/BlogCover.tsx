import { Zap, Code2, Cloud, HeartPulse, Headphones, Users, FileText } from "lucide-react";

const covers: Record<string, { icon: typeof Zap; glow: string }> = {
  Automation: { icon: Zap, glow: "20% 30%" },
  "Software Development": { icon: Code2, glow: "80% 20%" },
  "Cloud Solutions": { icon: Cloud, glow: "50% 0%" },
  Healthcare: { icon: HeartPulse, glow: "15% 80%" },
  "IT Support": { icon: Headphones, glow: "85% 75%" },
  Community: { icon: Users, glow: "50% 50%" },
};

// Generated cover for posts without a photo, so the blog grid stays even.
export default function BlogCover({ category, className = "" }: { category: string; className?: string }) {
  const { icon: Icon, glow } = covers[category] ?? { icon: FileText, glow: "50% 50%" };
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-card ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at ${glow}, rgba(0,136,255,0.35), transparent 55%)`,
      }}
    >
      <div className="absolute inset-0 circuit-pattern" />
      <Icon
        className="absolute -right-6 -bottom-8 h-44 w-44 text-accent/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
        strokeWidth={1}
      />
      <div className="absolute left-6 bottom-6 flex items-center gap-3">
        <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-secondary">
          {category}
        </span>
      </div>
    </div>
  );
}
