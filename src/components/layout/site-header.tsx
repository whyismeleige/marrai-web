"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronDown, Menu, Package } from "lucide-react"

import { MobileNav } from "@/components/layout/mobile-nav"
import { Button } from "@/components/ui/button"
import { authNavItems, primaryNavItems, productNavItems } from "@/constants/nav"
import { brandAssets, siteCopy } from "@/constants/homepage-copy"
import { cn } from "@/lib/utils"

const navEase = [0.16, 1, 0.3, 1] as const

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [productsOpen, setProductsOpen] = React.useState(false)
  const reduceMotion = useReducedMotion()
  const headerRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (!productsOpen) {
      return
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setProductsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false)
      }
    }

    window.addEventListener("pointerdown", handlePointerDown)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [productsOpen])

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
                    productsOpen && "bg-muted"
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
                      productsOpen && "rotate-180"
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
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {authNavItems.map((item) => (
              <Button
                key={item.label}
                asChild
                variant={item.variant === "primary" ? "default" : "outline"}
                className={cn(
                  "h-11 rounded-lg px-6 text-body",
                  item.variant === "secondary" &&
                    "border-border bg-background text-foreground hover:bg-muted"
                )}
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
  )
}

function ProductsMegaMenu({ reduceMotion }: { reduceMotion: boolean }) {
  const featuredItem = productNavItems[0]
  const menuItems = productNavItems.slice(1)

  return (
    <motion.div
      id="products-menu"
      className="absolute left-1/2 top-full hidden w-[min(68rem,calc(100vw-4rem))] -translate-x-1/2 pt-4 lg:block"
      initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
      transition={{ duration: reduceMotion ? 0 : 0.18, ease: navEase }}
    >
      <div className="grid gap-10 rounded-lg border border-border bg-card p-8 text-card-foreground shadow-xl lg:grid-cols-[19rem_1fr]">
        <Link
          href={featuredItem.href}
          className="overflow-hidden rounded-lg border border-border bg-background transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <div className="flex aspect-[1.25] items-center justify-center bg-foreground text-background">
            <Package className="size-16" aria-hidden="true" />
          </div>
          <div className="p-6">
            <h3 className="text-h3 font-semibold text-foreground">
              {featuredItem.label}
            </h3>
            <p className="mt-3 text-body text-muted-foreground">
              {featuredItem.description}
            </p>
          </div>
        </Link>

        <div>
          <p className="text-label font-semibold uppercase text-muted-foreground">
            Products
          </p>
          <div className="mt-8 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {menuItems.map((item) =>
              "disabled" in item && item.disabled ? (
                <div key={item.label} className="group">
                  <ProductIcon />
                  <h3 className="mt-6 text-h3 font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-body text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group block rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <ProductIcon />
                  <h3 className="mt-6 text-h3 font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-body text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProductIcon() {
  return (
    <span className="inline-flex size-8 items-center justify-center text-foreground">
      <Package className="size-6" aria-hidden="true" />
    </span>
  )
}
