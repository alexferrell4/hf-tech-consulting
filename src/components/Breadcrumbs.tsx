import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />}
              {isLast ? (
                <span aria-current="page" className="text-foreground font-medium">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-accent transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
