# Security, Privacy, and Data Integrity Checklist

This checklist is for dashboard work. The migration engine/API may need additional controls; coordinate with its maintainers rather than assuming the dashboard owns those guarantees.

## Before implementation
- [ ] Identify what data the UI receives, sends, displays, and logs.
- [ ] Confirm API contract and authorization expectations.
- [ ] Decide whether the feature affects real customer data or preview data only.
- [ ] Define timeout, retry, duplicate submission, partial failure, and cancellation behavior where applicable.
- [ ] Consider whether a security/privacy ADR is needed.

## Authentication and secrets
- Treat every NEXT_PUBLIC_* value as public.
- Never commit secrets, service-account credentials, real tokens, or production data.
- Do not place tokens in URLs, logs, analytics, screenshots, or error messages.
- Validate authorization server-side; hiding a UI control is not an access-control boundary.
- Keep local preview/stub authentication clearly separated from production behavior.

## Migration and data-integrity UX
Before a real operation is enabled, the user should understand source, target, scope, and consequences. The UI should distinguish preview from execution, require explicit confirmation for destructive actions, prevent accidental duplicate submissions where possible, show an authoritative operation/job ID and status, and make failures/partial completion/retries/recovery understandable.

Do not imply transactional rollback, exactly-once delivery, or lossless conversion unless the backend contract and tests substantiate those claims.

## Logging and error handling
- Prefer correlation IDs and safe summaries over full payloads.
- Redact tokens, credentials, and sensitive fields before displaying/logging errors.
- Avoid leaking stack traces or internal configuration to end users.
- Retry only when safe or when the API provides idempotency semantics.

## Before merge
- [ ] Tests cover relevant authorization, validation, failure, and retry states.
- [ ] No secrets or customer data appear in diffs or fixtures.
- [ ] Errors are actionable without disclosing sensitive internals.
- [ ] Accessibility and keyboard behavior remain intact.
- [ ] Security-sensitive changes have maintainer review.
- [ ] Relevant documentation and limitations are explicit.
