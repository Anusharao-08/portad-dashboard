# PortaD Organization-Level Operating Model

**Status:** Proposed for maintainer approval  
**Applies to:** `IndianjobsTech/PortaD` (core/CLI and migration engine) and `IndianjobsTech/portad-dashboard` (web dashboard)  
**Delivery target:** 15 December 2026, 23:59 IST

This is the shared governance contract for both repositories. The core repository owns migration/package semantics, validation and data-integrity guarantees; the dashboard owns presentation and user workflow and must not duplicate migration logic.

## Roles and decision rights
- **Product owner:** scope, priority, user acceptance.
- **Technical lead/release captain:** architecture, sequencing, release evidence and go/no-go recommendation.
- **Security/privacy owner:** threat model, access, secrets and vulnerability response; may block release for unresolved critical/high risks.
- **Quality owner:** test strategy, CI evidence and regression triage.
- **Feature owner:** one accountable person per issue/PR.
- **Mentor/reviewer:** coaching and independent review for new contributors.
Maintainers must assign actual people to these roles before a controlled pilot. Do not infer assignments or leave release-critical ownership implicit.

## Source of truth
- Issues = work, acceptance criteria, dependencies, owner and evidence.
- Organization GitHub Project = cross-repository workflow view.
- Milestones = dated sprint/release goals.
- Pull requests = rationale, risk, test evidence and rollout/rollback.
- Repository docs = durable decisions, runbooks and contracts.
- Discussions = open design/community conversation; convert decisions into issues.
- Release record = exact tag/commit, test evidence and GO/LIMITED PILOT/NO-GO decision.

## Workflow and Definition of Ready
Statuses: **Inbox → Backlog → Ready → In progress → In review → Done**, with **Blocked** as a visible state. Only Ready work enters a sprint; blocked work records blocker, owner and next action.
An issue is Ready when it has a clear problem/outcome, testable acceptance criteria, priority, size (S/M/L), component/risk labels, one owner, reviewer/mentor, dependencies, test plan, and bounded scope.

## Definition of Done
- Acceptance criteria verified and evidence linked.
- Tests added/updated; relevant checks pass.
- No secrets, personal data or customer exports in source/fixtures.
- Errors/logs are safe and actionable.
- Integrity, idempotency, compatibility and recovery addressed where relevant.
- Docs/runbooks/release notes updated.
- CI green; qualified review and required security review complete.
- Change merged under agreed branch protections; follow-up work is tracked.

## Cadence (IST; adjust with team availability)
- Monday 10:00: sprint planning, capacity, owners and dependencies.
- Daily async by 11:00: yesterday/today/blockers.
- Wednesday 16:00: architecture/mentoring clinic.
- Friday 16:00: demo and acceptance review.
- Friday 16:30: risks, CI, dependency alerts and release evidence.
- Sprint end: outcome review, carryover reasons and retro actions.
Keep decisions/actions in GitHub. Use two-week sprints and reserve the final 10 days before 15 Dec for stabilization, not feature expansion.

## Fresher-friendly delivery
Start with docs, tests, isolated bugs and low-risk UI tasks. Every task needs context, module pointers, acceptance criteria, exact verification commands and a named mentor. Pair on serialization, auth, secrets, destructive operations, retry/resume and import/write paths. Reviewers explain why. Do not leave a critical component with a single owner.

## Cross-repository change policy
Shared behavior changes link both core and dashboard issues/PRs, state compatibility and release order. Version/document the package/API contract. Dashboard must not promise a capability absent from the core/API. Use synthetic fixtures and a documented compatibility matrix.

## Release controls
No production claim without explicit supported paths, reconciliation/integrity evidence, malformed-input and recovery tests, security/privacy review, green CI on the release commit, clean install/package checks, dependency/licence disposition, pilot consent, rollback/recovery plan, named operator, and published limitations/support path. Release captain records GO, LIMITED PILOT or NO-GO with evidence.

## Weekly metrics
Sprint goal completion/carryover, blocker age, critical/high risks, CI pass/flaky-test trends, critical-path test coverage, reconciliation discrepancies, PR review age, dependency/security alerts, and user-reported defects. Metrics are for improving the system, not ranking individuals.

## Maintainer setup checklist
- [ ] Create an organization-owned GitHub Project **PortaD Delivery**, include issues/PRs from both repos.
- [ ] Add statuses Inbox, Backlog, Ready, In progress, In review, Blocked, Done; fields Priority, Size, Sprint, Component, Risk, Owner.
- [ ] Create dated milestones through 15 Dec 2026; reserve stabilization time.
- [ ] Standardize labels: `priority:p0/p1/p2`, `type:bug/feature/task/docs`, `area:core/dashboard`, `risk:security`, `risk:data-integrity`, `good first issue`, `blocked`.
- [ ] Name owners, reviewers/mentors and backups.
- [ ] Protect default branches: PR required, required CI, no force-push/deletion, approval required.
- [ ] Enable secret scanning/push protection, dependency alerts and security updates where available.
- [ ] Configure CODEOWNERS after confirming valid team/user handles.
- [ ] Enable Discussions if desired and appoint moderation/support owner.
- [ ] Verify private vulnerability reporting, repository permissions and incident contact.
- [ ] Rehearse interrupted migration and data discrepancy response.

**Important:** Project boards, milestones, branch rules, security settings, Discussions and real team assignments require authorized maintainers to configure/verify in GitHub. These checklist items are not complete until verified in the UI.
