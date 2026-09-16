import "server-only";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Profile } from "@/modules/onboarding/types";

export async function getCurrentUser() {
  try { const client = await createSupabaseServerClient(); const { data } = await client.auth.getUser(); return data.user ?? null; } catch { return null; }
}
export async function getProfile(userId: string): Promise<Profile | null> {
  const client = await createSupabaseServerClient();
  const { data, error } = await client.from("profiles").select("id,user_id,role,display_name,preferred_language,country,onboarding_completed").eq("user_id", userId).maybeSingle();
  if (error || !data) return null;
  return { id: data.id, userId: data.user_id, role: data.role, displayName: data.display_name, preferredLanguage: data.preferred_language, country: data.country, onboardingCompleted: data.onboarding_completed };
}
export async function getViewer() { const user = await getCurrentUser(); return { user, profile: user ? await getProfile(user.id) : null }; }
