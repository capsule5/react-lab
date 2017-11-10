// http://nightwatchjs.org/api
module.exports = {
  before: (browser) => {
    browser
      .url("http://localhost:3001/")
      .waitForElementVisible("body")
      .assert.urlContains("examples/list") // since redirect
  },
  "App has rendered": (browser) => {
    browser
      .assert.visible("#root > main.App", "Testing if App has rendered")
  },
  after: browser => browser.end(),
}
