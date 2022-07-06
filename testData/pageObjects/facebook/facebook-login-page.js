const testAccounts = require('../../testAccounts.json')

exports.FacebookLoginPage = class FacebookLoginPage {

  constructor(page) {
    this.page = page;
    this.emailInputField = page.locator("//input[@id='email']");
    this.passwordInputField = page.locator("//input[@id='pass']");
    this.loginButton = page.locator("//button[@name='login']");
  }

  async goto() {
    await this.page.goto(testAccounts.facebookUrl);
  }

  async login() {
    await this.emailInputField.type(testAccounts.facebookEmail);
    await this.passwordInputField.type(testAccounts.facebookPassword);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}