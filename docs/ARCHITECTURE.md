# Architecture

## Shape: modular monolith

Lumena is one deployable Next.js application with explicit domain modules. A modular monolith keeps transactions, development, and operations simple while the product model is still emerging. Microservices must not be introduced without measured scaling or organisational need.

`src/app` owns routes and composition, `src/components` owns reusable presentation, `src/lib` owns application-wide infrastructure, and `src/modules` contains business domains. UI code calls application/domain APIs; it never performs arbitrary database operations. A module may expose a narrow public API but callers must not import its internal persistence implementation.

## Domain boundaries

The prepared boundaries are auth, curriculum, content, questions, assessment, learning, progress, gamification, classrooms, and games. AI integrations, when commissioned, will live behind a separate advisory boundary: generated output must never become authoritative curriculum, marking, permissions, or reward logic without validated domain workflows.

## Curriculum graph

Curricula will be data, not conditional application logic. A shared graph will model curricula, stages, subjects, topics, and learning objectives. Relationships and metadata—not branches such as `if curriculum === ...`—will express differences. Content and questions may map to multiple learning objectives.

## Shared Question Engine

One question bank and engine will serve revision practice, lessons, timed exams, teacher assignments, and games. Games cannot maintain a parallel question store. Delivery contexts may configure selection and presentation while scoring and evidence remain consistent.

## Revision and Learning Hubs

The two hubs will have distinct interaction modes but consume the same curriculum graph, question bank, attempts, mastery state, and progress projections. They are experiences over shared domains, not separate data silos.

## Persistence boundaries

PostgreSQL is the intended durable store and Supabase is the intended future integration for authentication, database access, and storage. Neither is connected in Phase 1. Future adapters belong behind module repositories/services so providers do not leak into UI components.

Published content and questions will use immutable versions. An edit creates a new version; historical attempts retain the exact version they used. Attempts are append-only evidence, while mastery is a recomputable projection whose algorithm may evolve. XP and similar rewards will use an auditable event ledger rather than mutable totals as the source of truth.
