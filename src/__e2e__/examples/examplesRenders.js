// http://nightwatchjs.org/api

const selectors = {
  firstExample: "#ExamplesNav span div:first-child li a",
  examplesWrapper: "#ExamplesWrapper div span",
  exampleContent: ".example-content",
}

module.exports = {
  before: (browser) => {
    browser
      .url("http://localhost:3001/examples/list")
      .waitForElementVisible("#root > main.App")
  },
  "Examples Nav renders": (browser) => {
    browser
      .assert.visible("#ExamplesNav", "Testing if Examples Nav renders")
      .assert.containsText("#ExamplesNav li.list a", "List view")
      .assert.attributeContains("#ExamplesNav span div li a", "href", "/examples/")
      .elements("css selector", "#ExamplesNav span li", (result) => {
        browser.assert.ok(result.value.length > 1, "Examples nav has more than 1 link")
      })
  },
  "Tags Nav renders": (browser) => {
    browser
      .assert.visible("#TagsNav", "Testing if Tags Nav renders")
      .assert.cssClassPresent("#TagsNav span div li a", "inSideNav")
  },
  "Examples Wrapper renders": (browser) => {
    browser
      .assert.visible(selectors.examplesWrapper, "Testing if Examples Wrapper renders")
      .assert.elementPresent("#ExamplesWrapper .example-content")
  },
  "First example link updates URL and displays 1 example": (browser) => {
    browser
      .getAttribute(selectors.firstExample, "href", (result) => {
        browser.click(selectors.firstExample)
          .assert.urlContains(result.value)
      })
      .elements("css selector", selectors.exampleContent, (result) => {
        browser.assert.ok(result.value.length === 1, "Only one example is displayed")
      })
  },
  "'See list' link updates URL and displays all examples": (browser) => {
    browser
      .click("#ExamplesNav li.list a")
      .assert.urlContains("examples/list")
      .elements("css selector", selectors.exampleContent, (result) => {
        browser.assert.ok(result.value.length > 1, `All examples are displayed (${result.value.length})`)
      })
  },
  after: browser => browser.end(),
}
