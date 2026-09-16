# Database

## Deployment

This repository is connected to Supabase through the official GitHub integration. The `main` branch is the production database branch, and committed migrations deploy in chronological order from `supabase/migrations/`.

For local development, link the Supabase CLI (`supabase link --project-ref YOUR_REF`) and run `supabase db push`. All future schema changes must be added as new, timestamped files in `supabase/migrations/`; do not rewrite migrations that have already deployed. Do not casually edit the production schema through the Supabase dashboard, because manual changes bypass repository history and can make production drift from the declared migrations.

The current migration history is:

1. `202609160001_phase_2_identity.sql`
2. `202609160002_phase_3_curriculum_assessment.sql`

## Tables

- `profiles`: private identity extension with UUID, auth user reference, nullable student/teacher role until onboarding, display name, language, ISO-like country code, completion flag and timestamps.
- `user_preferences`: one row per user for language and optional 10/20/30/45-minute learning goal.
- `user_course_selections`: stable curriculum and grade IDs with database checks that prevent mismatched pathways.
- `user_subject_selections`: many subject selections per user using stable subject IDs.

The `on_auth_user_created` security-definer trigger creates private profile/preference rows. Updated timestamps are maintained by a trigger. Onboarding writes profile, preference, course and subjects, then sets `onboarding_completed` last.

## Row Level Security

RLS is enabled on all four tables. Authenticated users can select/update only the profile and preferences whose `user_id = auth.uid()`. Course and subject rows allow only owner select/insert/delete. Anonymous table privileges are revoked. There are no wildcard, public-read, or client-supplied ownership policies, and the browser never receives a service-role secret.
