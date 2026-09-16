import type { CurriculumSelection, GradeSelection, LearningGoal, SubjectSelection } from "./types";

export const curricula: CurriculumSelection[] = [
  { id: "moz-national", name: "Mozambique National Curriculum", description: "National learning pathway for secondary education." },
  { id: "cambridge-international", name: "Cambridge International", description: "Internationally recognised secondary qualifications." },
];
export const grades: GradeSelection[] = [
  ...[8, 9, 10, 11, 12].map((value) => ({ id: `mz-${value}` as GradeSelection["id"], curriculumId: "moz-national" as const, name: `${value}ª Classe` })),
  { id: "cam-igcse", curriculumId: "cambridge-international", name: "IGCSE" },
];
export const subjects: SubjectSelection[] = [
  { id: "mathematics", name: "Mathematics", accent: "indigo" }, { id: "physics", name: "Physics", accent: "cyan" },
  { id: "chemistry", name: "Chemistry", accent: "amber" }, { id: "biology", name: "Biology", accent: "emerald" },
];
export const learningGoals: LearningGoal[] = [
  { label: "Casual", minutes: 10 }, { label: "Regular", minutes: 20 }, { label: "Focused", minutes: 30 }, { label: "Intensive", minutes: 45 },
];
export const catalogueIds = {
  curricula: curricula.map(({ id }) => id), grades: grades.map(({ id }) => id), subjects: subjects.map(({ id }) => id), goals: learningGoals.map(({ minutes }) => minutes),
};
