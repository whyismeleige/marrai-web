"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ChevronRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  authNavItems,
  primaryNavItems,
  productNavItems,
} from "@/constants/nav";
import { brandAssets, siteCopy } from "@/constants/homepage-copy";
import { cn } from "@/lib/utils";

const navEase = [0.16, 1, 0.3, 1] as const;

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type MobileMenuState = "root" | "products";

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const [menuState, setMenuState] = React.useState<MobileMenuState>("root");
  const [direction, setDirection] = React.useState<1 | -1>(1);
  const reduceMotion = useReducedMotion();
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const closeMenu = React.useCallback(() => {
    setMenuState("root");
    onOpenChange(false);
  }, [onOpenChange]);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, open]);

  const panelTransition = { duration: reduceMotion ? 0 : 0.2, ease: navEase };
  const treeTransition = { duration: reduceMotion ? 0 : 0.18, ease: navEase };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="dark fixed inset-0 z-50 flex min-h-dvh flex-col bg-background text-foreground lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
          transition={panelTransition}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5 sm:h-20 sm:px-8">
            <Link
              href="/"
              className="inline-flex items-center rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              onClick={closeMenu}
            >
              <Image
                src={brandAssets.iconMarkDark}
                alt={siteCopy.logoAlt}
                width={72}
                height={72}
                priority
                className="size-8 sm:size-10"
              />
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav
            className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto"
            aria-label="Mobile"
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              {menuState === "root" ? (
                <motion.div
                  key="root"
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : direction > 0 ? -24 : 24,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: reduceMotion ? 0 : direction > 0 ? -24 : 24,
                  }}
                  transition={treeTransition}
                >
                  <RootMenu
                    reduceMotion={Boolean(reduceMotion)}
                    onClose={closeMenu}
                    onProductsClick={() => {
                      setDirection(1);
                      setMenuState("products");
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="products"
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : direction > 0 ? 24 : -24,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: reduceMotion ? 0 : direction > 0 ? -24 : 24,
                  }}
                  transition={treeTransition}
                >
                  <ProductsMenu
                    reduceMotion={Boolean(reduceMotion)}
                    onBack={() => {
                      setDirection(-1);
                      setMenuState("root");
                    }}
                    onClose={closeMenu}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          <motion.div
            className="grid shrink-0 gap-3 px-5 pb-5 sm:px-8 sm:pb-8"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.08, ...panelTransition }}
          >
            {authNavItems.map((item) => {
              return (
                <Button
                  key={item.label}
                  asChild
                  className={cn("h-12 rounded-lg text-base sm:h-14")}
                >
                  <Link href={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function RootMenu({
  reduceMotion,
  onClose,
  onProductsClick,
}: {
  reduceMotion: boolean;
  onClose: () => void;
  onProductsClick: () => void;
}) {
  const rowMotion = {
    variants: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
      show: { opacity: 1, y: 0 },
    },
    transition: { duration: reduceMotion ? 0 : 0.16, ease: navEase },
  } as const;

  return (
    <motion.div
      className="divide-y divide-border"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.035,
            delayChildren: reduceMotion ? 0 : 0.04,
          },
        },
      }}
    >
      {primaryNavItems.map((item) => {
        if ("menuId" in item && item.menuId === "products") {
          return (
            <motion.button
              key={item.label}
              type="button"
              className="flex h-18 w-full items-center justify-between px-5 text-left text-h3 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 sm:h-22 sm:px-8 sm:text-h2"
              onClick={onProductsClick}
              {...rowMotion}
            >
              <span>{item.label}</span>
              <ChevronRight
                className="size-6 text-secondary-foreground"
                aria-hidden="true"
              />
            </motion.button>
          );
        }

        return (
          <motion.div key={item.label} {...rowMotion}>
            <Link
              href={item.href}
              className="flex h-18 items-center px-5 text-h3 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 sm:h-22 sm:px-8 sm:text-h2"
              onClick={onClose}
            >
              {item.label}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function ProductsMenu({
  reduceMotion,
  onBack,
  onClose,
}: {
  reduceMotion: boolean;
  onBack: () => void;
  onClose: () => void;
}) {
  const rowMotion = {
    variants: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
      show: { opacity: 1, y: 0 },
    },
    transition: { duration: reduceMotion ? 0 : 0.16, ease: navEase },
  } as const;

  return (
    <div>
      <div className="border-b border-border px-5 py-5 sm:px-8 sm:py-6">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md text-body text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          onClick={onBack}
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {siteCopy.mobileNav.backLabel}
        </button>
        <h2 className="mt-5 text-h2 font-semibold text-foreground">
          {siteCopy.mobileNav.productsLabel}
        </h2>
      </div>
      <motion.div
        className="divide-y divide-border"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: reduceMotion ? 0 : 0.03,
              delayChildren: reduceMotion ? 0 : 0.03,
            },
          },
        }}
      >
        {productNavItems.map((item) =>
          "disabled" in item && item.disabled ? (
            <motion.div
              key={item.label}
              className="flex min-h-20 flex-col justify-center px-5 py-4 text-muted-foreground sm:min-h-24 sm:px-8 sm:py-5"
              aria-disabled="true"
              {...rowMotion}
            >
              <span className="text-h3 text-foreground">{item.label}</span>
              <span className="mt-2 text-body text-muted-foreground">
                {item.description}
              </span>
            </motion.div>
          ) : (
            <motion.div key={item.label} {...rowMotion}>
              <Link
                href={item.href}
                className="flex min-h-20 flex-col justify-center px-5 py-4 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 sm:min-h-24 sm:px-8 sm:py-5"
                onClick={onClose}
              >
                <span className="text-h3 text-foreground">{item.label}</span>
                <span className="mt-2 text-body text-muted-foreground">
                  {item.description}
                </span>
              </Link>
            </motion.div>
          ),
        )}
      </motion.div>
    </div>
  );
}
