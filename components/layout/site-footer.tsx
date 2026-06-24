import Link from "next/link";

import { Container } from "./container";

function SiteFooter() {
  return (
    <footer className="border-t border-border/70 py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Marrai helps teams understand AI visibility.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="#free-audit"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Run audit
          </Link>
          <Link
            href="#research"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Research
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export { SiteFooter };
