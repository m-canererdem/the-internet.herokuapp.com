import { test, expect } from "@playwright/test";
import { PageManager } from "../../page-objects/pageManager";

test.describe("Home Page Scenerios", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/The Internet/);
  });

  test("goto A&B Testing Page from HomePage", async ({ page }) => {
    const pm = new PageManager(page)
    await pm.onHomePage().clickAbTestingLink()
  });
});
