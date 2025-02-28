import { Page } from "@playwright/test";
import { HomePage } from "./homepage";
import { Navigation } from "./navigation";

export class PageManager {
  readonly page: Page;
  readonly homePage: HomePage;
  readonly navigation: Navigation;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.navigation = new Navigation(this.page);
  }

  onHomePage() {
    return this.homePage;
  }

  navigateTo() {
    return this.navigation;
  }
}
