# Lumena foundation

Phase 1 of a premium, curriculum-based educational platform. This repository currently contains only the engineering and design-system foundation: no authentication, curriculum, learning, assessment, or gamification features are implemented.

## Start locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No database, account, or environment secret is required. Copy `.env.example` to `.env.local` only to override optional local configuration.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint with zero warnings allowed |
| `npm run typecheck` | Run strict TypeScript checks |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:e2e` | Run Playwright browser smoke tests |
| `npm run format:check` | Check formatting |

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md), [`docs/DEVELOPMENT_RULES.md`](docs/DEVELOPMENT_RULES.md), and [`docs/TESTING.md`](docs/TESTING.md) before contributing.
