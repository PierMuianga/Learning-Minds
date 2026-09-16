export type UserRole = "student" | "teacher";
export type PreferredLanguage = "en" | "pt";

export type Profile = {
  id: string;
  userId: string;
  role: UserRole | null;
  displayName: string | null;
  preferredLanguage: PreferredLanguage;
  country: string | null;
  onboardingCompleted: boolean;
};

export type CurriculumSelection = { id: "moz-national" | "cambridge-international"; name: string; description: string };
export type GradeSelection = { id: "mz-8" | "mz-9" | "mz-10" | "mz-11" | "mz-12" | "cam-igcse"; curriculumId: CurriculumSelection["id"]; name: string };
export type SubjectSelection = { id: "mathematics" | "physics" | "chemistry" | "biology"; name: string; accent: string };
export type LearningGoal = { minutes: 10 | 20 | 30 | 45; label: "Casual" | "Regular" | "Focused" | "Intensive" };

export type OnboardingState = {
  role: UserRole | null; displayName: string; preferredLanguage: PreferredLanguage; country: "MZ";
  curriculumId: CurriculumSelection["id"] | null; gradeId: GradeSelection["id"] | null;
  subjectIds: SubjectSelection["id"][]; learningGoalMinutes: LearningGoal["minutes"];
};
