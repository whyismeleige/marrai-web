import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MarketingContainer } from "@/components/marketing/primitives/marketing-container"
import { MarketingSection } from "@/components/marketing/primitives/marketing-section"
import { faqItems, faqSectionCopy } from "@/constants/faq"

export function FaqSection() {
  return (
    <MarketingSection
      spacing="none"
      className="dark bg-background text-foreground"
      aria-labelledby="faq-heading"
    >
      <MarketingContainer
        size="wide"
        className="px-8 py-24 sm:px-12 sm:py-28 lg:py-32"
      >
        <div className="max-w-5xl">
          <h2
            id="faq-heading"
            className="max-w-4xl text-balance text-[clamp(3.25rem,12vw,4rem)] font-bold leading-[1.08] text-foreground sm:text-[clamp(4rem,6vw,5rem)] lg:text-display"
          >
            {faqSectionCopy.heading}
          </h2>
          <p className="mt-8 max-w-5xl text-balance text-[1.45rem] leading-relaxed text-muted-foreground sm:text-h2 lg:text-[1.45rem]">
            {faqSectionCopy.description}
          </p>
        </div>

        <Accordion
          type="single"
          defaultValue={faqItems[0]?.id}
          collapsible
          className="mt-20 w-full sm:mt-24 lg:mt-20"
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-0">
              <AccordionTrigger className="py-5 text-[1.65rem] leading-snug sm:py-6 sm:text-[1.75rem] lg:text-h3">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-4xl pr-10 text-[1.3rem] sm:text-[1.35rem] lg:text-body-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-20 border-t border-border pt-16 sm:mt-24 sm:pt-20 lg:mt-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h3 className="text-[2.4rem] font-bold leading-tight text-foreground sm:text-[2.5rem] lg:text-h2">
                {faqSectionCopy.support.heading}
              </h3>
              <p className="mt-8 max-w-4xl text-[1.45rem] leading-relaxed text-muted-foreground sm:text-h2 lg:text-body-lg">
                {faqSectionCopy.support.description}
              </p>
            </div>

            <Link
              href={faqSectionCopy.support.href}
              className="group inline-flex w-fit items-center gap-3 text-[1.45rem] leading-none text-primary underline underline-offset-4 transition-colors hover:text-primary/80 focus-visible:ring-3 focus-visible:ring-ring/30 sm:text-h3"
            >
              {faqSectionCopy.support.linkLabel}
              <ChevronRightIcon
                className="size-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </MarketingContainer>
    </MarketingSection>
  )
}
