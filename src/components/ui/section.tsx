import type { HTMLAttributes } from "react";
export function Section({ className = "", ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={`py-16 sm:py-24 ${className}`} {...props} />;
}
