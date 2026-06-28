# Sanity Blog Workflow

Marrai uses Sanity for the CMS-powered research blog and an embedded Studio at `/studio`.

The blog is designed for published research notes only. If Sanity is not configured, public blog routes render empty or developer-friendly states instead of fake content.

## Required Environment Variables

Add these public-safe variables to `.env.local` for local development:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
NEXT_PUBLIC_SANITY_STUDIO_URL=/studio
```

Optional server-only variables:

```env
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=
```

Use `SANITY_API_READ_TOKEN` only if the dataset or queries require authenticated reads. Do not commit real tokens.

## Running Locally

Install dependencies and start the Next.js app:

```bash
pnpm install
pnpm dev
```

Open the Studio at:

```txt
http://localhost:3000/studio
```

The public blog routes are:

```txt
/blog
/blog/[slug]
/blog/category/[slug]
/blog/rss.xml
```

The RSS feed and sitemap require a valid `NEXT_PUBLIC_SITE_URL`.

## Creating Content

Create content in this order:

1. Author
2. Category
3. Post

### Author

Create an author with:

* Name
* Slug
* Role
* Optional image
* Bio
* Optional social URLs

### Category

Create a category with:

* Title
* Slug
* Optional description
* Optional color label

Categories power `/blog/category/[slug]` pages and the filter links on `/blog`.

### Post

Create a post with:

* Title
* Slug
* Excerpt
* Published date
* Author
* Categories
* Body content
* Optional cover image
* Cover image alt text when a cover image is used
* Optional reading time
* Optional SEO fields

Posts are shown publicly only when they have a slug, a `publishedAt` value, and the publish date is not in the future.

## Cover Images

When adding a cover image, always add meaningful alt text in `coverImageAlt`. This is required by the schema when a cover image exists.

Inline body images also support alt text and optional captions.

## Body Content

Post body content supports:

* Paragraphs
* `h2`, `h3`, and `h4` headings
* Block quotes
* Bullet and numbered lists
* Strong, emphasis, and inline code
* External links
* Internal post links
* Images with alt text and captions
* Callouts
* Code blocks

The article page builds a desktop table of contents from `h2` and `h3` blocks.

## Publishing

Sanity content appears on the public site after publishing. Blog pages revalidate periodically, so updates may take up to the configured revalidation window to appear.

Current blog revalidation is set to 3600 seconds.

## Quality Commands

Run these before shipping blog changes:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Or run the combined project check:

```bash
pnpm check
```
