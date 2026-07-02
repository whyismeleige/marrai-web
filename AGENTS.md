
# AGENTS.md

# Marrai Web — Codex Project Instructions

This repository is the frontend website for Marrai.

Marrai is an AI Visibility Intelligence platform. The current primary goal is to build a polished, responsive, production-ready landing page from the provided Figma handoff.

The design source of truth is the exported Figma handoff under:


docs/design-handoff/

Codex must treat the Figma screenshots, section markdown files, typography docs, token JSON files, and brand assets as the implementation contract.

Do not redesign the website. Translate the provided design into clean Next.js, TypeScript, Tailwind CSS, and shadcn/ui code.

---

# 1. Current Repository Structure

This project uses the `src/` directory.

Use:

src/app/
src/components/
src/lib/
src/constants/

Do not create top-level folders like:

app/
components/
lib/

unless explicitly instructed.

Current important paths:

src/app/layout.tsx
src/app/page.tsx
src/app/globals.css

src/components/ui/button.tsx
src/components/layout/
src/components/marketing/

docs/design-handoff/
public/

All app code must go inside `src/`.

---

# 2. Primary Objective

The current objective is only:

Build the Marrai landing page properly, section by section.

Do not build:

dashboards
auth
pricing pages
blog CMS
backend integrations
audit API logic
user accounts
analytics setup
PostHog
Resend email flows
tests

unless explicitly instructed.

The landing page is the priority.

---

# 3. Approved Tech Stack

Use this stack:

Framework: Next.js App Router
Language: TypeScript
Styling: Tailwind CSS
UI: shadcn/ui + custom Marrai components
Animation: Framer Motion
Charts: Recharts
Forms: React Hook Form + Zod
Server State: TanStack Query
CMS: Sanity for blogging
Package Manager: pnpm
Deployment: Vercel
Analytics: Vercel Web Analytics now, PostHog later
Testing: Playwright + Vitest later
Formatting: ESLint + Prettier
Email Service: Resend

Important:

Not every approved tool should be installed immediately.

Only install a package when the specific implementation phase needs it.

For the current static landing page, prefer existing dependencies first.

---

# 4. Package Manager Rules

Use:

pnpm

Do not use:

npm
yarn
bun

Correct commands:

pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm format

When adding dependencies:

pnpm add package-name

For dev dependencies:

pnpm add -D package-name

Do not add dependencies without explaining why they are required.

Do not modify `pnpm-lock.yaml` unless dependencies actually changed.

---

# 5. Git Rules

Codex must stay on the current branch.

Strictly forbidden unless explicitly instructed:

create branch
switch branch
checkout branch
delete branch
merge
rebase
reset hard
force push
push to remote
commit

Codex can inspect git state with:

git branch --show-current
git status -sb
git diff --stat
git diff

Codex must not push.

Codex must not assume remote access.

The user will commit manually unless explicitly asking Codex to commit.

Every implementation task must be atomic.

Preferred commit style for the user:

docs: add marrai handoff rules
chore(theme): map figma tokens to shadcn variables
feat(layout): add navbar and footer
feat(marketing): add hero section
feat(marketing): add ai discovery section
feat(marketing): add scroll feature section
feat(marketing): add tracking feature section
feat(marketing): add cta section
feat(marketing): add faq section
feat(marketing): add waitlist section
fix(marketing): polish responsive layout
feat(marketing): add landing page animations
chore(seo): add landing page metadata

---

# 6. Comments and Documentation Rules

The user wants logical changes to be clear and reviewable.

Use atomic commits and clear summaries.

Add code comments only when they explain why something exists.

Do not add obvious comments like:

// This renders a div

Good comment example:

// Keep this wrapper non-interactive so the animated visual does not trap focus.

Bad comment example:

// Button component

Do not over-comment the code.

---

# 7. Design Source of Truth

Use these files as the design contract:

docs/design-handoff/marketing/README.md

docs/design-handoff/marketing/navbar/section.md
docs/design-handoff/marketing/hero-section/section.md
docs/design-handoff/marketing/ai-discovery-section/section.md
docs/design-handoff/marketing/scroll-feature/section.md
docs/design-handoff/marketing/tracking-feature-section/section.md
docs/design-handoff/marketing/cta-section/section.md
docs/design-handoff/marketing/faq-section/section.md
docs/design-handoff/marketing/waitlist/section.md
docs/design-handoff/marketing/footer-section/section.md

docs/design-handoff/tokens/light-mode-tokens.json
docs/design-handoff/tokens/dark-mode-tokens.json
docs/design-handoff/tokens/token-map.md

docs/design-handoff/typography/typography.md

docs/design-handoff/brand-assets/
docs/design-handoff/ai-platform-icons/

Before implementing any section, read:

