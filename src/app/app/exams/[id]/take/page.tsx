import { ExamRunner } from "@/components/assessment/exam-runner";
export default async function TakeExam({searchParams}:{searchParams:Promise<{count?:string;duration?:string}>}){const p=await searchParams;return <ExamRunner count={Number(p.count)||8} duration={Number(p.duration)||20}/>}
