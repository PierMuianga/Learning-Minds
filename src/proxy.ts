import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getPublicEnvironment } from "@/lib/env";

export async function proxy(request: NextRequest) {
  const { supabaseUrl, supabasePublishableKey } = getPublicEnvironment();
  if (!supabaseUrl || !supabasePublishableKey) return NextResponse.next();
  let response = NextResponse.next({ request });
  const client = createServerClient(supabaseUrl, supabasePublishableKey, { cookies: { getAll: () => request.cookies.getAll(), setAll: (items) => { items.forEach(({ name, value }) => request.cookies.set(name, value)); response = NextResponse.next({ request }); items.forEach(({ name, value, options }) => response.cookies.set(name, value, options)); } } });
  await client.auth.getUser();
  return response;
}
export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"] };
