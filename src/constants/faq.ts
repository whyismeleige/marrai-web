export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqSectionCopy = {
  heading: "Frequently Asked Questions",
  description:
    "Find out all the essential details about our platform and how it can serve your needs.",
  support: {
    heading: "Still have questions?",
    description:
      "We're here to provide clarity and assist with any queries you may have.",
    linkLabel: "Contact Support",
    href: "#cta",
  },
} as const

export const faqItems = [
  {
    id: "faq-1",
    question: "Placeholder FAQ question goes here?",
    answer:
      "Placeholder FAQ answer text goes here. This should be a short paragraph explaining the answer.",
  },
  {
    id: "faq-2",
    question: "Placeholder FAQ question goes here?",
    answer: "Placeholder FAQ answer text goes here.",
  },
  {
    id: "faq-3",
    question: "Placeholder FAQ question goes here?",
    answer: "Placeholder FAQ answer text goes here.",
  },
  {
    id: "faq-4",
    question: "Placeholder FAQ question goes here?",
    answer: "Placeholder FAQ answer text goes here.",
  },
  {
    id: "faq-5",
    question: "Placeholder FAQ question goes here?",
    answer: "Placeholder FAQ answer text goes here.",
  },
  {
    id: "faq-6",
    question: "Placeholder FAQ question goes here?",
    answer: "Placeholder FAQ answer text goes here.",
  },
  {
    id: "faq-7",
    question: "Placeholder FAQ question goes here?",
    answer: "Placeholder FAQ answer text goes here.",
  },
] as const satisfies readonly FaqItem[]
