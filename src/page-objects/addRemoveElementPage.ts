import { Page, expect, BrowserContext } from "@playwright/test";

export class AddRemoveElementPage {
    constructor(private page: Page) {
        this.page = page;
    }

    async verifyHeader() {
        await this.page.getByText('Add/Remove Elements', {exact:true}).click();
    }
    async clickAddElementButton() {
        await this.page.getByRole('button', {name:"Add Element"}).click();
        await expect(this.page.locator('button', { hasText: "Delete" }))
            .toHaveScreenshot({ maxDiffPixelRatio: 0.2 });
    }

    async clickDeleteElementButton() {
        await this.clickAddElementButton()
        await this.page.getByRole('button', {name:"Delete"}).click();
        expect(await this.page.locator('button', { hasText: "Delete" }).all()).toHaveLength(0);
    }
}