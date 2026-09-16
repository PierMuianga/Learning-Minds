import { catalogueIds, grades } from "./catalogue";
import type { OnboardingState } from "./types";
export function validateOnboarding(state: OnboardingState): string[] {
  const errors: string[] = [];
  if (!state.role) errors.push("Choose how you will use Learning Minds.");
  if (state.displayName.trim().length < 2) errors.push("Enter the name you would like us to use.");
  if (!catalogueIds.curricula.includes(state.curriculumId!)) errors.push("Choose a curriculum.");
  const grade = grades.find(({ id }) => id === state.gradeId);
  if (!grade || grade.curriculumId !== state.curriculumId) errors.push("Choose a level for your curriculum.");
  if (!state.subjectIds.length || state.subjectIds.some((id) => !catalogueIds.subjects.includes(id))) errors.push(state.role === "teacher" ? "Choose at least one subject you teach." : "Choose at least one subject.");
  if (state.role === "student" && !catalogueIds.goals.includes(state.learningGoalMinutes)) errors.push("Choose a daily learning goal.");
  return errors;
}
