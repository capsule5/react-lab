module.exports = {
  before: (browser) => {
    browser
      .url("http://localhost:3001/examples/list")
      .waitForElementVisible("#root > main.App")
  },
  "Tags Nav renders": (browser) => {
    browser
      .assert.visible("#TagsNav", "Testing if Tags Nav renders")
      .assert.cssClassPresent("#TagsNav li a", "inSideNav")
  },
  after: browser => browser.end(),
}
