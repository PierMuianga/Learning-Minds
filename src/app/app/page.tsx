import { redirect } from "next/navigation";
import { StudentHome } from "@/components/app/student-home";
import { getViewer } from "@/modules/auth/repository";
import { getLearningContext } from "@/modules/onboarding/repository";
export const metadata = { title: "Home" };
export default async function StudentAppPage() { const { profile } = await getViewer(); if (!profile) redirect("/login"); const data = await getLearningContext(profile); return <StudentHome data={data}/>; }
