import { expect, Page } from "@playwright/test";

export class Navigation {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async homePage() {
    await this.page.goto("https://the-internet.herokuapp.com/");
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/"
    );
  }
  async aAndBTestingPage() {
    await this.goToPage("A/B Testing");
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/abtest"
    );
  }

  async addOrRemoveElementsPage() {
    await this.goToPage("Add/Remove Elements");
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/add_remove_elements/"
    );
  }

  private async goToPage(link: string) {
    await this.page.getByRole("link", { name: `${link}` }).click();
  }
}
