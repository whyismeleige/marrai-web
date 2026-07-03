"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { authNavItems, primaryNavItems, productNavItems } from "@/constants/nav"
import { brandAssets, siteCopy } from "@/constants/homepage-copy"
import { cn } from "@/lib/utils"

type MobileNavProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type MobileMenuState = "root" | "products"

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const [menuState, setMenuState] = React.useState<MobileMenuState>("root")
  const closeButtonRef = React.useRef<HTMLButtonElement>(null)
  const mobileAuthItems = [
    authNavItems.find((item) => item.label === siteCopy.auth.login),
    authNavItems.find((item) => item.label === siteCopy.auth.signUp),
  ].filter((item): item is (typeof authNavItems)[number] => Boolean(item))
  const closeMenu = React.useCallback(() => {
    setMenuState("root")
    onOpenChange(false)
  }, [onOpenChange])

  React.useEffect(() => {
    if (!open) {
      return
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [closeMenu, open])

  if (!open) {
    return null
  }

  return (
    <div
      className="dark fixed inset-0 z-50 flex min-h-dvh flex-col bg-background text-foreground lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="flex h-24 shrink-0 items-center justify-between border-b border-border px-7 sm:h-28 sm:px-10">
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
            className="size-14 sm:size-16"
          />
        </Link>
        <button
          ref={closeButtonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <X className="size-7" aria-hidden="true" />
        </button>
      </div>

      <nav className="min-h-0 flex-1 overflow-y-auto" aria-label="Mobile">
        {menuState === "root" ? (
          <RootMenu
            onClose={closeMenu}
            onProductsClick={() => setMenuState("products")}
          />
        ) : (
          <ProductsMenu
            onBack={() => setMenuState("root")}
            onClose={closeMenu}
          />
        )}
      </nav>

      <div className="grid shrink-0 gap-3 px-7 pb-7 sm:px-10 sm:pb-10">
        {mobileAuthItems.map((item) => {
          const isPrimary = item.label === siteCopy.auth.signUp

          return (
          <Button
            key={item.label}
            asChild
            variant={isPrimary ? "default" : "outline"}
            className={cn(
              "h-14 rounded-lg text-base",
              !isPrimary &&
                "border-border bg-background text-foreground hover:bg-muted"
            )}
          >
            <Link href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          </Button>
          )
        })}
      </div>
    </div>
  )
}

function RootMenu({
  onClose,
  onProductsClick,
}: {
  onClose: () => void
  onProductsClick: () => void
}) {
  return (
    <div className="divide-y divide-border">
      {primaryNavItems.map((item) => {
        if ("menuId" in item && item.menuId === "products") {
          return (
            <button
              key={item.label}
              type="button"
              className="flex h-24 w-full items-center justify-between px-7 text-left text-h2 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 sm:h-28 sm:px-10"
              onClick={onProductsClick}
            >
              <span>{item.label}</span>
              <ChevronRight
                className="size-6 text-secondary-foreground"
                aria-hidden="true"
              />
            </button>
          )
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex h-24 items-center px-7 text-h2 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 sm:h-28 sm:px-10"
            onClick={onClose}
          >
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}

function ProductsMenu({
  onBack,
  onClose,
}: {
  onBack: () => void
  onClose: () => void
}) {
  return (
    <div>
      <div className="border-b border-border px-7 py-6 sm:px-10">
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
      <div className="divide-y divide-border">
        {productNavItems.map((item) =>
          "disabled" in item && item.disabled ? (
            <div
              key={item.label}
              className="flex min-h-24 flex-col justify-center px-7 py-5 text-muted-foreground sm:px-10"
              aria-disabled="true"
            >
              <span className="text-h3 text-foreground">{item.label}</span>
              <span className="mt-2 text-body text-muted-foreground">
                {item.description}
              </span>
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="flex min-h-24 flex-col justify-center px-7 py-5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 sm:px-10"
              onClick={onClose}
            >
              <span className="text-h3 text-foreground">{item.label}</span>
              <span className="mt-2 text-body text-muted-foreground">
                {item.description}
              </span>
            </Link>
          )
        )}
      </div>
    </div>
  )
}
