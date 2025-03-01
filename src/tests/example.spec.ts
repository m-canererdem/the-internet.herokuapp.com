import { expect } from "@playwright/test";
import { test } from "../fixtures/base.setup";

test.describe("Home Page Scenerios", () => {
  test.beforeEach(async ({ pm }) => {});

  test("has title", async ({ pm }) => {
    await expect(pm.page).toHaveTitle(/The Internet/);
  });

  test("goto A&B Testing Page from HomePage", async ({ pm }) => {
    await pm.onHomePage().clickAbTestingLink();
  });

  test("Verify that, first 5 link is working", async ({ pm }) => {
    await pm.onHomePage().clickAbTestingLink();
    await pm.page.goBack({ waitUntil: "load" });
    await pm.onHomePage().clickAddRemoveElements();
    await pm.page.goBack({ waitUntil: "load" });
    await pm.onHomePage().clickBasicAuth();
    await pm.page.goBack({ waitUntil: "load" });
    await pm.onHomePage().clickBrokenImages();
    await pm.page.goBack({ waitUntil: "load" });
    await pm.onHomePage().clickChallengingDOM();
    await pm.page.goBack({ waitUntil: "load" });
    await pm.onHomePage().clickCheckboxes();
    await pm.page.goBack({ waitUntil: "load" });
  });

  test("Verify: Foorbar and Knot links are working", async ({ pm }) => {
    await pm.navigateTo().homePage();
    await pm.onHomePage().clickForkMeOnGithubKnot();
    await pm.page.goBack({ waitUntil: "load" });
    await pm.onHomePage().clickElementalSeleniumFootbarLink(pm.context);
    await pm.page.goBack({ waitUntil: "load" });
  });
});

test.describe("A/B Testing Page Scenerios", () => {

  test.beforeEach(async ({ pm }) => {
    await pm.navigateTo().aAndBTestingPage()
  });

  test("Verify that, header is correct", async ({ pm }) => {
    await pm.onAAndBTestingPage().verifyHeader()
  });

  test("Verify, Knot Link", async ({ pm }) => {
    await pm.onAAndBTestingPage().clickKnotLink()
  });

  test("Verify, Footbar link", async ({ pm }) => {
    await pm.onAAndBTestingPage().clickFootbarLink(pm.context)
  });
});