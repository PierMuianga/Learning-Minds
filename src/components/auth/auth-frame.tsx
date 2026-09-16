import type { ReactNode } from "react";
import { Wordmark } from "@/components/brand/wordmark";
export function AuthFrame({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-paper lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(30rem,.92fr)]">
    <section className="relative hidden min-h-screen overflow-hidden bg-ink-950 p-12 text-paper lg:flex lg:flex-col lg:justify-between xl:p-16">
      <Wordmark inverse />
      <div className="relative z-10 max-w-xl"><p className="mb-5 text-xs font-bold tracking-[.2em] text-sun-500 uppercase">A thoughtful place to grow</p><h1 className="font-display text-6xl leading-[.98] tracking-[-.035em] text-balance xl:text-7xl">A clearer path<br />through learning.</h1><p className="mt-7 max-w-md text-lg leading-8 text-paper/65">Build knowledge with purpose, one well-made step at a time.</p></div>
      <div aria-hidden className="absolute right-[-9rem] bottom-[-9rem] size-[31rem] rounded-full border-[1px] border-paper/15"><div className="absolute inset-16 rounded-full border border-sun-500/35"/><div className="absolute inset-32 rounded-full bg-leaf-600/25"/></div>
      <p className="text-sm text-paper/45">Designed for students and the teachers who guide them.</p>
    </section>
    <section className="flex min-h-screen items-center px-5 py-10 sm:px-10 lg:px-14 xl:px-20"><div className="mx-auto w-full max-w-md"><div className="mb-14 lg:hidden"><Wordmark /></div>{children}</div></section>
  </main>;
}
