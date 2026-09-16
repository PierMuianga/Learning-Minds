"use client";
import { createBrowserClient } from "@supabase/ssr";
import { getPublicEnvironment } from "@/lib/env";
let client: ReturnType<typeof createBrowserClient> | undefined;
export function createSupabaseBrowserClient() {
  const { supabaseUrl, supabaseAnonKey } = getPublicEnvironment();
  if (!supabaseUrl || !supabaseAnonKey) throw new Error("SUPABASE_NOT_CONFIGURED");
  client ??= createBrowserClient(supabaseUrl, supabaseAnonKey);
  return client;
}
