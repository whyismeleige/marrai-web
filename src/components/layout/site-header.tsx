"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, ArrowUpRight } from "lucide-react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import {
  authNavItems,
  primaryNavItems,
  productNavItems,
} from "@/constants/nav";
import { brandAssets, siteCopy } from "@/constants/homepage-copy";
import { cn } from "@/lib/utils";

const navEase = [0.16, 1, 0.3, 1] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);
  const reduceMotion = useReducedMotion();
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!productsOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [productsOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="dark relative z-40 border-b border-border bg-background text-foreground"
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:h-20 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label={siteCopy.brandName}
          >
            <Image
              src={brandAssets.logoPrimaryDark}
              alt={siteCopy.logoAlt}
              width={178}
              height={50}
              priority
              className="hidden h-12 w-auto lg:block"
            />
            <Image
              src={brandAssets.iconMarkDark}
              alt=""
              width={72}
              height={72}
              priority
              className="size-8 sm:size-10 lg:hidden"
            />
          </Link>

          <nav
            className="hidden items-center gap-2 lg:flex"
            aria-label="Primary"
          >
            {primaryNavItems.map((item) =>
              "menuId" in item && item.menuId === "products" ? (
                <button
                  key={item.label}
                  type="button"
                  className={cn(
                    "inline-flex h-11 items-center gap-2 rounded-md px-4 text-body text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                    productsOpen && "bg-muted",
                  )}
                  aria-expanded={productsOpen}
                  aria-controls="products-menu"
                  onClick={() => setProductsOpen((open) => !open)}
                  onMouseEnter={() => setProductsOpen(true)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-4 text-muted-foreground transition-transform",
                      productsOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex h-11 items-center rounded-md px-4 text-body text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {authNavItems.map((item) => (
              <Button
                key={item.label}
                asChild
                variant={item.variant}
                className={cn("h-11 rounded-lg px-6 ")}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>

        <AnimatePresence>
          {productsOpen ? (
            <ProductsMegaMenu reduceMotion={Boolean(reduceMotion)} />
          ) : null}
        </AnimatePresence>
      </header>

      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}
function ProductsMegaMenu({ reduceMotion }: { reduceMotion: boolean }) {
  const menuItems = productNavItems.slice(1);

  return (
    <motion.div
      id="products-menu"
      className="absolute left-1/2 top-full hidden w-[min(54rem,calc(100vw-4rem))] -translate-x-1/2 pt-4 lg:block"
      initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
      transition={{ duration: reduceMotion ? 0 : 0.18, ease: navEase }}
    >
      <div className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-xl">
        <div className="mb-6 flex items-end justify-between gap-6 border-b border-border pb-5">
          <div>
            <p className="text-label font-semibold uppercase tracking-wide text-muted-foreground">
              Products
            </p>
            <h2 className="mt-2 text-h3 font-semibold text-foreground">
              AI visibility tools for modern brands
            </h2>
          </div>

          <p className="max-w-xs text-right text-small text-muted-foreground">
            Audit, track, and improve how your brand appears across AI
            platforms.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isDisabled = "disabled" in item && item.disabled;

            const content = (
              <>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>

                    {!isDisabled ? (
                      <ArrowUpRight
                        className="size-4 translate-x-1 -translate-y-1 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <h3 className="text-h3 font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                      {item.label}
                    </h3>

                    {isDisabled ? (
                      <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground transition-colors duration-200 group-hover:border-primary/30 group-hover:text-primary">
                        Soon
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-2 text-body text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
                    {item.description}
                  </p>
                </div>
              </>
            );

            return isDisabled ? (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-xl border border-transparent p-5 opacity-80 transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:bg-muted/50 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 size-32 rounded-full bg-primary/10 blur-2xl" />
                </div>

                {content}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="group relative block overflow-hidden rounded-xl border border-transparent p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:bg-muted/50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 size-32 rounded-full bg-primary/10 blur-2xl" />
                </div>

                {content}
              </Link>
            );
          })}
        </div>{" "}
      </div>
    </motion.div>
  );
}
