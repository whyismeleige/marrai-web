export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqSectionCopy = {
  heading: "Frequently Asked Questions",
  description:
    "Everything you need to know about Marrai, AI visibility, and how brands can grow across AI search platforms.",
  support: {
    heading: "Still have questions?",
    description:
      "Need help understanding your AI visibility or how Marrai fits your brand?",
    linkLabel: "Contact Support",
    href: "#cta",
  },
} as const

export const faqItems = [
  {
    id: "faq-1",
    question: "What is Marrai?",
    answer:
      "Marrai helps brands understand, track, and improve how they appear across AI platforms like ChatGPT, Perplexity, Gemini, Claude, and other AI search experiences.",
  },
  {
    id: "faq-2",
    question: "What is AI visibility?",
    answer:
      "AI visibility is how often and how accurately your brand appears when people ask AI tools questions related to your industry, products, or competitors.",
  },
  {
    id: "faq-3",
    question: "How is Marrai different from traditional SEO tools?",
    answer:
      "Traditional SEO focuses on search engines and rankings. Marrai focuses on AI answers, citations, brand mentions, competitor visibility, and how AI platforms understand your brand.",
  },
  {
    id: "faq-4",
    question: "Which AI platforms does Marrai track?",
    answer:
      "Marrai is built to track visibility across major AI platforms including ChatGPT, Perplexity, Gemini, Claude, Copilot, Grok, DeepSeek, and more as the ecosystem evolves.",
  },
  {
    id: "faq-5",
    question: "Who is Marrai for?",
    answer:
      "Marrai is for founders, marketers, SEO teams, agencies, and brands that want to stay visible as users shift from traditional search to AI-powered discovery.",
  },
  {
    id: "faq-6",
    question: "What does an AI visibility audit show?",
    answer:
      "It shows where your brand appears, where competitors are mentioned instead, which sources AI tools cite, and what gaps are stopping your brand from being recommended.",
  },
  {
    id: "faq-7",
    question: "Can Marrai help improve my AI search presence?",
    answer:
      "Yes. Marrai helps identify content gaps, citation opportunities, competitor advantages, and optimization actions that can improve how AI platforms understand and mention your brand.",
  },
  {
    id: "faq-8",
    question: "Do I need technical knowledge to use Marrai?",
    answer:
      "No. Marrai is designed to make AI visibility simple, with clear reports, scores, insights, and recommended actions your team can understand and use.",
  },
  {
    id: "faq-9",
    question: "Is Marrai useful for early-stage startups?",
    answer:
      "Yes. Startups can use Marrai to understand how AI platforms describe their category, find early visibility opportunities, and build authority before competitors dominate AI answers.",
  },
  {
    id: "faq-10",
    question: "When will Marrai be available?",
    answer:
      "Marrai is currently being built. You can join the waitlist to get early access, product updates, and priority access to AI visibility audits.",
  },
] as const satisfies readonly FaqItem[]
