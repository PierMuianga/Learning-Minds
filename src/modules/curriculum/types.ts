export type QuestionType = "multiple_choice" | "true_false" | "numerical" | "short_text" | "structured_response";
export type Difficulty = "foundation" | "standard" | "challenge";
export type NoteBlock = { type: "introduction" | "definition" | "explanation" | "formula" | "worked_example" | "diagram" | "common_mistake" | "exam_tip" | "checkpoint"; title?: string; body: string; maths?: string[] };
export type Objective = { id: string; topicId: string; title: string };
export type Topic = { id: string; slug: string; unitId: string; order: number; title: string; summary: string; objectives: Objective[]; note?: { version: number; blocks: NoteBlock[] } };
export type Unit = { id: string; title: string; order: number; topics: Topic[] };
export type AnswerConfig = { correctOption?: string; correctBoolean?: boolean; value?: number; tolerance?: number; acceptedAnswers?: string[]; criteria?: { id: string; description: string; marks: number; acceptedAnswers?: string[] }[]; manualReview?: boolean };
export type Question = { id: string; versionId: string; version: number; topicId: string; objectiveIds: string[]; difficulty: Difficulty; marks: number; type: QuestionType; prompt: string; options?: { id: string; label: string }[]; answer: AnswerConfig; correctAnswer: string; explanation: string; calculatorAllowed: boolean; estimatedMinutes: number; source: { type: "original" | "authorised_past_paper" | "teacher_created"; name: string; rightsStatus: string } };
