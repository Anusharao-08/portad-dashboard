# Architecture Decision Records (ADRs)

Use this file as the index for material technical decisions. Add one record per decision under docs/adr/, named NNNN-short-title.md. Record unknowns as questions rather than presenting assumptions as facts.

## When to write an ADR
Use ADRs for choices that materially affect API contracts or authentication, data movement/validation/privacy/retention, boundaries between dashboard/API/engine, major dependencies, state management, testing, deployment, or compatibility policy. Small implementation choices belong in code review.

## ADR template

    # ADR-NNNN: Short decision title
    - Status: Proposed | Accepted | Superseded | Rejected
    - Date: YYYY-MM-DD
    - Owner: @github-handle
    - Related issue/PR: #N

    ## Context
    What problem and constraints led to this decision?

    ## Options considered
    1. Option A — benefits and costs.
    2. Option B — benefits and costs.
    3. Do nothing / defer, where relevant.

    ## Decision
    What are we choosing, and why?

    ## Consequences
    - Positive effects:
    - Trade-offs / risks:
    - Migration or rollout plan:

    ## Security and data implications
    What data is exposed, stored, logged, transferred, or deleted?

    ## Revisit trigger
    What evidence or condition would make us reconsider?

## Current decision log
This guide asserts no new architecture decisions. Add reviewed decisions here as ADRs are accepted.
