import { Button } from "@/components/ui/button"
import { MarketingContainer } from "@/components/marketing/primitives/marketing-container"
import { MarketingSection } from "@/components/marketing/primitives/marketing-section"

export function CtaSection() {
  return (
    <MarketingSection
      spacing="none"
      className="dark bg-background text-foreground"
      aria-labelledby="cta-heading"
    >
      <MarketingContainer
        size="full"
        className="flex min-h-[52rem] flex-col items-center justify-center px-6 py-28 text-center sm:min-h-[50rem] sm:px-10 lg:min-h-[48rem] lg:py-32"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2
            id="cta-heading"
            className="mx-auto max-w-5xl text-balance text-[clamp(3.5rem,14vw,4.25rem)] font-bold leading-[1.08] text-foreground sm:text-[clamp(4.5rem,7vw,6.25rem)] lg:text-[clamp(4.75rem,5.5vw,6.25rem)]"
          >
            See How AI Understands Your Brand
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-balance text-[clamp(1.5rem,5.5vw,2rem)] leading-relaxed text-muted-foreground sm:mt-12 sm:text-h2">
            Run a free AEO audit and see where your brand is mentioned, cited,
            or missing in AI answers.
          </p>

          <div className="mx-auto mt-12 w-full max-w-[50rem] sm:mt-11">
            <form
              action="/audit"
              method="get"
              className="flex w-full items-center gap-3 sm:gap-4"
            >
              <label htmlFor="audit-url" className="sr-only">
                Website URL
              </label>
              <input
                id="audit-url"
                name="url"
                type="url"
                inputMode="url"
                placeholder="Enter your Website URL"
                className="h-16 min-w-0 flex-1 rounded-xl border border-border bg-background px-5 text-body-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 sm:h-15 sm:px-6 sm:text-h3"
              />
              <Button
                type="submit"
                className="h-15 rounded-xl px-7 text-h3 font-normal sm:h-15 sm:px-9"
              >
                <span className="hidden sm:inline">Start Free Audit</span>
                <span className="sm:hidden">Audit</span>
              </Button>
            </form>

            <div className="pointer-events-none mx-auto mt-6 flex w-full max-w-[37rem] items-start justify-center gap-1 text-foreground sm:mt-7 sm:translate-x-16 sm:justify-start">
              <svg
                width="129"
                height="89"
                viewBox="0 0 129 89"
                fill="none"
                className="h-auto w-28 shrink-0 -translate-y-1 sm:w-36"
                aria-hidden="true"
              >
                <path
                  d="M125.5 84C81.5 91.5 42.5 60.5 35.5 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M34.5 8C43.5 17 53.5 23 65 25.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M34.5 8C36.5 22.5 33.5 35 27.5 46"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <p className="pt-10 text-left font-serif text-[1.6rem] italic leading-tight text-foreground sm:pt-14 sm:text-[1.55rem]">
                No Signup Required
                <br className="sm:hidden" /> Enjoy!!!!!
              </p>
            </div>
          </div>
        </div>
      </MarketingContainer>
    </MarketingSection>
  )
}
