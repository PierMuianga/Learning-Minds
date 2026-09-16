import { redirect } from "next/navigation";
import { AppShell } from "@/components/app/app-shell";
import { getViewer } from "@/modules/auth/repository";
import { destinationFor } from "@/modules/auth/routing";
import { getLearningContext } from "@/modules/onboarding/repository";
export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const { user, profile } = await getViewer();
  if (!user) redirect("/login");
  if (!profile?.onboardingCompleted || profile.role !== "student") redirect(destinationFor(profile));
  const data = await getLearningContext(profile);
  return <AppShell role="student" name={profile.displayName ?? "Learner"} context={`${data.curriculum} · ${data.grade}`}>{children}</AppShell>;
}
