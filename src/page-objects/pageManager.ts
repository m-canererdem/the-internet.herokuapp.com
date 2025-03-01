import { BrowserContext, Page } from "@playwright/test";
import { HomePage } from "./homePage";
import { Navigation } from "./navigation";
import { ABTestingPage } from "./aBTestingPage";
import { AddRemoveElementPage } from "./addRemoveElementPage";
import { BasicAuthPage } from "./basicAuthPage";

export class PageManager {
  private readonly navigation: Navigation;
  private readonly homePage: HomePage;
  private readonly aAndBTestingPage: ABTestingPage;
  private readonly addRemoveElementPage: AddRemoveElementPage;
  private readonly basicAuthPage: BasicAuthPage;

  constructor(readonly page: Page, readonly context: BrowserContext) {
    this.page = page;
    this.context = context;

    this.navigation = new Navigation(this.page);

    this.homePage = new HomePage(this.page);
    this.aAndBTestingPage = new ABTestingPage(this.page);
    this.addRemoveElementPage = new AddRemoveElementPage(this.page);
    this.basicAuthPage = new BasicAuthPage(this.page);
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

  onAddRemoveElemenPage() {
    return this.addRemoveElementPage;
  }

  onBasicAuthPage() {
    return this.basicAuthPage;
  }
}
