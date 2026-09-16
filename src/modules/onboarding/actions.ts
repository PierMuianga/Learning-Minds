"use server";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { OnboardingState } from "./types"; import { validateOnboarding } from "./validation";
export async function completeOnboarding(state: OnboardingState): Promise<{ error?: string }> {
  const errors = validateOnboarding(state); if (errors.length) return { error: errors[0] };
  try {
    const client = await createSupabaseServerClient(); const { data: auth } = await client.auth.getUser(); if (!auth.user) return { error: "Your session has expired. Please log in again." }; const uid = auth.user.id;
    const { error: profileError } = await client.from("profiles").update({ role: state.role, display_name: state.displayName.trim(), preferred_language: state.preferredLanguage, country: state.country }).eq("user_id", uid);
    if (profileError) throw profileError;
    const { error: prefError } = await client.from("user_preferences").upsert({ user_id: uid, learning_goal_minutes: state.role === "student" ? state.learningGoalMinutes : null, preferred_language: state.preferredLanguage }, { onConflict: "user_id" }); if (prefError) throw prefError;
    await client.from("user_course_selections").delete().eq("user_id", uid); await client.from("user_subject_selections").delete().eq("user_id", uid);
    const { error: courseError } = await client.from("user_course_selections").insert({ user_id: uid, curriculum_id: state.curriculumId, grade_id: state.gradeId }); if (courseError) throw courseError;
    const { error: subjectError } = await client.from("user_subject_selections").insert(state.subjectIds.map((subject_id) => ({ user_id: uid, subject_id }))); if (subjectError) throw subjectError;
    const { error: completeError } = await client.from("profiles").update({ onboarding_completed: true }).eq("user_id", uid); if (completeError) throw completeError;
  } catch { return { error: "We could not save your choices. Nothing was marked complete—please try again." }; }
  redirect(state.role === "teacher" ? "/teacher" : "/app");
}
