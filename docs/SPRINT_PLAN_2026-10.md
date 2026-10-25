# PortaD Dashboard — 30-Day Execution Plan

**Planning window:** 25 October–23 November 2026  
**Owner:** Maintainers to assign at kickoff  
**Note:** This is a proposed sequence, not a claim that work is assigned or committed. Pull only Ready issues into a sprint.

## Sprint 1 — Stabilize the foundation (25 Oct–7 Nov)

**Goal:** improve contributor clarity and protect the existing dashboard while closing focused UX/accessibility gaps.

### P0 — must do
- [ ] Audit CI and add unit tests to CI if the suite is stable.
- [ ] Review the dependency override for @grpc/grpc-js; document compatibility evidence and an owner/revisit date, or remove it safely.
- [ ] Review open issues for duplicate text and ensure acceptance criteria are testable.
- [ ] Verify the test/lint/build baseline on a clean install.

### P1 — high value
- [ ] Complete migration wizard progress accessibility issue #10 with tests.
- [ ] Improve mobile layout on high-traffic routes, tracking through issue #14.
- [ ] Improve migration and adapter docs (#16) without promising unimplemented capabilities.
- [ ] Agree a maintainer-approved source of truth for compatibility status.

### Sprint exit criteria
- CI checks are green on the target branch.
- Each merged change has a linked issue and review.
- Top known security/dependency concerns have a documented disposition.
- New contributors can follow setup and identify a starter issue.

## Sprint 2 — UX and end-to-end confidence (8–21 Nov)

**Goal:** improve the core dashboard journey without overstating backend integration.

- [ ] Implement persistent dark mode (#17) with contrast and reduced-motion checks.
- [ ] Add Playwright smoke coverage for homepage navigation and wizard progression (#15).
- [ ] Define job status/loading/empty/error states before wiring real polling.
- [ ] Add explicit demo/preview labels where an action is not backed by a real API operation.
- [ ] Review account/session UI and ensure tokens are not logged or exposed.

### Sprint exit criteria
- Unit and end-to-end smoke tests are documented and reproducible.
- Theme preference persists and respects system preference when no user choice exists.
- Mobile and keyboard smoke checks are recorded for the critical journey.
- API-dependent scope has a confirmed contract and named owner.

## Review and reset (22–23 Nov)
- [ ] Demo completed work against acceptance criteria.
- [ ] Review planned versus completed work, blocked issues, review latency, CI reliability, and regressions.
- [ ] Update roadmap with actual outcomes, not aspirations.
- [ ] Choose the next sprint goal and refine the next one to two weeks of backlog.

## Out of scope unless approved
- Claiming dashboard UI changes implement the migration engine.
- Building an API client against an unconfirmed API contract.
- Collecting analytics/user data without an approved privacy/security design.
- Large redesigns, broad dependency upgrades, or unrelated refactors.

## Weekly status template
**Goal:**  
**Completed (merged):**  
**Not completed and why:**  
**Demo / CI links:**  
**Blockers and owner:**  
**Security / data-integrity concerns:**  
**Next week's top three:**  
**Decision needed from maintainers:**  
