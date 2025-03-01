import { BrowserContext, Page } from "@playwright/test";
import { HomePage } from "./homepage";
import { Navigation } from "./navigation";

export class PageManager {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly homePage: HomePage;
  readonly navigation: Navigation;

  constructor(page: Page, context?: any) {
    this.page = page;
    this.context = context;
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
