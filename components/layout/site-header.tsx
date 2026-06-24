import Link from "next/link";

import { Container } from "./container";

const navItems = [
  { href: "/audit", label: "Audit" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
];

function SiteHeader() {
  return (
    <header className="border-b border-border/70 bg-background">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="inline-flex size-2 rounded-full bg-primary" />
          <span>Marrai</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}

export { SiteHeader };
