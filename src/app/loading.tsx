import { Container } from "@/components/ui";
export default function Loading() { return <main className="grid min-h-screen place-items-center" aria-busy="true" aria-live="polite"><Container className="max-w-sm text-center"><div className="mx-auto size-8 animate-pulse rounded-full bg-leaf-600" /><p className="mt-4 font-bold text-ink-700">Preparing your page…</p></Container></main>; }
