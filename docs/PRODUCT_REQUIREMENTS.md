# PortaD Dashboard — Product Requirements

**Status:** Working baseline. Validate with product and API maintainers before treating unimplemented capabilities as committed scope.  
**Scope:** Public dashboard repository only.

## Product statement
PortaD aims to help users understand and manage moving data between SaaS workspaces. This repository provides the public web experience: product information, a migration wizard shell, compatibility information, job views, and account UI. The migration engine and API are separate systems.

## Users and needs
- **Workspace administrator:** understand source/target support, prerequisites, risks, and migration status.
- **Operator:** follow a clear sequence, get validation feedback and actionable errors, and monitor progress.
- **User:** understand onboarding and account/session behavior.
- **Open-source contributor:** get quick setup, architecture context, safe starter tasks, and clear review expectations.

## Product principles
1. **Honest capability states:** distinguish implemented, planned, demo, unavailable, and unsupported behavior.
2. **Data safety first:** make destructive or irreversible actions explicit; never imply a UI shell executed a real migration.
3. **User control:** show scope, source, target, and consequences before a real operation.
4. **Accessible by default:** keyboard support, visible focus, semantic labels, sufficient contrast, and reduced-motion support.
5. **Resilient UX:** design loading, empty, error, retry, and partial-result states.
6. **Privacy by design:** request and display only information needed for the task.

## Current repository baseline
The README describes a Next.js App Router dashboard with homepage, migration wizard shell, jobs view, compatibility matrix, and account/session screen. Firebase Auth is optional and environment-driven. Confirm current code and API contracts before changing this baseline.

## Functional requirements

### Onboarding and navigation
- Visitors understand what the dashboard does and what is not yet available.
- Primary routes and navigation work on desktop and mobile.
- Setup and troubleshooting documentation is discoverable.

### Migration wizard
- Each step communicates required information and current progress.
- Back/next navigation preserves valid input where appropriate.
- Required fields and invalid combinations receive clear, accessible feedback.
- A real migration is not shown as successful until the API confirms it.
- When connected to a backend, show a stable operation/job identifier and a clear status model.

### Compatibility
- Source/target pairs have explicit statuses and plain-language explanations.
- Do not claim support based only on a logo, roadmap item, or planned adapter.
- Include a last-verified date or source of truth when available.

### Jobs
- Clearly distinguish loading, empty, active, successful, failed, cancelled, and unknown states.
- Display actionable errors without leaking tokens or sensitive payloads.
- Polling/retry behavior is bounded and handles network errors.

### Account and session
- Auth configuration failures have a useful explanation.
- Sign-in/sign-out state is consistent across navigation.
- ID tokens are never written to logs, URLs, analytics, screenshots, or persistent storage unless an explicitly reviewed design requires it.

## Non-functional requirements
- TypeScript strict mode; lint and production build pass.
- Core routes work by keyboard and screen readers.
- Layouts work at common mobile widths without unintended horizontal overflow.
- No secrets are committed; public environment variables are treated as public.
- Tests cover important state transitions and error paths, not only happy paths.
- New dependencies have a clear benefit and maintenance plan.

## Success measures
Establish baselines before setting numerical targets: automated core-journey success, fewer setup blockers, no known critical accessibility/security defects at release, accurate capability states, and improving review latency/CI reliability.

## Open questions for maintainers
- Which API endpoints and response schemas are stable for job listing, status, and migration creation?
- What is the source of truth for adapter compatibility?
- Which operations are preview-only versus backed by the live engine?
- What data is retained, where, for how long, and who can access it?
- What deployment environments and browser support are required?
