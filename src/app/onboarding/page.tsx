import { redirect } from "next/navigation"; import { OnboardingFlow } from "@/components/onboarding/onboarding-flow"; import { getViewer } from "@/modules/auth/repository"; import { destinationFor } from "@/modules/auth/routing";
export const metadata = { title: "Your learning journey" };
export default async function OnboardingPage() { const { user, profile } = await getViewer(); if (!user) redirect("/login"); if (profile?.onboardingCompleted) redirect(destinationFor(profile)); return <OnboardingFlow />; }
