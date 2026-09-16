import {ExamResults} from "@/components/assessment/exam-results";import {SubjectHeader} from "@/components/app/subject-header";
export default function ResultsPage(){return <><SubjectHeader title="Exam results" description="Review your score, timing and every answer."/><div className="mx-auto max-w-5xl px-5 py-10 sm:px-9"><ExamResults/></div></>}
