const TESTS_CONF = require("../../conf")

module.exports = {
  before: (browser) => {
    browser
      .url(`${TESTS_CONF.launch_url}/examples/list`)
      .waitForElementVisible("#root > main.App")
  },
  "Tags Nav renders": (browser) => {
    browser
      .assert.visible("#TagsNav", "Testing if Tags Nav renders")
      .assert.cssClassPresent("#TagsNav li a", "inSideNav")
  },
  after: browser => browser.end(),
}
