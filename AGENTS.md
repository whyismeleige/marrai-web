# Marrai Frontend Agent Instructions

## Project Intent

Marrai is a serious AI visibility SaaS. This frontend is not a throwaway prototype, demo, or vibe-coded landing page. It is the production foundation for the public website, blog platform, free AEO audit tool, and future paid SaaS dashboard.

Build for long-term maintainability, team collaboration, performance, accessibility, and visual quality.

This project should feel like the foundation of a skyscraper, not a weekend experiment.

---

## Product Context

Marrai helps brands understand and improve how AI answer engines understand, cite, and recommend them.

Current product surfaces:

1. Landing page
2. Blog/content platform
3. Free AEO audit tool
4. Audit report UI

Future product surfaces:

1. Citation Intelligence
2. AI visibility history
3. AI paid ads intelligence
4. Agentic commerce intelligence
5. Logged-in SaaS dashboard

---

## Frontend Stack

Use the current stack unless explicitly instructed otherwise.

* Next.js App Router
* TypeScript
* React
* Tailwind CSS v4
* shadcn/ui
* Radix primitives through shadcn/ui
* Framer Motion only when useful
* Recharts for report charts
* Zod for validation
* TanStack Query for audit polling/server state
* Sanity later for CMS
* Vercel for deployment
* pnpm as package manager

Do not introduce Redux unless there is a proven product need. For the current audit flow and blog, TanStack Query, URL state, and local component state are enough.

---

## Required Commands

Before completing any implementation, run the relevant checks.

Common commands:

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm check
pnpm format
```

If `pnpm check` exists, it should be treated as the main verification command.

Do not claim a task is complete if linting, typechecking, or build fails.

---

## Expected Project Structure

Follow this structure as the project grows:

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  sitemap.ts
  robots.ts
  not-found.tsx

  (marketing)/
    aeo/
    citation-intelligence/
    pricing/

  (content)/
    blog/
    authors/
    topics/

  (tool)/
    audit/
      page.tsx
      [jobId]/
        page.tsx

components/
  ui/
  marketing/
  blog/
  audit/
  report/
  charts/
  layout/

features/
  audit/
    api/
    components/
    hooks/
    schemas/
    types/

  blog/
  lead-capture/

lib/
  api/
  seo/
  sanity/
  env.ts
  utils.ts
  constants.ts

content/
  design/
    PRODUCT.md
    DESIGN.md
    COPY.md
```

Keep route files thin. Route files should compose components, not contain large business logic.

---

## Design Rules

Marrai should feel like a premium AI visibility command center.

Design principles:

* Premium B2B SaaS
* Technical, credible, data-rich
* Clear hierarchy
* Excellent typography
* Strong spacing rhythm
* Accessible contrast
* Responsive from day one
* Data visuals should feel real, not decorative
* Every section must communicate product value

Avoid:

* generic AI SaaS visuals
* random purple-blue gradients
* unnecessary glassmorphism
* decorative glowing blobs
* meaningless floating cards
* vague “AI-powered growth” copy
* overusing animation
* low-contrast text
* dashboard mockups with fake nonsense data
* copying random template aesthetics

Use shadcn/ui as a foundation, not as the final brand identity.

---

## Impeccable Usage

Use Impeccable for design quality and frontend taste.

Before major UI work:

```txt
/impeccable audit
```

When improving existing UI:

```txt
/impeccable polish
```

When the UI feels generic:

```txt
/impeccable bolder
```

When creating new UI:

```txt
/impeccable craft
```

Do not use Impeccable as permission to make massive unrelated edits. Apply it to focused files or focused product surfaces.

---

## Coding Rules

* Use Server Components by default.
* Use Client Components only for forms, polling, charts, browser APIs, and animation.
* Keep API calls centralized.
* Keep environment values in `lib/env.ts`.
* Do not hardcode production URLs outside env config.
* Validate external API responses with Zod.
* Prefer composition over large components.
* Prefer readable code over clever abstractions.
* Do not add dependencies without a clear reason.
* Do not create global state unless local or server state is insufficient.
* Do not rewrite unrelated code.
* Do not delete existing files unless clearly obsolete and explained.

