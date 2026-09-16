import { Badge, Button, Container, Progress, Section, Surface } from "@/components/ui";

const subjects = [
  { name: "Mathematics", detail: "Algebraic foundations", color: "bg-sky-500", progress: 72 },
  { name: "Science", detail: "Forces and motion", color: "bg-leaf-600", progress: 48 },
  { name: "Languages", detail: "Reading and response", color: "bg-coral-500", progress: 61 },
];

export default function Home() {
  return <main className="overflow-hidden">
    <header className="border-b border-ink-950/10 bg-paper/80">
      <Container className="flex h-18 items-center justify-between">
        <a href="#top" className="font-display text-2xl font-semibold tracking-tight">Lumena<span className="text-coral-500">.</span></a>
        <nav aria-label="Primary navigation" className="flex items-center gap-1 sm:gap-3">
          <Button href="/login" variant="quiet" className="hidden sm:inline-flex">Log in</Button>
          <Button href="/signup">Start learning</Button>
        </nav>
      </Container>
    </header>

    <Section id="top" className="relative pb-20 sm:pb-28">
      <div aria-hidden className="absolute -top-28 right-[-9rem] size-80 rounded-full border-[3rem] border-sun-100 opacity-70 sm:right-[-4rem] sm:size-120" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.06fr_.94fr] lg:gap-20">
        <div>
          <Badge>Built for curious minds</Badge>
          <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[.98] font-medium tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl">Every learner deserves a clear way forward.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ink-700">One thoughtful place to learn, practise, and understand progress—designed for students and the teachers who guide them.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/signup" className="sm:min-w-38">Start learning</Button>
            <Button href="#preview" variant="secondary" className="sm:min-w-38">See the preview</Button>
          </div>
          <p className="mt-5 text-sm text-ink-500">Foundation preview · No account required yet</p>
        </div>

        <Surface className="relative p-4 sm:p-6" aria-label="Product preview">
          <div className="mb-6 flex items-center justify-between border-b border-ink-950/10 pb-4">
            <div><p className="text-xs font-bold tracking-wider text-ink-500 uppercase">Today</p><p className="mt-1 font-display text-2xl font-semibold">Good afternoon, Amara</p></div>
            <div className="grid size-10 place-items-center rounded-full bg-sun-100 font-bold text-ink-950" aria-hidden>A</div>
          </div>
          <div className="grid gap-3">
            {subjects.map((subject, index) => <div key={subject.name} className="grid grid-cols-[auto_1fr] gap-4 rounded-md border border-ink-950/10 bg-white p-4">
              <span className={`mt-1 size-3 rounded-full ${subject.color}`} aria-hidden />
              <div><div className="flex items-start justify-between gap-4"><div><h2 className="font-bold">{subject.name}</h2><p className="text-sm text-ink-500">{subject.detail}</p></div><span className="font-display text-xl text-ink-500">0{index + 1}</span></div><div className="mt-4"><Progress value={subject.progress} label="Topic progress" /></div></div>
            </div>)}
          </div>
        </Surface>
      </Container>
    </Section>

    <Section id="preview" className="bg-ink-950 text-paper">
      <Container className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div><p className="text-xs font-bold tracking-[.18em] text-sun-500 uppercase">A connected journey</p><h2 className="mt-4 font-display text-4xl leading-tight font-medium sm:text-5xl">Quiet focus. Joyful discovery. One learning story.</h2></div>
        <div className="grid gap-px overflow-hidden rounded-lg bg-white/15 sm:grid-cols-2">
          <article className="bg-ink-950 p-7 sm:p-9"><span className="text-3xl" aria-hidden>✦</span><h3 className="mt-8 font-display text-2xl">Revision mode</h3><p className="mt-3 leading-7 text-paper/65">A calm, considered space for focused study and meaningful practice.</p></article>
          <article className="bg-ink-950 p-7 sm:p-9"><span className="text-3xl text-sun-500" aria-hidden>●</span><h3 className="mt-8 font-display text-2xl">Learning mode</h3><p className="mt-3 leading-7 text-paper/65">A playful path that makes building knowledge feel rewarding.</p></article>
        </div>
      </Container>
    </Section>

    <footer className="bg-paper py-8"><Container className="flex flex-col justify-between gap-3 text-sm text-ink-500 sm:flex-row"><p>© {new Date().getFullYear()} Lumena. Foundation preview.</p><p>Made for learning, built to last.</p></Container></footer>
  </main>;
}
