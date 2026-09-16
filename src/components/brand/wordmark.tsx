import Link from "next/link";
export function Wordmark({ inverse = false }: { inverse?: boolean }) { return <Link href="/" className={`inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight ${inverse ? "text-paper" : "text-ink-950"}`}><span className="grid size-8 place-items-center rounded-full border border-current/25 text-sm">LM</span>Learning Minds</Link>; }
