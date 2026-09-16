import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = { children: ReactNode; variant?: "primary" | "secondary" | "quiet"; className?: string };
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = CommonProps & { href: string };

const styles = {
  primary: "bg-leaf-700 text-white hover:bg-leaf-600 shadow-soft",
  secondary: "border border-ink-950/20 bg-paper text-ink-950 hover:border-ink-950/40",
  quiet: "text-ink-700 hover:bg-ink-950/5",
};

export function Button(props: ButtonProps | LinkProps) {
  if ("href" in props && props.href) {
    const { children, variant = "primary", className = "", href } = props;
    const classes = `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-bold transition duration-normal ease-brand ${styles[variant]} ${className}`;
    return <Link className={classes} href={href}>{children}</Link>;
  }
  const { children, variant = "primary", className = "", ...buttonProps } = props as ButtonProps;
  const classes = `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-bold transition duration-normal ease-brand ${styles[variant]} ${className}`;
  return <button className={classes} {...buttonProps}>{children}</button>;
}
