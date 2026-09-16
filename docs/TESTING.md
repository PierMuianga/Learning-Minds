# Testing

## Unit tests

Vitest and Testing Library provide fast tests for pure domain behaviour and React components. Unit tests live beside source files as `*.test.ts` or `*.test.tsx`; shared setup is in `tests/setup.ts`.

```bash
npm run test
```

## Browser E2E tests

Playwright verifies critical behaviour in a real Chromium browser. Tests live in `tests/e2e`. The configuration starts the local Next.js server automatically.

Install the browser once after dependencies, then run the suite:

```bash
npx playwright install chromium
npm run test:e2e
```

## Quality gates

Every completed change must pass, in order:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
npm run test:e2e
```

Formatting can be checked with `npm run format:check`. A failure caused by code must be fixed rather than documented as acceptable. Keep tests deterministic and independent of production secrets or services.
