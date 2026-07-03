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
        className="flex min-h-[32rem] flex-col items-center justify-center px-5 py-20 text-center sm:min-h-[44rem] sm:px-10 lg:min-h-[34rem] lg:py-24"
      >
        <div className="mx-auto w-full max-w-4xl">
          <h2
            id="waitlist-heading"
            className="text-balance text-[clamp(3.25rem,13vw,5rem)] font-bold leading-[1.08] text-foreground sm:text-[clamp(4.75rem,8vw,6rem)] lg:text-[clamp(3.75rem,4.5vw,4.75rem)]"
          >
            Join the Waitlist
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-balance text-body leading-relaxed text-muted-foreground sm:mt-7 sm:text-body-lg lg:text-[1.2rem]">
            Be among the first to access Marrai.
          </p>

          <form className="mx-auto mt-10 flex w-full max-w-[51rem] items-center gap-2 sm:mt-14 sm:gap-4 lg:mt-12">
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
              className="h-11 min-w-0 flex-1 rounded-lg border border-border bg-background px-4 text-small text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 sm:h-14 sm:px-6 sm:text-body-lg"
            />
            <Button
              type="submit"
              className="h-11 rounded-lg px-5 text-small font-normal sm:h-14 sm:px-8 sm:text-body-lg"
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
