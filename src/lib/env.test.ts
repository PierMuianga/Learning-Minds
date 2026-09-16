import { describe, expect, it } from "vitest";
import { getPublicEnvironment } from "./env";

describe("getPublicEnvironment", () => {
  it("provides a local default without external secrets", () => {
    expect(getPublicEnvironment({} as NodeJS.ProcessEnv)).toEqual({ appUrl: "http://localhost:3000" });
  });

  it("rejects an invalid application URL", () => {
    expect(() => getPublicEnvironment({ NEXT_PUBLIC_APP_URL: "not a URL" } as NodeJS.ProcessEnv)).toThrow(/valid absolute URL/);
  });

  it("requires both Supabase public values", () => {
    expect(() => getPublicEnvironment({ NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co" } as NodeJS.ProcessEnv)).toThrow(/Both/);
  });
});
