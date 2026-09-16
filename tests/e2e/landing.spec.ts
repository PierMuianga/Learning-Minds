import { expect, test } from "@playwright/test";

test("landing page introduces the platform", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Learning Minds/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Learning that knows where you’re going",
  );
  await expect(page.getByRole("link", { name: "Start learning" })).toBeVisible();
});
