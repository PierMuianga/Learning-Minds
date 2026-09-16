export type PublicEnvironment = { appUrl: string; supabaseUrl?: string; supabaseAnonKey?: string };

export function getPublicEnvironment(environment: NodeJS.ProcessEnv = process.env): PublicEnvironment {
  const appUrl = environment.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  try {
    new URL(appUrl);
  } catch {
    throw new Error("NEXT_PUBLIC_APP_URL must be a valid absolute URL.");
  }
  const supabaseUrl = environment.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = environment.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if ((supabaseUrl && !supabaseAnonKey) || (!supabaseUrl && supabaseAnonKey)) {
    throw new Error("Both NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required.");
  }
  if (supabaseUrl) {
    try { new URL(supabaseUrl); } catch { throw new Error("NEXT_PUBLIC_SUPABASE_URL must be a valid absolute URL."); }
  }
  return { appUrl, supabaseUrl, supabaseAnonKey };
}
