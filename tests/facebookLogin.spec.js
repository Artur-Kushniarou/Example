const { test, expect } = require('@playwright/test');
const { FacebookLoginPage } = require('../testData/pageObjects/facebook/facebook-login-page');
const { FacebookMainPage } = require('../testData/pageObjects/facebook/facebook-main-page');

test('Facebook login test', async ({ page }) => {
    const facebookLoginPage = new FacebookLoginPage(page);
    const facebookMainPage = new FacebookMainPage(page);
    await facebookLoginPage.goto();
    await facebookLoginPage.login();
    await expect.soft(facebookMainPage.nameField).toHaveText('Artur Kushniarou');
    await expect.soft(facebookMainPage.greetingsField).toContainText('Facebook, Artur!');
});
