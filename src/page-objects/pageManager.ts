import { BrowserContext, Page } from "@playwright/test";
import { HomePage } from "./homepage";
import { Navigation } from "./navigation";
import { AandBTestingPage } from "./aAndBTestingPage";

export class PageManager {
  private readonly navigation: Navigation;
  private readonly homePage: HomePage;
  private readonly aAndBTestingPage: AandBTestingPage;

  constructor(readonly page: Page, readonly context: BrowserContext) {
    this.page = page;
    this.context = context;

    this.navigation = new Navigation(this.page);

    this.homePage = new HomePage(this.page);
    this.aAndBTestingPage = new AandBTestingPage(this.page);
  }

  navigateTo() {
    return this.navigation;
  }

  onHomePage() {
    return this.homePage;
  }

  onAAndBTestingPage() {
    return this.aAndBTestingPage;
  }
}
