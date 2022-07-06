exports.FacebookMainPage = class FacebookMainPage {

  constructor(page) {
    this.page = page;
    this.nameField = page.locator("(//span[@id='ssrb_left_rail_start']/..//a)[1]//span//span");
    this.greetingsField = page.locator("(//div[@role='main']//span)[1]");
  }
}