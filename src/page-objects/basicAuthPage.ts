import { BrowserContext, expect, Page } from "@playwright/test";
import { BaseFixture } from "../fixtures/base.setup";

export class BasicAuthPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async verifyPopupTitle(title:string="Oturum açın") {
    this.page.on("dialog", async (dialog) => {
      expect(dialog.message()).toContain(title);
    });
  }

  async provideValidCredentialsAndSingInWithCredentials() {
    await this.page
      .context()
      .setHTTPCredentials({ username: "admin", password: "admin" });

    await this.page.goto("https://the-internet.herokuapp.com/basic_auth");

    const content = this.page.locator("p");
    await expect(content).toHaveText(
      "Congratulations! You must have the proper credentials."
    );
    }
    
    async provideEmptyCredentialsAndSingInWithCredentials() {
        await this.page
          .context()
          .setHTTPCredentials({ username: "", password: "" });
    
        await this.page.goto("https://the-internet.herokuapp.com/basic_auth");
        this.verifyPopupTitle()
      }

  async provideValidCredentialsAndSingInWithRouteHeader() {
    await this.page.route("**/*", (route) => {
      const headers = route.request().headers();
      const auth = this.getBto("admin", "admin");
      headers["Authorization"] = auth;
      route.continue({ headers });
    });

    await this.page.goto("https://the-internet.herokuapp.com/basic_auth");
    }
    
    private getBto(name: string, password: string) {
        return "Basic " + btoa(name + ":" + password);
      }
}
