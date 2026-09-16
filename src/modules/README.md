# Domain modules

Each directory owns a future domain boundary. Modules expose deliberate public APIs and must not reach into another module's internals. They are placeholders only in Phase 1.

- `auth` — identity and access integration boundary
- `curriculum` — curriculum-neutral graph and learning objectives
- `content` — versioned educational content
- `questions` — reusable question engine and question bank
- `assessment` — exams, assignments, and marking workflows
- `learning` — lesson journeys consuming shared domains
- `progress` — attempts, mastery projections, and learner progress
- `gamification` — event-ledger rewards and engagement mechanics
- `classrooms` — teacher-managed groups and assignments
- `games` — game experiences consuming the question engine

No feature implementation belongs here until its phase is explicitly commissioned.
