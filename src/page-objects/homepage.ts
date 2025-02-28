import { expect, Page } from '@playwright/test'

export class HomePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async clickAbTestingLink() {
        await this.page.getByText("A/B Testing").click()
        await expect(this.page.getByRole('heading', {name:"A/B Test Control"})).toHaveText('A/B Test Control')
    }
}