"use client";
import { useActionState, useState } from "react";
import Link from "next/link";
import { loginAction, signupAction, type AuthActionState } from "@/modules/auth/actions";

const initial: AuthActionState = { status: "idle" };
function Field({ name, label, type = "text", error, autoComplete }: { name: string; label: string; type?: string; error?: string; autoComplete?: string }) {
  const [visible, setVisible] = useState(false); const password = type === "password";
  return <div><div className="flex items-center justify-between"><label htmlFor={name} className="text-sm font-semibold">{label}</label>{password && <button type="button" onClick={() => setVisible(!visible)} className="text-xs font-bold text-leaf-700 underline-offset-4 hover:underline">{visible ? "Hide" : "Show"}</button>}</div><input id={name} name={name} type={password && visible ? "text" : type} autoComplete={autoComplete} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} className="mt-2 min-h-12 w-full border-0 border-b border-ink-950/25 bg-transparent px-0 text-base outline-none transition focus:border-leaf-600" />{error && <p id={`${name}-error`} className="mt-2 text-sm text-coral-500">{error}</p>}</div>;
}
export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [state, action, pending] = useActionState(mode === "login" ? loginAction : signupAction, initial);
  const signup = mode === "signup";
  return <><p className="text-xs font-bold tracking-[.18em] text-leaf-700 uppercase">{signup ? "Begin your journey" : "Welcome back"}</p><h2 className="mt-3 font-display text-4xl leading-tight tracking-tight sm:text-5xl">{signup ? "Create your account." : "Continue learning."}</h2><p className="mt-4 leading-7 text-ink-500">{signup ? "A few details now, then we’ll shape Learning Minds around you." : "Log in to return to your personal Learning Minds space."}</p>
    {state.status === "confirmation" ? <div className="mt-10 border-l-2 border-leaf-600 py-2 pl-5" role="status"><h3 className="font-display text-2xl">One last step.</h3><p className="mt-2 text-ink-700">{state.message}</p><Link href="/login" className="mt-5 inline-block font-bold text-leaf-700">Go to log in →</Link></div> :
    <form action={action} className="mt-9 space-y-6" noValidate>{state.message && <div role="alert" className="border-l-2 border-coral-500 bg-coral-500/5 px-4 py-3 text-sm text-ink-700">{state.message}</div>}<Field name="email" label="Email address" type="email" autoComplete="email" error={state.errors?.email}/><Field name="password" label="Password" type="password" autoComplete={signup ? "new-password" : "current-password"} error={state.errors?.password}/>{signup && <Field name="confirmPassword" label="Confirm password" type="password" autoComplete="new-password" error={state.errors?.confirmPassword}/>}<button disabled={pending} className="mt-2 min-h-12 w-full rounded-md bg-leaf-700 px-5 font-bold text-white transition hover:bg-leaf-600 disabled:cursor-wait disabled:opacity-60">{pending ? (signup ? "Creating your account…" : "Logging you in…") : (signup ? "Create account" : "Log in")}</button></form>}
    {state.status !== "confirmation" && <p className="mt-8 text-center text-sm text-ink-500">{signup ? "Already have an account?" : "New to Learning Minds?"} <Link className="font-bold text-leaf-700 underline-offset-4 hover:underline" href={signup ? "/login" : "/signup"}>{signup ? "Log in" : "Create an account"}</Link></p>}
  </>;
}
