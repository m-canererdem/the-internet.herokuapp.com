import { expect, Page } from "@playwright/test";
import { links } from "./homePage";

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
    await this.goToPage(links[0]);
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/abtest"
    );
  }

  async addOrRemoveElementsPage() {
    await this.goToPage(links[1]);
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/add_remove_elements/"
    );
  }

  async basicAuthPage() {
    await this.goToPage(links[2]);
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/basic_auth"
    );
  }

  private async goToPage(link: string) {
    await this.page.getByRole("link", { name: `${link}` }).click();
  }
}
