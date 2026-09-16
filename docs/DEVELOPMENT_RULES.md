# Development rules

These rules apply to future contributors and Codex agents.

1. Do not expand product scope without explicit instruction. Deliver only the requested phase.
2. Never work directly on `main`; create a focused feature branch and do not merge your own pull request.
3. Maintain module boundaries. Pages compose use cases; UI components do not query databases or storage directly.
4. Keep curriculum behaviour data-driven. Never encode provider-specific curriculum branches in application logic.
5. Reuse the central curriculum, question, attempt, mastery, and progress domains across experiences.
6. Preserve immutable published versions and historical attempt evidence.
7. Keep AI advisory and separate from authoritative educational and business rules.
8. Preserve semantic HTML, keyboard operation, visible focus, reduced-motion preferences, useful labels, and responsive layouts.
9. Avoid unnecessary dependencies. Prefer platform and framework capabilities and document why substantial packages are added.
10. Do not weaken types, disable lint rules, skip tests, or add broad suppressions merely to silence errors.
11. Add tests at the appropriate level for changed behaviour.
12. Run typecheck, lint, unit tests, production build, and E2E tests before completion.
13. Keep the system a modular monolith until evidence justifies greater operational complexity.
