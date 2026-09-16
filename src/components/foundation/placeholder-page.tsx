import { Badge, Button, Container } from "@/components/ui";

export function PlaceholderPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <main className="grid min-h-screen place-items-center px-5 py-16"><Container className="max-w-2xl text-center"><Badge>{eyebrow}</Badge><h1 className="mt-6 font-display text-5xl font-medium tracking-tight sm:text-6xl">{title}</h1><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-ink-700">{description}</p><Button href="/" variant="secondary" className="mt-9">Return home</Button></Container></main>;
}
