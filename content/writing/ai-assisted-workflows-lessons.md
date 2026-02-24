---
title: 'Building AI-Assisted Workflows That Teams Actually Use'
date: '2025-08-22'
description: 'Practical lessons from building frontend architecture for an AI-powered data cleanup product, and what makes AI features land with real users.'
---

## The Gap Between Demo and Product

AI features are easy to demo and hard to ship. A language model that cleans messy data in a notebook is impressive. A production workflow where Salesforce administrators trust AI suggestions enough to act on them — that's a different engineering problem entirely.

When I worked on the DataIAm product, the AI was already capable. The challenge was building a frontend that made that capability usable, trustworthy, and efficient for people who aren't data scientists.

## Users Don't Want AI — They Want Results

The first lesson I learned is that users don't care about the AI. They care about cleaning their Salesforce data faster and more accurately than they could manually. The AI is a means, not the feature.

This framing matters for architecture. It means:

- The UI should center the user's task (review records, approve changes, handle exceptions), not the AI's output
- AI suggestions should feel like assistance, not automation — users need to feel in control
- The feedback loop between AI suggestion and user action should be tight, not buried behind extra clicks

## Architecture for Trust

Trust is the core design constraint for AI-assisted workflows. If users don't trust the suggestions, they'll review every single one manually, and the AI provides zero value.

We built trust through transparency:

### Explainable Suggestions

Every AI-generated suggestion was accompanied by a brief rationale — why the system recommended merging two records, or why a field value was flagged as inconsistent. Users could see the reasoning and decide whether it made sense for their context.

### Confidence Signals

Not all suggestions are equal. We surfaced confidence levels so users could batch-approve high-confidence changes and focus their attention on ambiguous cases. This turned a linear review process into a triage workflow — dramatically faster for the common case.

### Undo and Correction

Users need to know they can reverse any AI action. We built explicit undo support and made corrections easy to submit. Over time, corrections could feed back into the model, but the immediate value was psychological: users experimented more freely when they knew mistakes were recoverable.

## Frontend Patterns That Worked

### React Query for Server State

AI workflows involve a lot of asynchronous state: records being processed, suggestions being generated, approvals being submitted. React Query was the right fit because it handles cache invalidation, background refetching, and optimistic updates cleanly. When a user approves a suggestion, the UI updates immediately while the server processes the change.

### Form State with React Hook Form

Data cleanup is fundamentally a form problem — users are reviewing and editing structured records. React Hook Form gave us performant form handling without re-rendering the entire record list on every keystroke. For a product where users might review hundreds of records in a session, this mattered.

### Keeping It Plain React

We made a deliberate decision to move away from a Next.js-oriented setup to a plain React application. The product was an authenticated SaaS tool with no SEO requirements and no public content pages. Server-side rendering added complexity without value. Stripping it out simplified the build, deployment, and mental model for the team.

## What I'd Do Differently

### Earlier User Research on Edge Cases

The happy path — AI suggests, user approves — was straightforward. The edge cases were harder: what happens when the AI is wrong? When records have conflicting data from multiple sources? When the user disagrees with the confidence score? We handled these, but investing more time in understanding edge case workflows upfront would have reduced late-stage UI changes.

### Better Loading States

AI processing isn't instant. The gap between "user submits a batch" and "suggestions are ready" needs careful handling. We started with basic spinners and evolved to progress indicators with estimated completion times. Starting with better loading UX from day one would have improved the early user experience.

## The Broader Lesson

Building AI-assisted features is mostly not about AI. It's about building good product workflows that happen to use AI as an input. The frontend architecture, the state management, the UX for review and correction — these are standard engineering problems that determine whether an AI capability becomes a product people actually use.

The teams that ship successful AI features are the ones that treat the model as a component in a larger system, not the system itself.
