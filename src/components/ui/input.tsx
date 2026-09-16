import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string };
export function Input({ label, hint, id, className = "", ...props }: Props) {
  const inputId = id ?? props.name;
  return <label className="grid gap-2 text-sm font-bold text-ink-950" htmlFor={inputId}>
    {label}
    <input id={inputId} className={`min-h-11 rounded-md border border-ink-950/20 bg-white px-3 font-normal outline-none transition focus:border-sky-500 ${className}`} {...props} />
    {hint && <span className="font-normal text-ink-500">{hint}</span>}
  </label>;
}