---

## AEO Audit Backend Contract

Development backend:

```txt
http://localhost:8000
```

Submit audit:

```txt
POST /api/v1/audit
```

Request:

```json
{
  "url": "https://example.com",
  "email": "user@example.com"
}
```

Response:

```json
{
  "job_id": "uuid-string",
  "status": "pending"
}
```

Poll audit:

```txt
GET /api/v1/audit/{job_id}
```

Statuses:

```txt
pending
started
crawling
scoring
success
failure
```

Frontend behavior:

1. User submits URL and optional email.
2. Backend returns `job_id`.
3. Frontend redirects to `/audit/[jobId]`.
4. Frontend polls until `success` or `failure`.
5. Frontend renders a premium report UI.
6. Frontend handles 429 rate limits gracefully.

Do not render raw JSON as the final report UI.

---

## Audit Report UI Requirements

The audit report should feel like a premium diagnostic report.

It should include:

* audited URL
* status
* pages crawled
* crawl duration
* overall score
* semantic score
* category score cards
* deterministic findings
* deterministic recommendations
* semantic findings
* semantic recommendations
* page-level breakdown
* unreachable pages
* CTA for deeper analysis or waitlist

Scoring categories:

* Metadata
* Content Quality
* Structured Data
* Connectivity
* Technical Compliance
* Semantic Alignment

Use charts only when they improve understanding.

---

## Blog Platform Rules

The blog is Marrai’s long-term authority engine.

Blog UI should feel like a serious research publication, not a generic startup blog.

Prioritize:

* excellent typography
* strong metadata
* topic pages
* author pages
* structured data
* canonical URLs
* related posts
* readable article layout
* table of contents
* polished code/content blocks

Future CMS direction is Sanity unless explicitly changed.

---

## Copywriting Rules

Marrai copy should be clear, direct, technical, and confident.

Good copy examples:

* “See how AI answer engines understand your site.”
* “Audit your website for AI visibility.”
* “Find the gaps that stop your brand from being cited.”
* “Measure metadata, structured data, content quality, internal connectivity, and semantic clarity.”

Avoid:

* “Supercharge your growth with AI.”
* “Unlock the future of productivity.”
* “Revolutionize your workflow.”
* “10x your brand with next-gen intelligence.”
* “AI-powered insights for everyone.”

No vague AI hype.

---

## Commit Rules

Use atomic commits. Do not create one large commit containing unrelated work.

Good commit examples:

```txt
chore(app): initialize nextjs frontend
chore(styles): configure tailwind v4
chore(ui): install shadcn components
chore(env): add typed environment validation
docs(agents): add frontend agent instructions
docs(design): add product context
feat(layout): add root app shell
feat(landing): add hero section
feat(audit): add audit submission form
feat(audit): add job polling hook
feat(report): add category score cards
```

Each commit should represent one clear unit of progress.

Before committing:

```bash
pnpm check
git status
git diff
```

---

## Before Editing Workflow

Before making changes:

1. Read this `AGENTS.md`.
2. Read `content/design/PRODUCT.md` if product context is needed.
3. Read `content/design/DESIGN.md` if UI/design work is needed.
4. Read `content/design/COPY.md` if writing page copy.
5. Inspect the existing files.
6. Explain the plan.
7. Make the smallest useful change.
8. Run checks.
9. Summarize what changed.

Do not jump directly into large edits.

---

## Safety Rules

Never commit:

* `.env.local`
* secrets
* API keys
* tokens
* `.next`
* `node_modules`
* build artifacts

Do not expose secrets in Client Components.

Do not change backend API assumptions without documenting why.

Do not weaken CORS, validation, error handling, or accessibility for convenience.

---

## Definition of Done

A task is done only when:

* the UI works locally
* code is typed
* code is formatted
* lint passes
* build passes
* the change is scoped
* the commit is atomic
* the result matches Marrai’s design direction
* no unrelated files were modified
