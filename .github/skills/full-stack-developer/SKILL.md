---
name: full-stack-developer
description: "Plan and deliver full-stack features end to end. Use for React frontend work, Express API and SQL schema design, implementation, testing, rollout, and post-release validation."
argument-hint: "Feature request, constraints, stack details, and acceptance criteria"
user-invocable: true
---

# Full-Stack Feature Delivery

Use this skill to implement production-ready features across frontend, backend, data, and release operations.

## Stack Defaults
- Frontend: React
- Backend: Express
- Data: SQL with migration-driven schema changes

## When to Use
- Building a new product feature from requirement to release
- Refactoring or extending an existing full-stack flow
- Converting a bug report into a reliable fix with tests
- Designing API and UI changes that must ship together

## Inputs To Collect First
- Product goal, user story, and acceptance criteria
- Current architecture and touched modules
- Data model constraints and migration risk
- Non-functional requirements: performance, security, accessibility, observability
- Rollout constraints: flags, backward compatibility, release timeline

## Workflow
1. Clarify scope and constraints.
- Reframe the request as explicit acceptance criteria.
- List assumptions and unknowns.
- Define what is out of scope.

2. Map impact across layers.
- Frontend: routes, components, states, validation, loading/error UX.
- Backend: endpoints, authz/authn, business rules, error model.
- Data: schema changes, migrations, indexes, backfill, rollback.
- Ops: config, secrets, telemetry, alerts, release mechanism.

3. Design contract first.
- Define request/response schema and error shape.
- Choose versioning and backward-compatibility approach.
- Add sample payloads for success and failure paths.

4. Decide implementation strategy.
- Branch A: additive and backward-compatible.
- Implement backend first, then frontend wiring.
- Branch B: breaking or high-risk.
- Use feature flag, dual-read/write or compatibility shim, and phased rollout.
- Branch C: data-heavy change.
- Use expand/migrate/contract migration pattern.

5. Implement backend and data safely.
- Add or update domain logic and API handlers.
- Add validation and authorization checks near boundaries.
- Create migrations with idempotent or reversible strategy where possible.
- Add observability hooks (structured logs/metrics/traces).

6. Implement frontend with resilient UX.
- Build UI states for loading, empty, partial, and error conditions.
- Ensure accessibility semantics and keyboard flow.
- Handle optimistic updates, retries, and conflict feedback when needed.

7. Test pyramid execution.
- Unit tests for pure logic and validation.
- Integration tests for API + data boundaries.
- End-to-end tests for critical user journeys.
- Add regression tests for fixed bugs.

8. Validate release readiness.
- Run lint, typecheck, and test suites.
- Verify migration plan in staging-like data volume when possible.
- Confirm dashboards/alerts for new failure modes.

9. Roll out and monitor.
- Deploy with feature flag or canary where appropriate.
- Observe error rates, latency, and business metrics.
- Prepare rollback instructions and execute if guardrails breach.

10. Close the loop.
- Remove temporary flags/shims if no longer needed.
- Update docs/changelog/runbooks.
- Capture lessons learned for future work.

## Quality Gates (Definition of Done)
- Acceptance criteria mapped to tests and all pass
- Unit tests pass for changed logic
- Integration tests pass for API and data boundaries
- End-to-end tests pass for critical user journeys
- Accessibility checks completed for changed UI paths
- Performance budget checks completed for changed critical paths
- API contract documented and validated
- Telemetry present for new critical paths
- Rollout/rollback plan documented

## Deliverables Produced
- Implementation plan with risk notes
- API contract and migration notes
- Code changes across frontend/backend/data layers
- Automated tests covering happy and failure paths
- Release checklist and monitoring checklist

## Example Prompts
- /full-stack-developer Add team invitations with email verification and role selection
- /full-stack-developer Refactor checkout to support discount codes with audit logging
- /full-stack-developer Fix duplicate order creation under retries and add idempotency support
