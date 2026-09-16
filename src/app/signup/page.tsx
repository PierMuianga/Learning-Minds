import { redirect } from "next/navigation";
import { AuthFrame } from "@/components/auth/auth-frame"; import { AuthForm } from "@/components/auth/auth-form";
import { getViewer } from "@/modules/auth/repository"; import { destinationFor } from "@/modules/auth/routing";
export const metadata = { title: "Create account" };
export default async function SignupPage() { const { user, profile } = await getViewer(); if (user) redirect(destinationFor(profile)); return <AuthFrame mode="signup"><AuthForm mode="signup" /></AuthFrame>; }
