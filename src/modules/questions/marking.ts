import type { Question } from "@/modules/curriculum/types";
export type MarkResult = { marksAwarded: number; maxMarks: number; correctness: "correct" | "incorrect" | "partial" | "self_review"; feedback: string };
const normalise = (value: unknown) => String(value ?? "").toLowerCase().replace(/\s+/g, "").replace(/−/g, "-");
export function markQuestion(question: Question, submitted: unknown): MarkResult {
  let marks = 0;
  if (question.type === "multiple_choice") marks = submitted === question.answer.correctOption ? question.marks : 0;
  if (question.type === "true_false") marks = String(submitted) === String(question.answer.correctBoolean) ? question.marks : 0;
  if (question.type === "numerical") { const value = Number(submitted); const expected = question.answer.value!; marks = Number.isFinite(value) && Math.abs(value - expected) <= (question.answer.tolerance ?? 0) ? question.marks : 0; }
  if (question.type === "short_text") marks = question.answer.acceptedAnswers?.some((answer) => normalise(answer) === normalise(submitted)) ? question.marks : 0;
  if (question.type === "structured_response") {
    if (question.answer.manualReview) return { marksAwarded: 0, maxMarks: question.marks, correctness: "self_review", feedback: "Compare your working with the mark scheme and award each criterion you demonstrated." };
  }
  return { marksAwarded: marks, maxMarks: question.marks, correctness: marks === question.marks ? "correct" : marks > 0 ? "partial" : "incorrect", feedback: marks === question.marks ? "Correct." : "Not yet. Review the worked answer." };
}
