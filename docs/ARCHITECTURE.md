# Architecture

## Modular monolith

Learning Minds is one Next.js App Router deployment. Routes in `src/app` compose features; reusable presentation lives in `src/components`; infrastructure in `src/lib`; domain contracts, validation, actions and repositories in `src/modules`. React components never create database clients or submit ownership IDs.

## Phase 2 request path

The Next.js `proxy.ts` refreshes Supabase cookie sessions using `@supabase/ssr`. Server Components resolve the verified user with `auth.getUser()`, load that user's RLS-protected profile through the auth repository, and redirect by onboarding state and role. Server Actions own authentication and writes. Onboarding catalogue values are stable IDs in `modules/onboarding/catalogue.ts`, ready to become foreign keys when the curriculum graph arrives.

Browser state makes the multi-step onboarding experience fluid, but completion is authoritative only after the server validates and persists every required value. The final profile update happens last. Student and Teacher shells read persisted context on the server.

## Boundaries and future work

Auth and onboarding are implemented. Curriculum, content, questions, assessment, learning, progress, gamification, classrooms and games remain boundaries only. Phase 2 does not simulate those products. A future curriculum graph will be Curriculum → Grade/Qualification → Subject → Unit → Topic → Learning Objective and replace the deliberately small onboarding catalogue without changing its stable-ID approach.
