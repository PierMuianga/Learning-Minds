import "server-only"; import { createSupabaseServerClient } from "@/lib/supabase/server"; import { curricula, grades, subjects } from "./catalogue"; import type { Profile } from "./types";
export type LearningContext = { profile: Profile; curriculum: string; grade: string; subjects: string[]; goalMinutes: number | null };
export async function getLearningContext(profile: Profile): Promise<LearningContext> {
  const client = await createSupabaseServerClient();
  const [{ data: course }, { data: selected }, { data: preference }] = await Promise.all([client.from("user_course_selections").select("curriculum_id,grade_id").eq("user_id", profile.userId).maybeSingle(), client.from("user_subject_selections").select("subject_id").eq("user_id", profile.userId), client.from("user_preferences").select("learning_goal_minutes").eq("user_id", profile.userId).maybeSingle()]);
  return { profile, curriculum: curricula.find((v) => v.id === course?.curriculum_id)?.name ?? "Curriculum not selected", grade: grades.find((v) => v.id === course?.grade_id)?.name ?? "Level not selected", subjects: (selected ?? []).map((row: { subject_id: string }) => subjects.find((subject) => subject.id === row.subject_id)?.name).filter((value: string | undefined): value is string => !!value), goalMinutes: preference?.learning_goal_minutes ?? null };
}
