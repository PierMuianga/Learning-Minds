# Testing

`npm run test` covers environment boundaries, auth validation, password confirmation, role destinations, route authorization, required onboarding fields and stable catalogue IDs. `npm run test:e2e` covers the public landing page and accessible login/signup validation without requiring a live account.

For live integration QA, configure a disposable Supabase project, apply the migration, and test both roles through signup, confirmation (when enabled), onboarding, refresh, cross-role route redirects, profile edits and logout. Test widths of 360px, tablet, laptop and wide desktop. Playwright uses the local Next.js server configured in `playwright.config.ts`.

Run:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
npm run test:e2e
npm run format:check
```

A missing database or blocked package/browser download is an environment failure, not a reason to weaken a test.
