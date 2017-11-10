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
  "Examples Nav has rendered": (browser) => {
    browser
      .assert.visible("#ExamplesNav", "Testing if Examples Nav has rendered")
      .assert.containsText("#ExamplesNav li.list a", "List view")
      .assert.attributeContains("#ExamplesNav span div li a", "href", "/examples/")
  },
  "Tags Nav has rendered": (browser) => {
    browser
      .assert.visible("#TagsNav", "Testing if Tags Nav has rendered")
      .assert.cssClassPresent("#TagsNav span div li a", "inSideNav")
  },
  "Examples Wrapper has rendered": (browser) => {
    browser
      .assert.visible("#ExamplesWrapper", "Testing if Examples Wrapper has rendered")
      .assert.elementPresent("#ExamplesWrapper div span div div h1")
  },
  after: browser => browser.end(),
}
