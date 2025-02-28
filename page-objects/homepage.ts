import { expect, Page } from '@playwright/test'

export class HomePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async clickAbTestingLink() {
        await this.page.getByRole('link', { name: "A/B Testing" }).click()
        await expect(this.page).toHaveTitle('The Internet')
    }
}