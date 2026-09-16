"use server";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getPublicEnvironment } from "@/lib/env";
import { getProfile } from "./repository";
import { destinationFor } from "./routing";
import { validateLogin, validateSignup, type FieldErrors } from "./validation";

export type AuthActionState = { status: "idle" | "error" | "confirmation"; message?: string; errors?: FieldErrors };
const friendlyMessage = (message: string) => {
  const lower = message.toLowerCase();
  if (lower.includes("already") || lower.includes("registered")) return "An account already exists for this email. Try logging in instead.";
  if (lower.includes("invalid login")) return "The email or password is not correct. Please try again.";
  if (lower.includes("password")) return "That password does not meet the security requirements.";
  return "We could not complete that request. Check your connection and try again.";
};
export async function signupAction(_: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const values = { email: String(formData.get("email") ?? "").trim(), password: String(formData.get("password") ?? ""), confirmPassword: String(formData.get("confirmPassword") ?? "") };
  const errors = validateSignup(values); if (Object.keys(errors).length) return { status: "error", errors };
  try {
    const client = await createSupabaseServerClient(); const { appUrl } = getPublicEnvironment();
    const { data, error } = await client.auth.signUp({ email: values.email, password: values.password, options: { emailRedirectTo: `${appUrl}/auth/callback` } });
    if (error) return { status: "error", message: friendlyMessage(error.message) };
    if (!data.session) return { status: "confirmation", message: "Check your inbox to confirm your email, then return to log in." };
  } catch { return { status: "error", message: "Learning Minds is not connected yet. Ask the project owner to check the Supabase configuration." }; }
  redirect("/onboarding");
}
export async function loginAction(_: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const values = { email: String(formData.get("email") ?? "").trim(), password: String(formData.get("password") ?? "") };
  const errors = validateLogin(values); if (Object.keys(errors).length) return { status: "error", errors };
  let destination = "/onboarding";
  try { const client = await createSupabaseServerClient(); const { data, error } = await client.auth.signInWithPassword(values); if (error || !data.user) return { status: "error", message: friendlyMessage(error?.message ?? "") }; destination = destinationFor(await getProfile(data.user.id)); }
  catch { return { status: "error", message: "We could not reach Learning Minds. Check your connection and try again." }; }
  redirect(destination);
}
export async function logoutAction() { try { const client = await createSupabaseServerClient(); await client.auth.signOut(); } finally { redirect("/login"); } }
