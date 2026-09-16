import type { Question } from "@/modules/curriculum/types";
import { markQuestion } from "@/modules/questions/marking";

export type AttemptEvidence = { userId: string; questionVersionId: string; submittedAnswer: unknown; marksAwarded: number; maximumMarks: number; correctness: string; submittedAt: string; context: "practice" | "exam" };
export function createAttemptEvidence(userId: string, question: Question, answer: unknown, context: "practice" | "exam", now = new Date()): AttemptEvidence {
  const result = markQuestion(question, answer);
  return { userId, questionVersionId: question.versionId, submittedAnswer: answer, marksAwarded: result.marksAwarded, maximumMarks: result.maxMarks, correctness: result.correctness, submittedAt: now.toISOString(), context };
}
export function nextPracticeIndex(current: number, total: number) { return Math.min(current + 1, Math.max(0, total - 1)); }
export function scoreExam(items: { question: Question; answer: unknown }[]) { const rows = items.map(({question,answer}) => ({ questionId: question.id, ...markQuestion(question, answer) })); return { earned: rows.reduce((n,r)=>n+r.marksAwarded,0), maximum: rows.reduce((n,r)=>n+r.maxMarks,0), rows }; }
export const canRevealExamFeedback = (status: "created" | "in_progress" | "submitted" | "expired") => status === "submitted";
