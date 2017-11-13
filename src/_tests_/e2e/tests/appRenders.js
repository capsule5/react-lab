const TESTS_CONF = require("../conf")

module.exports = {
  before: (browser) => {
    browser
      .url(TESTS_CONF.launch_url)
      .waitForElementVisible("body")
      .assert.urlContains("examples/list") // since redirect
  },
  "App has rendered": (browser) => {
    browser
      .assert.visible("#root > main.App", "Testing if App has rendered")
  },
  after: browser => browser.end(),
}
