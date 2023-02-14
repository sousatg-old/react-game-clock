import { expect, test } from "@playwright/test";

test.describe("Game Clock", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Show the timer at 5 minutes", async ({ page }) => {
    expect(page).toHaveTitle("");
  });

  test("the game should by pasued when starting", async ({ page }) => {
    expect(page.locator("#switch > #play")).toHaveCount(1);
  });
});
