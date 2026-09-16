import type { UserRole } from "@/modules/onboarding/types";
export function destinationFor(profile: { role: UserRole | null; onboardingCompleted: boolean } | null) {
  if (!profile?.onboardingCompleted || !profile.role) return "/onboarding";
  return profile.role === "teacher" ? "/teacher" : "/app";
}
export function mayAccess(pathname: string, profile: { role: UserRole | null; onboardingCompleted: boolean } | null) {
  if (!profile?.onboardingCompleted) return pathname === "/onboarding";
  return profile.role === "teacher" ? pathname.startsWith("/teacher") : pathname.startsWith("/app") || pathname.startsWith("/profile");
}
