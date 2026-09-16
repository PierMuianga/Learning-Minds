import { describe, expect, it } from "vitest";
import { validateLogin, validateSignup } from "./validation";
describe("authentication validation", () => {
  it("validates signup fields and password confirmation", () => { expect(validateSignup({ email: "bad", password: "short", confirmPassword: "other" })).toEqual({ email: "Enter a valid email address.", password: expect.any(String), confirmPassword: "Passwords do not match." }); });
  it("accepts a strong signup", () => { expect(validateSignup({ email: "learner@example.com", password: "learning9", confirmPassword: "learning9" })).toEqual({}); });
  it("requires valid login credentials", () => { expect(validateLogin({ email: "", password: "" })).toEqual({ email: expect.any(String), password: expect.any(String) }); });
});
