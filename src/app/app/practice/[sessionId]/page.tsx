import { PracticePlayer } from "@/components/assessment/practice-player";
export default async function PracticePage({searchParams}:{searchParams:Promise<{questions?:string}>}){const p=await searchParams;return <PracticePlayer ids={(p.questions??"").split(",").filter(Boolean)}/>}
