---
title: 'Why I Chose Next.js for a Healthcare Platform'
date: '2025-10-18'
description: 'Architecture decisions behind building a consumer health platform with Next.js and a headless CMS, and the trade-offs involved.'
---

## The Problem Space

When I started leading the Fitnescity web platform, the product needed to serve multiple audiences through a single web presence: consumers discovering health tests, content editors publishing marketing pages, and operations teams managing booking and result workflows.

The architecture decision wasn't "which framework?" in isolation. It was "which stack gives us the best balance of performance, content flexibility, and development velocity for a healthcare-adjacent product?"

## Why Next.js

### Server Rendering for SEO and Performance

Consumer health is a search-driven category. People Google symptoms, tests, and providers. If your pages aren't fast and well-indexed, you lose traffic to competitors. Next.js gave us server-side rendering out of the box, which meant:

- Content pages were fully rendered HTML on first load — critical for search engine crawlers
- Time to First Byte was fast because we weren't waiting for client-side JavaScript to render content
- Core Web Vitals were manageable from day one, not something we had to retrofit

### The Content Layer Problem

Healthcare platforms have a lot of content: test descriptions, provider information, location pages, educational articles. This content changes frequently and is managed by non-engineers. Hardcoding it into React components was not viable.

We paired Next.js with Strapi as a headless CMS. The content team could publish and update pages without engineering involvement, while the frontend consumed structured content via API. Next.js's data fetching patterns (server components, static generation where appropriate) made this integration clean.

### Incremental Adoption

The platform wasn't built from scratch — it evolved from existing surfaces. Next.js allowed us to migrate incrementally. We could introduce new pages and features in the Next.js app while legacy surfaces continued running. The framework's routing and build system supported this coexistence without requiring a big-bang migration.

## The Trade-Offs

### Complexity Budget

Next.js is a powerful framework, which means it has a large surface area. Server components, client components, API routes, middleware, static generation, ISR — the number of rendering modes creates decision overhead.

For a small team, this complexity needs to be managed deliberately. We established conventions early: public content pages are server-rendered, interactive features are client components, and we avoid mixing rendering strategies within a single page unless there's a measurable benefit.

### Hosting Constraints

Next.js works best with platforms that support its full feature set (Vercel, AWS with appropriate infrastructure). For Fitnescity, we deployed on AWS ECS, which meant we needed to handle some of the infrastructure concerns (container management, CDN configuration, cache invalidation) that managed platforms abstract away.

This was a conscious trade-off — we gained control over our deployment pipeline and cost structure, but we spent engineering time on infrastructure that a managed platform would have handled.

### CMS Coupling

Pairing Next.js with a headless CMS introduces a coupling point. Content changes in Strapi need to trigger rebuilds or revalidation in Next.js. We used webhook-driven revalidation for most content types, but the latency between "content published" and "live on site" required careful communication with the content team.

## What I'd Validate Differently

If I were starting a similar project today, I'd spend more time upfront on:

- **Content modeling** — getting the CMS schema right before building frontend components. We iterated on content types more than I'd have liked, which rippled through the frontend.
- **Performance budgets** — setting explicit thresholds for bundle size and Core Web Vitals from day one, rather than optimizing after the fact.
- **Preview workflows** — giving content editors a reliable way to preview changes before publishing. This reduces the "publish and hope" cycle that erodes trust in the CMS workflow.

## The Outcome

The stack served the product well. We delivered a fast, SEO-friendly public site that the content team could update independently, while building customer and operations workflows on the same Next.js foundation. The architecture was understandable to the full team, not just the person who designed it — which is the real test of whether your technical choices were right.

## When Next.js Isn't the Answer

For completeness: Next.js isn't always the right choice. If your product is a purely interactive application with no SEO requirements (internal tools, dashboards), a simpler React setup might be more appropriate. If your team is small and the product is content-heavy with minimal interactivity, a static site generator could be a better fit.

The right framework is the one that fits your constraints — team size, deployment environment, content workflow, and performance requirements. Next.js happened to fit ours.