1. AGENTS.md
2. docs/design-handoff/marketing/README.md
3. the relevant section.md
4. the relevant desktop/tablet/mobile screenshots
5. typography.md
6. token-map.md

Do not guess when the handoff provides an answer.

If the design handoff is ambiguous, report the ambiguity instead of inventing a new design direction.

---

# 8. Figma Screenshot Rules

The screenshots are references for implementation.

Do not use full screenshots as final website images.

Build real React/Tailwind components.

Each homepage section except navbar has:

desktop.png
tablet.png
mobile.png
section.md

Navbar has:

desktop.png
tablet-closed.png
tablet-open.png
mobile-closed.png
mobile-open.png
section.md

Use the screenshots to match:

layout
spacing
alignment
visual hierarchy
responsive behavior
component shape
section rhythm

Do not copy the screenshot as a background image.

---

# 9. Homepage Section Order

The landing page should be implemented in this order:

1. Navbar
2. Hero Section
3. AI Discovery Section
4. Scroll Feature Section
5. Tracking Feature Section
6. CTA Section
7. FAQ Section
8. Waitlist Section
9. Footer Section

Do not implement all sections in one task.

Build one section at a time.

---

# 10. Component Architecture

Use this intended structure:

src/components/layout/
  site-header.tsx
  mobile-nav.tsx
  site-footer.tsx

src/components/marketing/primitives/
  marketing-container.tsx
  marketing-section.tsx
  section-heading.tsx

src/components/marketing/homepage/
  hero-section.tsx
  ai-discovery-section.tsx
  scroll-feature-section.tsx
  tracking-feature-section.tsx
  cta-section.tsx
  faq-section.tsx
  waitlist-section.tsx

src/components/marketing/visuals/
  hero-visual.tsx
  ai-discovery-visual.tsx
  scroll-feature-visual.tsx
  tracking-feature-visual.tsx

src/constants/
  nav.ts
  homepage-copy.ts
  platforms.ts
  faq.ts

`src/app/page.tsx` must remain a composition file.

Good:

import { HeroSection } from "@/components/marketing/homepage/hero-section"
import { AiDiscoverySection } from "@/components/marketing/homepage/ai-discovery-section"
import { ScrollFeatureSection } from "@/components/marketing/homepage/scroll-feature-section"
import { TrackingFeatureSection } from "@/components/marketing/homepage/tracking-feature-section"
import { CtaSection } from "@/components/marketing/homepage/cta-section"
import { FaqSection } from "@/components/marketing/homepage/faq-section"
import { WaitlistSection } from "@/components/marketing/homepage/waitlist-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AiDiscoverySection />
      <ScrollFeatureSection />
      <TrackingFeatureSection />
      <CtaSection />
      <FaqSection />
      <WaitlistSection />
    </>
  )
}


---

# 11. Component Rules

Use named exports.

Good:

export function HeroSection() {
  return <section>...</section>
}

Avoid default exports for shared components unless the existing codebase already uses them consistently.

Keep files reasonably small.

Preferred limits:

Simple component: under 150 lines
Complex section: under 250 lines
Visual component: under 250 lines

If a file becomes too large, split it into a visual component, primitive, or data constant.

Use Server Components by default.

Only add `"use client"` when required for:

state
event handlers
effects
browser APIs
mobile menu interaction
accordion interaction
Framer Motion animation
form handling

Do not mark the entire page as client-side.

---

# 12. Styling Rules

Use Tailwind CSS.

Use shadcn-compatible semantic variables from `src/app/globals.css`.

Do not hardcode colors inside components unless a task explicitly allows it.

Avoid:

<div className="bg-[#020817] text-[#ffffff]" />

Prefer:

<div className="bg-background text-foreground" />

Allowed semantic classes include:

bg-background
text-foreground
bg-card
text-card-foreground
text-muted-foreground
border-border
bg-primary
text-primary-foreground
ring-ring
bg-muted
bg-accent

Use `cn()` from:

src/lib/utils.ts

Do not introduce CSS modules.

Do not use styled-components.

Do not use inline styles unless required for dynamic SVG/CSS variables.

Do not create custom spacing tokens.

Use shadcn/ui defaults for primitive spacing where possible.

Use the Figma screenshots for page-level section spacing and padding.

---

# 13. Theme Token Rules

Token source files:

docs/design-handoff/tokens/light-mode-tokens.json
docs/design-handoff/tokens/dark-mode-tokens.json
docs/design-handoff/tokens/token-map.md

Implementation target:

src/app/globals.css

Rules:

Map Figma color tokens to shadcn-compatible CSS variables.
Preserve shadcn variable names.
Support light and dark modes.
Do not create unnecessary custom tokens.
Do not hardcode Figma colors across components.

Use existing shadcn variable names where possible:

