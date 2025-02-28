import { Page } from "@playwright/test";
import { HomePage } from "./homepage";

export class PageManager {
  readonly page: Page;
  readonly homePage: HomePage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
  }

  onHomePage() {
    return this.homePage;
  }
}
