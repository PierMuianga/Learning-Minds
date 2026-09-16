# Assessment and sessions

Practice and exam sessions store an ordered list of exact question versions. Each submitted response creates attempt evidence with owner, version, JSON answer, awarded/maximum marks, correctness, timestamp and optional duration/context. Historical attempts are never removed when mastery changes.

Practice reveals deterministic feedback after each answer. Timed exams retain answers, navigation state and flags but suppress correctness, answers, mark schemes and mastery until submission. Early submission with unanswered questions requires confirmation. Submission marks deterministic items, stores attempts and unlocks score, topic performance, timing and question review.

All learner-owned tables use Supabase RLS against `auth.uid()`. Canonical rows are authenticated-readable; version tables require `published`. Vercel needs the existing Supabase environment variables. Apply both migrations in timestamp order in Supabase before enabling production persistence. The competition UI uses local browser persistence as a resilient demo adapter; replace this adapter with server actions targeting the same schema for multi-device production use.