--background
--foreground
--card
--card-foreground
--popover
--popover-foreground
--primary
--primary-foreground
--secondary
--secondary-foreground
--muted
--muted-foreground
--accent
--accent-foreground
--destructive
--destructive-foreground
--border
--input
--ring
--radius

---

# 14. Typography Rules

Typography source:

docs/design-handoff/typography/typography.md

Use:

Inter for UI
Poppins for Marrai brand text / wordmark only

Do not add new fonts unless explicitly instructed.

Use documented styles:

Brand Text
Display Text
H1 Text
H2 Text
H3 Text
Body Large
Body
Small
Caption
Label
Code/Metric

Do not randomly choose text sizes.

If exact Figma font size is not possible, use the closest Tailwind responsive class while preserving the visual hierarchy.

---

# 15. Brand Asset Rules

Design reference assets live in:

docs/design-handoff/brand-assets/

Runtime website assets should live in:

public/brand/

If `public/brand/` is missing, create it and copy required brand assets from the handoff folder.

Use brand assets from:

public/brand/logo-primary-light.svg
public/brand/logo-primary-dark.svg
public/brand/icon-mark-light.svg
public/brand/icon-mark-dark.svg

Do not recreate the logo with plain text unless explicitly required.

Do not modify SVG contents unless asked.

Do not fetch brand assets from the internet.

---

# 16. AI Platform Icon Rules

Design reference icons live in:

docs/design-handoff/ai-platform-icons/

Runtime website icons currently live in:

public/ai-platform-icons/

Use runtime paths like:

/ai-platform-icons/chatgpt.svg
/ai-platform-icons/claude.svg
/ai-platform-icons/perplexity.svg
/ai-platform-icons/gemini.svg
/ai-platform-icons/grok.svg
/ai-platform-icons/microsoft-copilot.svg
/ai-platform-icons/google.svg
/ai-platform-icons/deepseek.svg

Do not fetch icons from the internet.

Do not use external CDNs.

Do not install another icon package for brand logos.

Lucide React may be used for generic UI icons only.

---

# 17. Animation Rules

Animation information is included inside each section’s `section.md`.

Do not implement animations during the first static layout pass unless the task explicitly asks for animation.

Correct order:

1. Static layout
2. Responsive polish
3. Animation pass

When adding animation:

Use Framer Motion only.
Do not add another animation library.
Keep motion calm and premium.
Respect prefers-reduced-motion.
Reduce or disable complex motion on mobile when appropriate.
Do not animate everything.
Do not break layout to add animation.

Framer Motion should only be installed when the animation phase begins or when the task explicitly requires it.

If a component needs Framer Motion, isolate the client component instead of marking the whole page as client-side.

---

# 18. Recharts Rules

Recharts is approved but should not be installed or used unless a chart needs real data or the task explicitly asks for it.

For static landing page visuals, prefer SVG/CSS/HTML visuals first.

Do not install Recharts just to draw a static decorative graphic.

---

# 19. Forms Rules

React Hook Form and Zod are approved.

Do not install or use them until form behavior becomes real.

For the initial landing page:

Waitlist form can be visually implemented.
Submission can be disabled, mocked, or prevented by default depending on the task.
Do not connect to backend.
Do not send emails.
Do not integrate Resend.
Do not store user data.

When form logic is requested later:

Use React Hook Form + Zod.
Show accessible validation errors.
Do not expose secrets.
Use environment variables.

---

# 20. Backend and API Rules

Do not connect the landing page to backend APIs unless explicitly instructed.

Do not hardcode API URLs.

Do not add TanStack Query unless backend/server-state work begins.

Do not add Resend unless email functionality begins.

Do not expose secrets.

Do not create `.env.local` in commits.

If environment variables are needed later, update `.env.example`.

---

# 21. Responsive Rules

Support these widths:

Desktop: 1440px
Laptop: 1280px
Tablet: 768px
Mobile: 390px
Small mobile: 360px

For every section, check:

no horizontal overflow
headings wrap correctly
buttons remain tappable
visuals scale properly
section spacing feels close to Figma
mobile layout is not cramped
tablet layout is not awkward

Use Tailwind breakpoints:

default = mobile
sm
md
lg
xl
2xl

Build mobile-first where practical.

---

# 22. Accessibility Rules

All UI must be accessible by default.

Rules:

Use semantic HTML.
Use real buttons for actions.
Use Next Link or anchor tags for navigation.
Inputs must have labels.
Decorative images/SVGs should be aria-hidden when appropriate.
Interactive icons need accessible labels.
Do not remove focus states.
Mobile menu must be keyboard usable.
FAQ accordion must be keyboard usable.
Keep heading order sensible.

Do not sacrifice accessibility for visual matching.

---

# 23. SEO and Metadata Rules

Use Next.js metadata APIs.

Landing page metadata should eventually include:

Title: Marrai — AI Visibility Intelligence

