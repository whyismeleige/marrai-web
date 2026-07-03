import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

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
] as const

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/marrai",
  },
  {
    label: "Twitter",
    href: "https://x.com/marrai",
  },
] as const

const legalLinks = [
  {
    label: "Terms & Conditions",
    href: "/terms",
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
] as const

export function SiteFooter() {
  return (
    <footer className="dark overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex min-h-[48rem] w-full max-w-7xl flex-col px-7 pb-8 pt-28 sm:min-h-[58rem] sm:px-12 sm:pt-36 lg:min-h-[50rem] lg:px-8 lg:pb-10 lg:pt-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_28rem] lg:gap-24">
          <div>
            <h2 className="text-h1 font-semibold text-foreground sm:text-display">
              Talk to Us
            </h2>
            <div className="mt-12 text-body-lg text-foreground sm:mt-14">
              <p>Get support:</p>
              <a
                href="mailto:support@marrai.tech"
                className="mt-3 inline-block rounded-sm underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                support@marrai.tech
              </a>
            </div>

            <div className="mt-20 max-w-xl sm:mt-24 lg:mt-28">
              <p className="text-body-lg text-foreground">Join Our Waitlist.</p>
              <form className="mt-12 flex items-end border-b border-border">
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
                <button
                  type="submit"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  aria-label="Join waitlist"
                >
                  <ArrowRight className="size-5" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>

          <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-[10rem_1fr] lg:gap-x-20 lg:gap-y-28">
            <nav aria-label="Footer" className="space-y-5">
              {footerNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-sm text-body-lg text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
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
                  className="group inline-flex items-center gap-1 rounded-sm text-body-lg text-foreground underline underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {link.label}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>

            <address className="not-italic text-body-lg leading-8 text-foreground">
              Hyderabad
              <br />
              India, Asia
            </address>

            <nav aria-label="Legal" className="space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-sm text-body-lg text-foreground underline underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-auto pt-20 sm:pt-28 lg:pt-24">
          <p
            className="font-brand text-[clamp(6.25rem,29vw,23rem)] font- leading-[0.78] tracking-normal text-foreground"
            aria-label="marrai"
          >
            marrai
          </p>
        </div>
      </div>
    </footer>
  )
}

