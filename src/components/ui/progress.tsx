type Props = { value: number; label: string };
export function Progress({ value, label }: Props) {
  const safeValue = Math.min(100, Math.max(0, value));
  return <div className="grid gap-2">
    <div className="flex justify-between text-xs font-bold"><span>{label}</span><span>{safeValue}%</span></div>
    <div className="h-2 overflow-hidden rounded-full bg-leaf-100" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={safeValue}>
      <div className="h-full rounded-full bg-leaf-600 transition-all duration-normal ease-brand" style={{ width: `${safeValue}%` }} />
    </div>
  </div>;
}
