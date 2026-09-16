import { describe, expect, it } from "vitest";
import { getPublicEnvironment } from "./env";

describe("getPublicEnvironment", () => {
  it("provides a local default without external secrets", () => {
    expect(getPublicEnvironment({})).toEqual({
      siteUrl: "http://localhost:3000",
    });
  });

  it("rejects an invalid site URL", () => {
    expect(() =>
      getPublicEnvironment({
        NEXT_PUBLIC_SITE_URL: "not a URL",
      }),
    ).toThrow(/valid absolute URL/);
  });

  it("requires both Supabase public values", () => {
    expect(() =>
      getPublicEnvironment({
        NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
      }),
    ).toThrow(/Both/);
  });
});
