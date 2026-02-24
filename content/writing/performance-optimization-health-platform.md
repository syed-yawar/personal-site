---
title: 'Performance Optimization in Production: From Score 50 to the High 80s'
date: '2026-01-20'
description: 'Practical lessons from improving Core Web Vitals and SEO scores on a healthcare platform built with Next.js and Strapi.'
---

## Starting Point: "It Works" Isn't Enough

When I took ownership of the Fitnescity public website, the site was functional. Users could browse tests, read content, and navigate to booking flows. But Lighthouse scores hovered around 50, page loads felt sluggish on mobile, and organic search traffic wasn't where it needed to be for a consumer health brand.

Performance wasn't a feature request. It was a business problem. Slow pages meant lower conversions and worse search visibility.

## Diagnosing Before Fixing

The temptation with performance work is to jump straight into optimization: lazy load everything, compress all images, add caching headers. But optimization without measurement is guesswork.

I started with a structured audit:

- **Largest Contentful Paint (LCP)** was bloated by unoptimized hero images and render-blocking resources
- **Cumulative Layout Shift (CLS)** spiked from dynamically loaded content without reserved dimensions
- **Total Blocking Time (TBT)** was inflated by third-party scripts and large JavaScript bundles

Each metric pointed to a different class of problem, and each needed a different fix.

## The Fixes That Moved the Needle

### Image Pipeline

The biggest single win was rethinking how images were served. The CMS (Strapi) stored original uploads, but the frontend was loading full-resolution images regardless of viewport size. I implemented responsive image delivery using Next.js `Image` with proper `sizes` attributes and format negotiation. This alone dropped LCP by nearly a second on mobile connections.

### Layout Stability

CLS issues came from two sources: late-loading CMS content that shifted page layout, and font loading that caused text reflow. For content, I ensured that skeleton containers matched the expected dimensions of loaded content. For fonts, I switched to `font-display: swap` with explicit size-adjust fallbacks to minimize reflow.

### Bundle Discipline

JavaScript payload was larger than it needed to be. I audited the bundle with `@next/bundle-analyzer`, identified components that were imported eagerly but rendered conditionally, and moved them behind dynamic imports. Third-party analytics scripts were deferred and loaded after the main content was interactive.

### Server-Side Rendering Consistency

Some pages were accidentally client-rendering content that could have been server-rendered. In Next.js, this distinction matters for both performance and SEO. I audited the rendering mode of each route and ensured that public-facing content pages were fully server-rendered with proper cache headers.

## What Didn't Work

Not every optimization attempt paid off. A few things I tried that weren't worth the complexity:

- **Aggressive code splitting at the route level** added more network round-trips on slow connections than it saved in bundle size. The sweet spot was splitting at the feature level, not the page level.
  **Preloading everything.** I initially added preload hints for fonts, critical CSS, and key images. Too many preload hints compete with each other and can actually delay critical resources. I trimmed it back to only the LCP image and primary font.

## Measuring the Outcome

After several weeks of iterative optimization, most pages were scoring in the high 80s on Lighthouse, with some landing pages hitting the low 90s. More importantly, real-user metrics from field data confirmed the improvements weren't just lab artifacts.

The SEO improvements followed. Better Core Web Vitals contributed to improved search rankings, and the faster pages reduced bounce rates on high-intent landing pages.

## Lessons for the Next Project

1. **Measure first, optimize second.** Lab tools (Lighthouse, WebPageTest) and field data (CrUX, analytics) tell different stories. You need both.
2. **Performance is a system property.** It's not one fix. It's image delivery, rendering strategy, bundle size, and caching working together.
3. **Good defaults compound.** Setting up proper image handling, SSR, and bundle analysis early prevents the slow creep that leads to 50-score pages.
4. **Performance work is never done.** Every new feature, CMS content update, or third-party integration can regress performance. Automated monitoring is essential.
