/** Public runtime configuration. Add required variables to this boundary as services arrive. */
export type PublicEnvironment = { appUrl: string };

export function getPublicEnvironment(environment: NodeJS.ProcessEnv = process.env): PublicEnvironment {
  const appUrl = environment.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  try {
    new URL(appUrl);
  } catch {
    throw new Error("NEXT_PUBLIC_APP_URL must be a valid absolute URL.");
  }
  return { appUrl };
}
