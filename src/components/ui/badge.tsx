import type { HTMLAttributes } from "react";

export function Badge({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={`inline-flex items-center rounded-full bg-leaf-100 px-3 py-1 text-xs font-bold tracking-wide text-leaf-700 uppercase ${className}`} {...props} />;
}
