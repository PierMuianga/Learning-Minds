import { Badge, Button, Container } from "@/components/ui";
import { Wordmark } from "@/components/brand/wordmark";
import { LearningPath } from "@/components/visuals/learning-path";

export default function Home() {
  return <main className="overflow-hidden">
    <header className="relative z-20 border-b border-ink-950/10 bg-paper/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between"><Wordmark /><nav aria-label="Primary navigation" className="flex items-center gap-2"><Button href="/login" variant="quiet" className="hidden sm:inline-flex">Log in</Button><Button href="/signup">Start learning <span aria-hidden className="ml-2">→</span></Button></nav></Container>
    </header>

    <section id="top" className="diagram-grid relative py-14 sm:py-20 lg:min-h-[760px] lg:py-24">
      <div aria-hidden className="absolute -top-64 right-[-14rem] size-[44rem] rounded-full border border-leaf-700/10" />
      <div aria-hidden className="absolute -top-44 right-[-6rem] size-[30rem] rounded-full border border-sun-500/25" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div><Badge className="normal-case tracking-normal">A learning system built around you</Badge><h1 className="mt-7 max-w-2xl font-display text-5xl leading-[.94] font-medium tracking-[-.045em] text-balance sm:text-6xl lg:text-[5rem]">Learning that knows where you’re going.</h1><p className="mt-7 max-w-lg text-lg leading-8 text-ink-700">Understand what matters, follow a clear path and build lasting confidence—from first lesson to exam day.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="/signup" className="sm:min-w-40">Start learning <span aria-hidden className="ml-2">→</span></Button><Button href="#explore" variant="secondary" className="sm:min-w-48">Explore Learning Minds</Button></div><ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink-500">{["National curriculum", "Exam preparation", "Adaptive learning"].map(item => <li key={item} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-leaf-600" />{item}</li>)}</ul></div>

        <div className="relative mx-auto min-h-[420px] w-full max-w-2xl sm:min-h-[510px]" aria-label="Learning journey preview">
          <div className="absolute inset-x-0 top-8 rounded-lg border border-ink-950/12 bg-paper p-5 shadow-lifted sm:inset-x-10 sm:p-7"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold text-leaf-700">Current learning journey</p><h2 className="mt-2 text-xl font-bold sm:text-2xl">Quadratic equations</h2><p className="mt-1 text-sm text-ink-500">Mathematics · Algebra</p></div><span className="grid size-12 place-items-center rounded-full border-4 border-leaf-100 text-xs font-bold">72%</span></div><LearningPath className="mt-2 w-full" /><div className="flex items-center justify-between border-t border-ink-950/10 pt-4"><span className="text-sm text-ink-500">3 of 5 concepts connected</span><span className="text-sm font-bold text-leaf-700">Continue →</span></div></div>
          <div className="absolute bottom-2 left-0 rounded-md border border-ink-950/10 bg-white px-4 py-3 shadow-soft sm:left-2"><p className="text-xs text-ink-500">Learning rhythm</p><p className="mt-1 font-bold"><span className="text-sun-500">●</span> 3 day streak</p></div>
          <div className="absolute right-0 bottom-10 rounded-md border border-ink-950/10 bg-ink-950 px-4 py-3 text-paper shadow-soft"><p className="text-xs text-paper/55">Next lesson</p><p className="mt-1 text-sm font-bold">Completing the square</p></div>
          <div className="absolute top-0 right-2 rounded-md bg-sun-500 px-3 py-2 text-xs font-extrabold text-ink-950 sm:right-0">+20 XP</div>
        </div>
      </Container>
    </section>

    <section id="explore" className="bg-ink-950 py-18 text-paper sm:py-24"><Container><div className="mb-12 grid gap-5 lg:grid-cols-2 lg:items-end"><div><p className="text-sm font-bold text-sun-500">Two modes. One connected journey.</p><h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">Focus when it matters. Explore when curiosity leads.</h2></div><p className="max-w-lg leading-7 text-paper/60 lg:justify-self-end">Move naturally between exam-ready revision and interactive learning without losing sight of the bigger picture.</p></div><div className="grid overflow-hidden rounded-lg border border-paper/15 lg:grid-cols-2">
        <article className="border-b border-paper/15 p-6 sm:p-9 lg:border-r lg:border-b-0"><div className="flex items-center justify-between"><span className="text-sm font-bold text-sun-500">REVISE</span><span className="text-xs text-paper/45">Calm · Focused · Exam-ready</span></div><h3 className="mt-7 text-2xl font-bold">Make every review count.</h3><div className="mt-7 rounded-md bg-paper p-5 text-ink-950"><p className="text-xs font-bold text-violet-500">MATHEMATICS · NOTE 04</p><p className="mt-3 font-semibold">A turning point occurs where the gradient is equal to zero.</p><div className="mt-5 flex items-center justify-between border-t border-ink-950/10 pt-4 text-xs"><span>Mastery</span><strong>72%</strong></div><div className="mt-2 h-1.5 rounded-full bg-leaf-100"><div className="h-full w-[72%] rounded-full bg-violet-500" /></div></div></article>
        <article className="diagram-grid-inverse p-6 sm:p-9"><div className="flex items-center justify-between"><span className="text-sm font-bold text-sun-500">LEARN</span><span className="text-xs text-paper/45">Interactive · Adaptive · Rewarding</span></div><h3 className="mt-7 text-2xl font-bold">See knowledge connect.</h3><div className="relative mt-4"><LearningPath variant="dark" className="w-full"/><div className="absolute right-2 bottom-4 rounded-md border border-paper/15 bg-ink-950 px-3 py-2 text-xs"><span className="text-sun-500">Challenge</span> · Graph the curve</div></div></article>
      </div></Container></section>
    <footer className="bg-paper py-8"><Container className="flex flex-col justify-between gap-3 text-sm text-ink-500 sm:flex-row"><Wordmark /><p>© {new Date().getFullYear()} Learning Minds. Made for curious minds.</p></Container></footer>
  </main>;
}
