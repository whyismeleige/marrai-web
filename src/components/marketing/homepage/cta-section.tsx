import { Button } from "@/components/ui/button";
import { MarketingContainer } from "@/components/marketing/primitives/marketing-container";
import { MarketingSection } from "@/components/marketing/primitives/marketing-section";

export function CtaSection() {
  return (
    <MarketingSection
      spacing="none"
      className="dark bg-background text-foreground"
      aria-labelledby="cta-heading"
    >
      <MarketingContainer
        size="full"
        className="flex min-h-[38rem] flex-col items-center justify-center px-5 py-20 text-center sm:min-h-[48rem] sm:px-10 sm:py-28 lg:min-h-[44rem] lg:py-28"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2
            id="cta-heading"
            className="mx-auto max-w-5xl text-balance text-[clamp(2.65rem,10.5vw,3.75rem)] font-bold leading-[1.08] text-foreground sm:text-[clamp(4rem,6.2vw,5.5rem)] lg:text-[clamp(3.75rem,4.6vw,5rem)]"
          >
            See How AI Understands Your Brand
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-balance text-body leading-relaxed text-muted-foreground sm:mt-8 sm:text-body-lg">
            Run a free AEO audit and see where your brand is mentioned, cited,
            or missing in AI answers.
          </p>

          <div className="mx-auto mt-8 w-full max-w-[50rem] sm:mt-10">
            <form
              action="/audit"
              method="get"
              className="flex w-full items-center gap-2 sm:gap-4"
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
                className="h-11 min-w-0 flex-1 rounded-lg border border-border bg-background px-4 text-small text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 sm:h-14 sm:px-6 sm:text-body-lg"
              />
              <Button
                type="submit"
                className="h-11 rounded-lg px-5 font-normal sm:h-14 sm:px-8 "
              >
                <span className="hidden sm:inline">Start Free Audit</span>
                <span className="sm:hidden">Audit</span>
              </Button>
            </form>

            <div className="pointer-events-none mx-auto mt-4 flex w-full max-w-[34rem] items-start justify-center gap-1 text-foreground sm:mt-6 sm:translate-x-12 sm:justify-start">
              <svg
                width="129"
                height="89"
                viewBox="0 0 129 89"
                fill="none"
                className="h-auto w-20 shrink-0 -translate-y-1 sm:w-32"
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
              <p className="pt-7 text-left font-serif text-[1.1rem] italic leading-tight text-foreground sm:pt-12 sm:text-[1.35rem]">
                No Signup Required
                <br className="sm:hidden" /> Enjoy!!!!!
              </p>
            </div>
          </div>
        </div>
      </MarketingContainer>
    </MarketingSection>
  );
}
