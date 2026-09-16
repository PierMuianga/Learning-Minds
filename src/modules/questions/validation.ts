import type { Question } from "@/modules/curriculum/types";
export function validateQuestion(question: Question): string[] {
  const errors: string[] = [];
  if (!question.objectiveIds.length) errors.push("At least one objective is required");
  if (question.marks < 1) errors.push("Marks must be positive");
  if (question.type === "multiple_choice" && (!question.options?.length || !question.answer.correctOption)) errors.push("MCQ options and a correct option are required");
  if (question.type === "numerical" && typeof question.answer.value !== "number") errors.push("A numerical answer is required");
  return errors;
}
