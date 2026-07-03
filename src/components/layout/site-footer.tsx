"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { brandAssets } from "@/constants/homepage-copy";

const footerEase = [0.16, 1, 0.3, 1] as const;

const footerNavLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Login",
    href: "/login",
  },
] as const;

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/marrai",
  },
  {
    label: "Twitter",
    href: "https://x.com/marrai",
  },
] as const;

const legalLinks = [
  {
    label: "Terms & Conditions",
    href: "/terms",
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
] as const;

export function SiteFooter() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <footer className="dark overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex min-h-[42rem] w-full max-w-7xl flex-col px-5 pb-6 pt-20 sm:min-h-[56rem] sm:px-12 sm:pt-32 lg:min-h-[48rem] lg:px-8 lg:pb-10 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: footerEase,
          }}
          className="grid gap-12 lg:grid-cols-[1fr_28rem] lg:gap-24"
        >
          <div>
            <h2 className="text-h2 font-semibold text-foreground sm:text-h1 lg:text-display">
              Talk to Us
            </h2>
            <div className="mt-8 text-body text-foreground sm:mt-12 sm:text-body-lg">
              <p>Get support:</p>
              <a
                href="mailto:support@marrai.tech"
                className="mt-3 inline-block rounded-sm underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                support@marrai.tech
              </a>
            </div>

            <div className="mt-14 max-w-xl sm:mt-20 lg:mt-24">
              <p className="text-body text-foreground sm:text-body-lg">
                Join Our Waitlist.
              </p>
              <form className="mt-8 flex items-end border-b border-border sm:mt-10">
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  placeholder="EMAIL*"
                  className="min-w-0 flex-1 bg-transparent py-3 text-body uppercase text-foreground placeholder:text-muted-foreground/45 focus:outline-none"
                />
                <motion.button
                  type="submit"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  aria-label="Join waitlist"
                  whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  <ArrowRight className="size-5" aria-hidden="true" />
                </motion.button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[10rem_1fr] lg:gap-x-20 lg:gap-y-24">
            <nav aria-label="Footer" className="space-y-5">
              {footerNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-sm text-body text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:text-body-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <nav aria-label="Social" className="space-y-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 rounded-sm text-body text-foreground underline underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:text-body-lg"
                >
                  {link.label}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>

            <address className="not-italic text-body leading-7 text-foreground sm:text-body-lg sm:leading-8">
              Hyderabad
              <br />
              India, Asia
            </address>

            <nav aria-label="Legal" className="space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-sm text-body text-foreground underline underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:text-body-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
        <div className="mt-auto pt-14 sm:pt-24 lg:pt-20">
          <motion.div
            initial={{
              opacity: shouldReduceMotion ? 1 : 0.45,
              y: shouldReduceMotion ? 0 : "42%",
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.12,
              duration: shouldReduceMotion ? 0 : 0.9,
              ease: footerEase,
            }}
            className="w-full overflow-hidden"
            aria-label="marrai"
          >
            <Image
              src={brandAssets.wordMarkLight}
              alt="marrai"
              width={1600}
              height={360}
              className="block h-auto w-full select-none"
              priority
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
