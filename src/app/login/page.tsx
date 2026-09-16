import { redirect } from "next/navigation";
import { AuthFrame } from "@/components/auth/auth-frame"; import { AuthForm } from "@/components/auth/auth-form";
import { getViewer } from "@/modules/auth/repository"; import { destinationFor } from "@/modules/auth/routing";
export const metadata = { title: "Log in" };
export default async function LoginPage() { const { user, profile } = await getViewer(); if (user) redirect(destinationFor(profile)); return <AuthFrame><AuthForm mode="login" /></AuthFrame>; }
