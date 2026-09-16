import { describe, expect, it } from "vitest";
import { destinationFor, mayAccess } from "./routing";
describe("role routing", () => {
  it("routes incomplete users to onboarding", () => expect(destinationFor({ role: "student", onboardingCompleted: false })).toBe("/onboarding"));
  it("routes completed roles to their shells", () => { expect(destinationFor({ role: "student", onboardingCompleted: true })).toBe("/app"); expect(destinationFor({ role: "teacher", onboardingCompleted: true })).toBe("/teacher"); });
  it("keeps roles out of the other shell", () => { expect(mayAccess("/teacher", { role: "student", onboardingCompleted: true })).toBe(false); expect(mayAccess("/app", { role: "teacher", onboardingCompleted: true })).toBe(false); });
});
