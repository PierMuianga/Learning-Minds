"use client";

import { Button, Container } from "@/components/ui";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="grid min-h-screen place-items-center"><Container className="max-w-xl text-center"><p className="text-sm font-bold tracking-wider text-coral-500 uppercase">Something went wrong</p><h1 className="mt-4 font-display text-5xl">We hit an unexpected pause.</h1><p className="mt-5 text-ink-700">Please try again. If the problem continues, come back in a little while.</p>{error.digest && <p className="mt-2 text-xs text-ink-500">Reference: {error.digest}</p>}<Button className="mt-8" onClick={reset}>Try again</Button></Container></main>;
}
