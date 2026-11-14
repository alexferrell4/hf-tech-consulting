import type { CSSProperties } from "react";
import { MapPin, Mail, Zap } from "lucide-react";

// Decorative, per-page hero graphics. All motion is CSS (globals.css) and is
// switched off under prefers-reduced-motion.

const delay = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;

function Node({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width="84" height="38" rx="8" fill="#0a0f14" stroke="#1e2a38" />
      <text
        x={x + 42}
        y={y + 23}
        textAnchor="middle"
        fontSize="11"
        fill="#8b9db5"
        fontFamily="var(--font-mono)"
      >
        {label}
      </text>
    </g>
  );
}

export function WorkflowVisual() {
  const inputs = [
    { y: 20, label: "Form" },
    { y: 111, label: "Email" },
    { y: 202, label: "Sheet" },
  ];
  const outputs = [
    { y: 60, label: "Notify" },
    { y: 162, label: "Report" },
  ];
  return (
    <svg width="380" height="260" viewBox="0 0 380 260" fill="none">
      {inputs.map((n) => (
        <path
          key={n.label}
          d={`M104 ${n.y + 19} C 140 ${n.y + 19}, 140 130, 164 130`}
          stroke="#0088ff"
          strokeOpacity="0.6"
          className="dash-flow"
        />
      ))}
      {outputs.map((n) => (
        <path
          key={n.label}
          d={`M216 130 C 250 130, 250 ${n.y + 19}, 286 ${n.y + 19}`}
          stroke="#b8c5d6"
          strokeOpacity="0.5"
          className="dash-flow"
        />
      ))}
      {inputs.map((n) => (
        <Node key={n.label} x={20} y={n.y} label={n.label} />
      ))}
      {outputs.map((n) => (
        <Node key={n.label} x={286} y={n.y} label={n.label} />
      ))}
      <circle cx="190" cy="130" r="40" stroke="#0088ff" strokeOpacity="0.25" />
      <circle cx="190" cy="130" r="26" fill="#0a0f14" stroke="#0088ff" />
      <Zap x={179} y={119} width={22} height={22} color="#0088ff" strokeWidth={1.5} />
    </svg>
  );
}

export function LocationVisual() {
  return (
    <div className="relative w-72 h-72">
      {[0, 1000, 2000].map((ms) => (
        <span
          key={ms}
          className="ring-pulse absolute inset-0 rounded-full border border-accent/50"
          style={delay(ms)}
        />
      ))}
      <span className="absolute inset-8 rounded-full border border-border" />
      <span className="absolute inset-20 rounded-full border border-border" />
      <span className="absolute left-1/2 top-0 bottom-0 w-px bg-border/60" />
      <span className="absolute top-1/2 left-0 right-0 h-px bg-border/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <MapPin className="w-8 h-8 text-accent float-y" strokeWidth={1.5} />
        <span className="mt-3 font-mono text-xs tracking-widest text-foreground">HOUSTON, TX</span>
        <span className="mt-1 font-mono text-[10px] text-muted-foreground">
          29.7604° N · 95.3698° W
        </span>
      </div>
    </div>
  );
}

function Lines({ widths }: { widths: string[] }) {
  return (
    <div className="space-y-2">
      {widths.map((w, i) => (
        <div
          key={i}
          className="shimmer h-2 rounded-full bg-muted-foreground/40"
          style={{ width: w, ...delay(i * 300) }}
        />
      ))}
    </div>
  );
}

export function FaqVisual() {
  return (
    <div className="w-72 space-y-4">
      <div className="float-y ml-auto w-fit rounded-2xl rounded-br-sm bg-accent-cta px-5 py-3 text-2xl font-bold text-white">
        ?
      </div>
      <div className="float-y panel w-56 p-4" style={delay(600)}>
        <Lines widths={["100%", "85%", "60%"]} />
      </div>
      <div className="float-y ml-auto w-fit rounded-2xl rounded-br-sm border border-accent/40 bg-accent/10 px-5 py-3 text-xl font-bold text-accent" style={delay(1200)}>
        ?
      </div>
      <div className="float-y panel flex w-24 items-center gap-1.5 p-4" style={delay(1800)}>
        {[0, 1, 2].map((i) => (
          <span key={i} className="shimmer h-2 w-2 rounded-full bg-accent" style={delay(i * 250)} />
        ))}
      </div>
    </div>
  );
}

export function ContactVisual() {
  return (
    <div className="relative w-72 mr-8 mb-10">
      <div className="float-y panel p-6">
        <div className="mb-5 flex items-center gap-3">
          <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} />
          <span className="font-mono text-xs tracking-widest text-muted-foreground">NEW MESSAGE</span>
        </div>
        <Lines widths={["70%", "100%", "90%", "45%"]} />
      </div>
      <div className="absolute -bottom-10 -right-6 flex h-24 w-24 items-center justify-center rounded-full bg-card">
        <svg className="absolute inset-0" viewBox="0 0 96 96" fill="none">
          <circle cx="48" cy="48" r="44" stroke="#1e2a38" strokeWidth="2" />
          <path
            d="M48 4 A44 44 0 0 1 92 48"
            stroke="#0088ff"
            strokeWidth="2"
            strokeLinecap="round"
            className="spin-slow"
            style={{ transformOrigin: "48px 48px", transformBox: "view-box" }}
          />
        </svg>
        <div className="text-center">
          <div className="font-mono text-lg font-bold text-foreground">24h</div>
          <div className="font-mono text-[9px] tracking-widest text-muted-foreground">REPLY</div>
        </div>
      </div>
    </div>
  );
}

export function BlogVisual() {
  const cards = [
    { rotate: "-6deg", x: "0px", y: "24px", ms: 0 },
    { rotate: "3deg", x: "56px", y: "0px", ms: 700 },
    { rotate: "-2deg", x: "28px", y: "96px", ms: 1400 },
  ];
  return (
    <div className="relative h-64 w-72">
      {cards.map((card, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: card.x, top: card.y, transform: `rotate(${card.rotate})` }}
        >
          <div className="float-y panel w-52 p-4" style={delay(card.ms)}>
            <div className="mb-3 h-2 w-12 rounded-full bg-accent/70" />
            <Lines widths={["100%", "80%", "55%"]} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function QuoteVisual() {
  return (
    <div className="float-y panel w-72 p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">QUOTE</span>
        <span className="font-mono text-xs text-accent">#001</span>
      </div>
      <div className="space-y-3 border-b border-border pb-4">
        {["65%", "50%", "72%"].map((w, i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <div className="shimmer h-2 rounded-full bg-muted-foreground/40" style={{ width: w, ...delay(i * 300) }} />
            <div className="shimmer h-2 w-8 rounded-full bg-accent/60" style={delay(i * 300 + 150)} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4">
        <span className="font-mono text-xs tracking-widest text-foreground">TOTAL</span>
        <div className="shimmer h-3 w-16 rounded-full bg-accent" style={delay(900)} />
      </div>
    </div>
  );
}
