import { expect, test } from "@playwright/test";

test("landing page introduces the platform", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Lumena/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Every learner deserves a clear way forward",
  );
  await expect(page.getByRole("link", { name: "Start learning" })).toBeVisible();
});
