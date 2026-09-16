import type { HTMLAttributes } from "react";

export function Surface({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-lg border border-ink-950/10 bg-paper shadow-soft ${className}`} {...props} />;
}
