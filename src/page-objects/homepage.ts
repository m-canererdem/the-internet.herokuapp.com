import { expect, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async clickAbTestingLink() {
    await this.clickToLink(links[0]);
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/abtest"
    );
  }

  async clickAddRemoveElements() {
    await this.clickToLink(links[1]);
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/add_remove_elements/"
    );
  }

  async clickBasicAuth() {
    await this.clickToLink(links[2]);
    this.page.on("dialog", async (dialog) => {
      expect(dialog.message).toContain("Oturum Açın");
    });
  }

  async clickBrokenImages() {
    await this.clickToLink(links[3]);
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/broken_images"
    );
  }

  async clickChallengingDOM() {
    await this.clickToLink(links[4]);
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/challenging_dom"
    );
  }

  async clickCheckboxes() {
    await this.clickToLink(links[5]);
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/checkboxes"
    );
  }
  private async clickToLink(link: string) {
    await this.page.getByRole("link", { name: `${link}` }).click();
  }
}
const links = [
  "A/B Testing",
  "Add/Remove Elements",
  "Basic Auth",
  "Broken Images",
  "Challenging DOM",
  "Checkboxes",
  "Context Menu",
  "Digest Authentication",
  "Disappearing Elements",
  "Drag and Drop",
  "Dynamic Content",
  "Dynamic Controls",
  "Dynamic Loading",
  "Entry Ad",
  "Exit Intent",
  "File Download",
  "File Upload",
  "Floating Menu",
  "Forgot Password",
  "Form Authentication",
  "Frames",
  "Geolocation",
  "Horizontal Slider",
  "Hovers",
  "Infinite Scroll",
  "Inputs",
  "JQuery UI Menus",
  "JavaScript Alerts",
  "JavaScript onload event error",
  "Key Presses",
  "Large &",
  "Deep DOM",
  "Multiple Windows",
  "Nested Frames",
  "Notification Messages",
  "Redirect Link",
  "Secure File",
  "Download",
  "Shadow DOM",
  "Shifting Content",
  "Slow Resources",
  "Sortable Data",
  "Tables",
  "Status Codes",
  "Typos",
  "WYSIWYG Editor",
];
