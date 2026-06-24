import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "./container";

function Section({
  className,
  containerClassName,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  containerClassName?: string;
}) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-24", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export { Section };
