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
        className="px-5 py-20 sm:px-12 sm:py-28 lg:py-28"
      >
        <div className="max-w-5xl">
          <h2
            id="faq-heading"
            className="max-w-4xl text-balance text-[clamp(2.75rem,11vw,4rem)] font-bold leading-[1.08] text-foreground sm:text-[clamp(4rem,6vw,5rem)] lg:text-display"
          >
            {faqSectionCopy.heading}
          </h2>
          <p className="mt-6 max-w-5xl text-balance text-body leading-relaxed text-muted-foreground sm:mt-8 sm:text-body-lg lg:text-[1.2rem]">
            {faqSectionCopy.description}
          </p>
        </div>

        <Accordion
          type="single"
          defaultValue={faqItems[0]?.id}
          collapsible
          className="mt-14 w-full sm:mt-20 lg:mt-18"
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-0">
              <AccordionTrigger className="py-4 text-body-lg leading-snug sm:py-5 sm:text-h3 lg:text-h3">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-4xl pr-8 text-body sm:text-body-lg lg:text-body">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14 border-t border-border pt-12 sm:mt-20 sm:pt-16 lg:mt-18">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h3 className="text-[2rem] font-bold leading-tight text-foreground sm:text-[2.4rem] lg:text-h2">
                {faqSectionCopy.support.heading}
              </h3>
              <p className="mt-5 max-w-4xl text-body leading-relaxed text-muted-foreground sm:mt-7 sm:text-body-lg lg:text-body">
                {faqSectionCopy.support.description}
              </p>
            </div>

            <Link
              href={faqSectionCopy.support.href}
              className="group inline-flex w-fit items-center gap-3 text-body-lg leading-none text-primary underline underline-offset-4 transition-colors hover:text-primary/80 focus-visible:ring-3 focus-visible:ring-ring/30 sm:text-h3"
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
