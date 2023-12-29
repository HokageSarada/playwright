// @ts-check
import { test } from "@playwright/test";
const { SampleAppPage } = require("../models/sample-app.model");

test.describe.parallel("suite", () => {
  test("log in success", async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page);
    await sampleAppPage.navigateToSampleApp();
    await sampleAppPage.fillUsernameField("Rick Sanchez");
    await sampleAppPage.fillPasswordField("pwd");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginTextToBe("Welcome, Rick Sanchez!");
  });

  test("wrong password test", async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page);
    await sampleAppPage.navigateToSampleApp();
    await sampleAppPage.fillUsernameField("Morty Smith");
    await sampleAppPage.fillPasswordField("wrongPass");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password");
  });

  test("no username test", async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page);
    await sampleAppPage.navigateToSampleApp();
    await sampleAppPage.fillUsernameField("");
    await sampleAppPage.fillPasswordField("pwd");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password");
  });

  test("log out test", async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page);
    await sampleAppPage.navigateToSampleApp();
    await sampleAppPage.fillUsernameField("Rick Sanchez");
    await sampleAppPage.fillPasswordField("pwd");
    await sampleAppPage.clickLoginButton();
    await sampleAppPage.expectedLoginTextToBe("Welcome, Rick Sanchez!");
    await sampleAppPage.clickLogoutButton();
    await sampleAppPage.expectedLoginTextToBe("User logged out.");
  });
});
