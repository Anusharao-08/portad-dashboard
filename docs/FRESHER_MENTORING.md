# First-Time Contributor and Fresher Mentoring Guide

## Principles
Treat early tasks as a way to learn the codebase, not a test of prior knowledge. Give contributors a safe scope, context, timely feedback, and a clear path to ask for help.

## First week
1. Complete local setup and run tests, lint, and build.
2. Read the README, this workflow, product requirements, and relevant route/component.
3. Pick one small good first issue with a mentor.
4. Discuss acceptance criteria and agree on explicit non-goals.
5. Open a draft PR early if the approach is uncertain.
6. Present the result and one thing learned during the weekly review.

## Task sizing
A first issue should usually fit in a few focused hours to one day, have a visible outcome, and avoid risky authentication/data/build changes without close supervision.

Good starter tasks: accessible labels or focus behavior, a component test for a defined state, a small responsive fix, a documentation mismatch, or better empty/error-state messaging.

Avoid as first tasks: architecture redesign without an ADR, changing authentication/token handling alone, dependency overrides or major upgrades without a mentor, or inventing API behavior without a confirmed contract.

## Mentor agreement
For each newcomer, record:
- **Contributor:**
- **Mentor:**
- **Issue:**
- **Expected outcome:**
- **Check-in date:**
- **Review buddy:**

Mentors should respond to blockers within one working day where practical and review the first PR within two working days where practical. Explain the reasoning behind feedback. If work is too large, split it together rather than letting it silently stall.

## Review style
- Be specific and kind; distinguish required fixes from suggestions.
- Explain why a change matters for accessibility, security, maintainability, and user impact.
- Prefer one focused improvement round over speculative style preferences.
- Praise debugging, tests, and communication—not only finished features.
- Never use issue counts or commit volume to rank contributors.

## Completion checklist
- [ ] Contributor can explain the change and trade-offs.
- [ ] Required checks pass.
- [ ] Acceptance criteria are met.
- [ ] Feedback is resolved or consciously deferred.
- [ ] A short learning note or demo is shared.
