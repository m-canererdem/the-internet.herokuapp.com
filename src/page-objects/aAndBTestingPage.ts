import { Page, expect, BrowserContext } from "@playwright/test";

export class AandBTestingPage {
  constructor(private page: Page) {
    this.page = page;
  }
  async clickKnotLink() {
    await this.page.getByAltText("Fork me on GitHub").click();
    await expect(this.page).toHaveURL(
      "https://github.com/saucelabs/the-internet"
    );
  }

  async clickFootbarLink(context: BrowserContext) {
    await this.page.locator('a[href="http://elementalselenium.com/"]').click();
    const newPage = await context.waitForEvent("page", {
      timeout: 10000,
    });
    await newPage.waitForLoadState("domcontentloaded");
    await expect(newPage).toHaveURL("https://elementalselenium.com/");
    }
    
    async verifyHeader() {
        await expect(this.page.locator('#content .example h3')).toHaveText('A/B Test Control');
    }
}
