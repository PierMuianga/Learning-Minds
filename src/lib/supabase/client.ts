"use client";
import { createBrowserClient } from "@supabase/ssr";
import { getPublicEnvironment } from "@/lib/env";
let client: ReturnType<typeof createBrowserClient> | undefined;
export function createSupabaseBrowserClient() {
  const { supabaseUrl, supabasePublishableKey } = getPublicEnvironment();
  if (!supabaseUrl || !supabasePublishableKey) throw new Error("SUPABASE_NOT_CONFIGURED");
  client ??= createBrowserClient(supabaseUrl, supabasePublishableKey);
  return client;
}
