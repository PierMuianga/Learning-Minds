# Authentication

## Configuration

Create a Supabase project. In **Project Settings → API**, copy the Project URL to `NEXT_PUBLIC_SUPABASE_URL` and the publishable/legacy anon public key to `NEXT_PUBLIC_SUPABASE_ANON_KEY`. These are designed to be public; RLS protects data. Never add the service-role key.

Set **Authentication → URL Configuration → Site URL** to the deployed production origin. Add exact redirect URLs for `http://localhost:3000/auth/callback`, the production `https://YOUR-DOMAIN/auth/callback`, and any Vercel preview callback pattern you deliberately support. Add the corresponding origins to `NEXT_PUBLIC_APP_URL` per environment.

Email/password authentication must be enabled. Email confirmation is supported: signup supplies `/auth/callback`, the callback exchanges the code for cookie-backed session data, then onboarding begins. If confirmation is disabled for a demo project, signup receives a session and goes directly to onboarding.

## Flows and authorization

Signup validates email, an 8+ character letter-and-number password, and confirmation before Supabase. A database trigger creates the profile and preferences. Login fetches the private profile and routes incomplete users to `/onboarding`, completed students to `/app`, and completed teachers to `/teacher`. Each protected page re-verifies the session server-side and enforces role; logout revokes the session and returns to `/login`.

`proxy.ts` exists only for cookie refresh. Authorization never trusts cookie contents alone: `auth.getUser()` validates the identity with Supabase. Error copy maps failures to safe product language rather than revealing backend messages.

## Vercel

In **Vercel → Project → Settings → Environment Variables**, add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `NEXT_PUBLIC_APP_URL` for Production, Preview and Development as appropriate. Redeploy after changing values.
