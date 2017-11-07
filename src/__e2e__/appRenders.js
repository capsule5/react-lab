module.exports = {
  beforeEach: (browser) => {
    browser
      .url("http://localhost:3001/")
      .waitForElementVisible("body")
  },
  "App has rendered": (browser) => {
    browser
      .assert.visible("#root > main.App", "Check if app has rendered with React")
  },
  after: browser => browser.end(),
}
