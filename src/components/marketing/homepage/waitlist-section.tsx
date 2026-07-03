import { Button } from "@/components/ui/button"
import { MarketingContainer } from "@/components/marketing/primitives/marketing-container"
import { MarketingSection } from "@/components/marketing/primitives/marketing-section"

export function WaitlistSection() {
  return (
    <MarketingSection
      id="waitlist"
      spacing="none"
      className="dark bg-background text-foreground"
      aria-labelledby="waitlist-heading"
    >
      <MarketingContainer
        size="full"
        className="flex min-h-[38rem] flex-col items-center justify-center px-6 py-24 text-center sm:min-h-[49rem] sm:px-10 lg:min-h-[38rem] lg:py-28"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2
            id="waitlist-heading"
            className="text-balance text-[clamp(4.25rem,16vw,5.75rem)] font-bold leading-[1.08] text-foreground sm:text-[clamp(4.75rem,8vw,6.25rem)] lg:text-[clamp(4.5rem,5vw,5.5rem)]"
          >
            Join the Waitlist
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-balance text-[1.7rem] leading-relaxed text-muted-foreground sm:text-h2 lg:mt-7 lg:text-[1.45rem]">
            Be among the first to access Marrai.
          </p>

          <form className="mx-auto mt-12 flex w-full max-w-[51rem] items-center gap-3 sm:mt-16 sm:gap-4 lg:mt-14">
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              placeholder="Enter your Email"
              className="h-16 min-w-0 flex-1 rounded-xl border border-border bg-background px-5 text-body-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 sm:h-16 sm:px-6 sm:text-h3"
            />
            <Button
              type="submit"
              className="h-16 rounded-xl px-8 text-h3 font-normal sm:px-9"
            >
              <span className="hidden sm:inline">Join the Waitlist</span>
              <span className="sm:hidden">Join</span>
            </Button>
          </form>
        </div>
      </MarketingContainer>
    </MarketingSection>
  )
}
