import Image from "next/image";
import { clients } from "@/lib/clients-data";

export default function ClientsCarousel() {
  if (clients.length === 0) return null;

  // Duplicate the list so the marquee can loop seamlessly at -50%.
  const track = [...clients, ...clients];

  return (
    <div className="pt-10 border-t border-border/50">
      <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8">
        Trusted By
      </p>

      <div className="relative overflow-hidden marquee-fade">
        <div className="flex w-max marquee-track">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center px-10 shrink-0"
            >
              {client.logoSrc ? (
                <div className="relative h-8 w-32 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={client.logoSrc}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-lg font-semibold tracking-tight text-muted-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
