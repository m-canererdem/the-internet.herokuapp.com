import { test as base } from "@playwright/test";
import { PageManager} from "../page-objects/pageManager";

export type BaseFixture = {
    pm: PageManager
}

export const test = base.extend<BaseFixture>({
    pm: async ({ page, context }, use) => {
        const pm = new PageManager(page, context)
        await pm.navigateTo().homePage()
        use(pm)
    }
})