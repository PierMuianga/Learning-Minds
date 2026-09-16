# Development rules

1. User-facing branding is exactly **Learning Minds**.
2. Deliver only the commissioned phase; do not simulate unavailable capabilities.
3. Keep pages as composition boundaries, database access in server repositories/actions, and Supabase creation in `src/lib/supabase`.
4. Never accept a client user ID as ownership evidence. Resolve `auth.getUser()` and rely on RLS.
5. Never expose or commit service-role credentials.
6. Keep curriculum behaviour data-driven through stable IDs, not display strings.
7. Preserve semantic controls, labels, keyboard operation, focus visibility, contrast, reduced motion and responsive layouts.
8. Avoid broad suppressions or disabled quality checks. Add meaningful tests with behaviour changes.
9. Published educational data and later learning evidence require versioned/auditable designs; those systems are not part of Phase 2.
10. Run typecheck, lint, unit, build and E2E gates before completion.
