# PortaD Project Operating System

This is the working agreement for planning and delivering the PortaD dashboard. This repository contains the public Next.js dashboard, not the migration engine or API.

## Outcomes
1. Make the dashboard reliable, accessible, secure, and useful for migration workflows.
2. Make work visible and small enough for new contributors to deliver safely.
3. Keep documentation and issue status aligned with implementation.
4. Prefer tested behavior and evidence over promises or vanity metrics.

## Where work lives
- **GitHub Issues:** one trackable unit of work with acceptance criteria and an owner.
- **Milestones:** time-boxed outcomes and release targets.
- **Pull requests:** review, discussion, test evidence, and change history.
- **Repository docs:** durable project knowledge and decisions.
- **GitHub Wiki (optional):** longer community guides only when maintainers can keep them synchronized. Repository Markdown remains the source of truth.

## Work item lifecycle
Backlog → Ready → In progress → In review → Done. Use issue state, labels, PR status, and a GitHub Project board to represent stages; avoid duplicate tracking spreadsheets.

A task is **Ready** when it has a clear problem statement, testable acceptance criteria, known dependencies, a named owner or mentor, and a scope small enough to finish in one sprint.

A task is **Done** when acceptance criteria are met; relevant tests, lint, and production build pass; accessibility, security, responsive behavior, and error states are considered; docs/screenshots are updated where needed; and the PR is reviewed and merged with no hidden blockers.

## Planning cadence
- **Weekly planning (30 min):** choose Ready issues, assign owners and mentors, confirm dependencies, and set a sprint goal.
- **Async daily update:** yesterday / today / blocker in the team channel or sprint issue.
- **Weekly demo/review (30 min):** demonstrate merged behavior and review acceptance criteria and CI.
- **Weekly retro (20 min):** keep / stop / start; choose at most two improvements with owners.
- **Backlog refinement (30 min):** clarify the next one or two weeks; avoid over-specifying distant work.

## Pull request policy
- One logical change per PR; link the issue with Closes #N where applicable.
- Prefer draft PRs for early feedback and small, reviewable diffs.
- Authors self-review the diff, tests, accessibility, and accidental files.
- Contributors do not approve their own PR. At least one maintainer or designated reviewer approves before merge.
- Do not merge with failing required checks or unresolved blocking review comments.
- Reviewers should explain the reasoning behind requested changes, especially for new contributors.
- Never paste secrets, real customer data, access tokens, or private migration payloads into issues, PRs, screenshots, or logs.

## Decision-making
Record material architecture, dependency, security, data-handling, and product-scope choices as ADRs (see Architecture Decision Records). Keep each decision short: context, options, decision, consequences, owner, date, and revisit trigger.

Maintainers decide release scope and resolve deadlocks after inviting relevant input. Record decisions and rationale in the issue or ADR.

## Metrics
Review trends weekly: planned versus completed issues, time to first PR review, PR cycle time, blocked-work age, CI pass rate, flaky tests, escaped defects, reopened issues, and setup friction.

Do not use commit counts, lines of code, or individual issue counts as performance scores.

## First-time contributor support
Every newcomer should have a small first issue labelled good first issue, a named mentor/reviewer, a written setup path, clear success criteria, and feedback within two working days where practical.

See the Fresher Mentoring Guide and Engineering Workflow.
