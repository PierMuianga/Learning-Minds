import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getPublicEnvironment } from "@/lib/env";

export async function createSupabaseServerClient() {
  const { supabaseUrl, supabaseAnonKey } = getPublicEnvironment();
  if (!supabaseUrl || !supabaseAnonKey) throw new Error("SUPABASE_NOT_CONFIGURED");
  const store = await cookies();
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll: () => store.getAll(),
      setAll: (items) => { try { items.forEach(({ name, value, options }) => store.set(name, value, options)); } catch { /* Server Components cannot write cookies; proxy refreshes them. */ } },
    },
  });
}
