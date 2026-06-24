# Marrai Product Context

## One-line Positioning

Marrai helps brands understand and improve how AI answer engines understand, cite, and recommend them.

## Product Category

AI visibility, AEO, answer engine optimization, citation intelligence, and future AI paid ads intelligence.

## Current Product Surfaces

### 1. Landing Page

The landing page must create immediate trust. It should explain the market shift from search rankings to AI answers and show Marrai as a serious product for understanding AI visibility.

### 2. Blog Platform

The blog is Marrai's long-term authority engine. It should publish high-quality content around AEO, AI search, AI citations, structured data, LLM visibility, and AI commerce.

### 3. Free AEO Audit Tool

The free audit tool lets users submit a URL and receive a scored AI visibility report.

Backend flow:

- User submits URL and optional email.
- Backend creates async job.
- Frontend receives job ID.
- Frontend redirects to `/audit/[jobId]`.
- Frontend polls until success or failure.
- Completed report shows deterministic and semantic scoring.

## Backend API

Development API base:

`http://localhost:8000`

Submit audit:

`POST /api/v1/audit`

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

### Scoring Categories

**Deterministic scoring**:

* Metadata: 25%
* Content Quality: 20%
* Structured Data: 40%
* Connectivity: 10%
* Technical Compliance: 5%

**Semantic scoring**:

* Heading/content alignment
* Section coherence
* Semantic findings
* Semantic recommendations

**Target Users:**

* SEO consultants
* SaaS founders
* growth marketers
* content teams
* AI search agencies
* B2B marketing teams

**Marrai Should Feel Like**

* AI Search Command Center
* premium
* analytical
* credible
* sharp
* technical but readable
* useful from first interaction

**Marrai Should Not Feel Like** 

* generic AI wrapper
* purple-gradient SaaS template
* vague productivity app
* crypto dashboard
* overanimated portfolio site
* vibe-coded demo
