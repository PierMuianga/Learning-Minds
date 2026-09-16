export type PublicEnvironment = {
  siteUrl: string;
  supabaseUrl?: string;
  supabasePublishableKey?: string;
};

export function getPublicEnvironment(
  environment: Record<string, string | undefined> = process.env,
): PublicEnvironment {
  const siteUrl = environment.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  try {
    new URL(siteUrl);
  } catch {
    throw new Error("NEXT_PUBLIC_SITE_URL must be a valid absolute URL.");
  }
  const supabaseUrl = environment.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey =
    environment.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (
    (supabaseUrl && !supabasePublishableKey) ||
    (!supabaseUrl && supabasePublishableKey)
  ) {
    throw new Error(
      "Both NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY are required.",
    );
  }
  if (supabaseUrl) {
    try {
      new URL(supabaseUrl);
    } catch {
      throw new Error("NEXT_PUBLIC_SUPABASE_URL must be a valid absolute URL.");
    }
  }
  return { siteUrl, supabaseUrl, supabasePublishableKey };
}
