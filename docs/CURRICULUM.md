# Curriculum core

Phase 3 uses one hierarchy: `curricula → courses_or_levels → subjects → units → topics → learning_objectives`. Stable text IDs keep seeded content portable. The first seed is explicitly a **competition demo subset**, not a claim of complete official Mozambique curriculum coverage: Mozambique National Curriculum / 10ª Classe / Mathematics, with Algebra and Geometry & Trigonometry units and six topics.

Revision content belongs to a topic through `content_items`. Immutable `content_versions` contain typed JSON blocks (definition, formula, example, warning, tip and checkpoint). Publishing a revision creates a new row and changes `current_version_id`; published rows are never silently overwritten.

The developer-readable demo source is `src/modules/curriculum/catalogue.ts`. Production deployments apply `supabase/migrations/202609160002_phase_3_curriculum_assessment.sql`, then may import the repository content through a trusted seed process.