Description:
Marrai helps brands understand where they are mentioned, cited, recommended, or missing across AI answer engines.

Do not add fake OG images.

Use existing public assets only.

SEO comes after the landing page sections are implemented.

---

# 24. Dependency Rules

Do not install all planned stack dependencies at once.

Current phase priority is static landing page implementation.

Allowed to use existing installed dependencies:

Next
React
TypeScript
Tailwind
shadcn/ui
Radix
Lucide
tw-animate-css

Install later only when needed:

framer-motion: animation pass
react-hook-form + zod: real form logic
@tanstack/react-query: backend/server-state work
recharts: real charts
sanity: blog/CMS work
@vercel/analytics: analytics setup
posthog-js: later product analytics
vitest/playwright: testing phase
resend: email phase
prettier: formatting setup if missing

Do not add packages without task approval.

---

# 25. Quality Checks

Before finishing any coding task, run available checks:

pnpm lint
pnpm typecheck
pnpm build

If a script does not exist, report that clearly.

Do not claim checks passed unless they actually ran.

If checks fail:

Fix failures within task scope.
If failure is outside task scope, report it clearly.

Do not disable linting or TypeScript to make checks pass.

---

# 26. File Safety Rules

Do not modify unrelated files.

Do not delete files unless the task requires it.

Do not reformat the whole repo.

Do not touch `pnpm-lock.yaml` unless dependencies changed.

Do not commit `node_modules`.

Make sure `.gitignore` excludes:

node_modules
.next
.env
.env.local
.env*.local
.vercel
dist
out

---

# 27. Landing Page Acceptance Checklist

The landing page is acceptable only when:

[ ] Navbar matches desktop/tablet/mobile open and closed references
[ ] Hero section matches desktop/tablet/mobile references
[ ] AI Discovery section matches references
[ ] Scroll Feature section matches references
[ ] Tracking Feature section matches references
[ ] CTA section matches references
[ ] FAQ section matches references
[ ] Waitlist section matches references
[ ] Footer section matches references
[ ] Runtime assets load from public/
[ ] No section is implemented as a screenshot background
[ ] No hardcoded colors scattered through components
[ ] No unnecessary dependencies added
[ ] src/app/page.tsx remains composition-only
[ ] Mobile has no horizontal overflow
[ ] Tablet layout is clean
[ ] Desktop layout feels close to Figma
[ ] pnpm lint passes
[ ] pnpm typecheck passes
[ ] pnpm build passes

---

# 28. Task Execution Protocol

For every task, Codex must follow this process:

## Step 1: Read

Read:

AGENTS.md
relevant section.md
relevant screenshots
typography.md
token-map.md
existing related source files

## Step 2: Inspect

Inspect current implementation before editing.

Do not assume file structure.

## Step 3: Plan

Give a short plan before editing when the task is non-trivial.

## Step 4: Implement

Edit only allowed files.

## Step 5: Verify

Run:

pnpm lint
pnpm typecheck
pnpm build

## Step 6: Report

End every response with:

Summary:
- ...

Files changed:
- ...

Checks:
- ...

Assumptions:
- ...

Remaining issues:
- ...

---

# 29. Required Response Format

Codex should respond with:

Plan:
- ...

Implementation:
- ...

Checks:
- ...

Summary:
- ...

Files changed:
- ...

Assumptions:
- ...

Remaining issues:
- ...

Keep responses direct.

Do not write long essays unless explicitly asked.

---

# 30. Strict Do Not List

Do not:

redesign the website
build all sections in one task
create top-level app/components/lib folders
use full-page screenshots as the website
hardcode colors across components
invent copy
invent product features
add random dependencies
install the entire future stack immediately
connect backend APIs
add auth
add dashboards
add pricing pages
add analytics early
add Resend early
add Sanity early
add tests early
change branches
push
commit unless asked
remove TypeScript
disable linting
ignore build errors
modify unrelated files
leave console logs
commit node_modules
commit .env files

---

# 31. First Implementation Order

Use this exact order:

0. Validate handoff and repo state
1. Check .gitignore and scripts
2. Map Figma tokens into src/app/globals.css
3. Copy brand assets to public/brand if missing
4. Create marketing primitives
5. Implement navbar static behavior
6. Implement footer static layout
7. Implement hero section static layout
8. Implement AI Discovery section static layout
9. Implement Scroll Feature section static layout
10. Implement Tracking Feature section static layout
11. Implement CTA section static layout
12. Implement FAQ section static layout
13. Implement Waitlist section static layout
14. Full responsive polish
15. Animation pass section by section
16. SEO metadata
17. Final QA

Do not skip directly to animations.

---

# 32. Final Rule

When uncertain, choose the option that is:

closer to Figma
simpler
more maintainable
more accessible
more responsive
easier to review
less dependent on new packages

Do not be clever.

Build Marrai carefully, one section at a time.
