import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  try {
    const client = await createSupabaseServerClient();
    await client.auth.signOut();
  } catch {
    // Logout remains safe and idempotent when configuration or a session is absent.
  }
  return NextResponse.redirect(new URL("/login", request.url));
}
