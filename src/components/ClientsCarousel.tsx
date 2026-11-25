import Image from "next/image";
import { clients } from "@/lib/clients-data";

function ClientTile({ name, logoSrc }: { name: string; logoSrc?: string }) {
  return (
    <div className="flex w-44 sm:w-52 shrink-0 flex-col items-center gap-3 px-3">
      {/* Logos are drawn for white backgrounds, so each sits on a light tile. */}
      <div className="relative h-20 w-full rounded-[4px] bg-[#f3f0e8]">
        {logoSrc && <Image src={logoSrc} alt="" fill sizes="208px" className="object-contain p-3" />}
      </div>
      <span className="text-xs text-center text-muted-foreground leading-snug">{name}</span>
    </div>
  );
}

// Continuously scrolling logo strip. The list is rendered twice so the CSS
// marquee (translateX 0 → -50%) loops seamlessly; the second copy is hidden
// from assistive tech. Pauses on hover and stops under reduced motion.
export default function ClientsCarousel() {
  if (clients.length === 0) return null;

  return (
    <div className="marquee-fade overflow-hidden">
      <div className="marquee-track flex w-max">
        <ul className="flex" aria-label="Clients">
          {clients.map((client) => (
            <li key={client.name}>
              <ClientTile {...client} />
            </li>
          ))}
        </ul>
        <ul className="flex" aria-hidden="true">
          {clients.map((client) => (
            <li key={client.name}>
              <ClientTile {...client} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
