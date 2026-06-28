# Marrai Web

Marrai Web is the frontend for Marrai, an AI visibility and Answer Engine Optimization (AEO) audit product.

It lets users run a free website audit, track audit progress, and view a structured report showing how well AI answer engines can understand, retrieve, and cite their website.

## What is Marrai?

Search is moving from keyword results to answer-driven discovery. AI systems now summarize, compare, recommend, and cite websites directly inside answer interfaces.

Marrai helps website owners understand whether their site is readable and useful to those systems by checking:

* Metadata
* Structured data
* Content quality
* Internal connectivity
* Technical compliance
* Semantic clarity

## Features

* Premium marketing homepage
* Free AEO audit submission flow
* URL and optional email capture
* API proxy routes for backend communication
* Audit status polling
* Report-ready state handling
* AI visibility report UI
* Page-level audit breakdown
* Responsive design
* Basic SEO metadata
* CMS-powered research blog
* Embedded Sanity Studio
* Frontend CI with GitHub Actions

## Tech Stack

* Next.js App Router
* React
* TypeScript
* Tailwind CSS
* Zod
* shadcn-style UI primitives
* lucide-react
* Sanity
* next-sanity
* pnpm
* GitHub Actions
* Vercel-ready deployment

## Project Structure

```txt
marrai-web/
├── app/
│   ├── api/
│   │   └── audit/
│   ├── audit/
│   │   └── [jobId]/
│   ├── blog/
│   ├── studio/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── audit/
│   ├── blog/
│   ├── marketing/
│   ├── report/
│   └── ui/
├── features/
│   └── audit/
├── lib/
├── sanity/
├── docs/
├── public/
├── .env.example
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/whyismeleige/marrai-web.git
cd marrai-web
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Create environment file

Create a local environment file:

```bash
cp .env.example .env.local
```

For local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

For Sanity blog setup, see [`docs/sanity-blog.md`](docs/sanity-blog.md).

## Running Locally

Start the development server:

```bash
pnpm dev
```

Open:

```txt
http://localhost:3000
```

## Available Scripts

```bash
pnpm dev
```

Runs the local development server.

```bash
pnpm build
```

Builds the production application.

```bash
pnpm start
```

Runs the production build locally.

```bash
pnpm lint
```

Runs ESLint.

```bash
pnpm typecheck
```

Runs TypeScript checks.

```bash
pnpm check
```

Runs linting, type checking, and production build checks.

## Backend Connection

The frontend does not call the FastAPI backend directly from the browser. Instead, it uses Next.js API routes as a proxy.

Frontend routes:

```txt
POST /api/audit
GET  /api/audit/[jobId]
```

Backend routes called by the proxy:

```txt
POST /api/v1/audit
GET  /api/v1/audit/{jobId}
```

This keeps frontend code cleaner and gives the app a single place to normalize backend errors.

## Audit Flow

```txt
1. User enters a website URL on /audit
2. Frontend sends request to POST /api/audit
3. Next.js API route forwards request to FastAPI backend
4. Backend creates an audit job
5. Frontend redirects to /audit/[jobId]
6. Frontend polls audit status
7. When the job succeeds, the report UI renders the result
```

## Main Pages

```txt
/               Marketing homepage
/audit          Free audit submission page
/audit/[jobId]  Audit status and report page
/blog           Research index
/blog/[slug]    Research article page
/studio         Embedded Sanity Studio
```

## CI

This repository uses GitHub Actions for frontend checks.

The CI workflow runs on pushes and pull requests to `main` and checks:

* dependency installation
* linting
* TypeScript
* production build

## Development Workflow

Recommended branch flow:

```txt
main = stable production branch
feature branches = individual changes
```

Example:

```bash
git checkout -b feat/audit-report-polish
pnpm check
git add .
git commit -m "feat(report): polish audit report layout"
git push origin feat/audit-report-polish
```

Then open a pull request into `main`.

## Related Repository

Backend API:

```txt
https://github.com/whyismeleige/marrai-backend
```

## Status

Marrai Web is currently in MVP development.
