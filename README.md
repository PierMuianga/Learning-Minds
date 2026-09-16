# Learning Minds

Learning Minds is a premium, curriculum-aware learning platform. Phase 2 provides Supabase authentication, private onboarding persistence, role-aware routing, and polished Student and Teacher shells. Lessons, revision, assessments, classrooms and gamification remain deliberately outside this phase.

## Local setup

1. Install Node.js 20.9+ and run `npm install`.
2. Create a Supabase project and apply `supabase/migrations/202609160001_phase_2_identity.sql` in its SQL Editor (or run `supabase db push` with the Supabase CLI).
3. Copy `.env.example` to `.env.local` and provide the public values from **Supabase → Project Settings → API**.
4. Set the Auth site URL to `http://localhost:3000` and add `http://localhost:3000/auth/callback` as a redirect URL.
5. Run `npm run dev` and open http://localhost:3000.

No service-role key is required or accepted by the application. See [Authentication](docs/AUTHENTICATION.md) and [Database](docs/DATABASE.md) for the full setup.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local Next.js server |
| `npm run typecheck` | Strict TypeScript |
| `npm run lint` | ESLint with zero warnings |
| `npm run test` | Vitest unit tests |
| `npm run build` | Production build |
| `npm run test:e2e` | Playwright journeys |
