# Question engine

`questions` is stable identity and subject/topic ownership; `question_versions` is immutable assessment content. `question_objectives` is many-to-many, so one item can evidence several canonical learning objectives. Attempts always reference the exact `question_version_id` answered. A separately versioned `mark_schemes` row supports future changes without rewriting evidence.

Phase 3 supports multiple choice, true/false, numerical, controlled short text and structured response. MCQ and boolean answers compare exact values; numerical answers use configured absolute tolerance; short text uses normalised allow-lists. Structured responses are self-review when criteria cannot be reliably machine-marked. We never imply AI certainty.

Every demo question is Learning Minds original. Source fields support `original`, `authorised_past_paper` and `teacher_created`, plus JSON metadata for name, year, session, paper and question number and an explicit rights status. Draft versions are not readable through public learner policies.
