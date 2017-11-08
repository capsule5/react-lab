module.exports = {
  before: (browser) => {
    browser
      .url("http://localhost:3001/")
      .waitForElementVisible("body")
      .assert.urlContains("examples/list") // redirect
  },
  "App has rendered": (browser) => {
    browser
      .assert.visible("#root > main.App", "Check if app has rendered with React")
  },
  "Examples Nav has rendered": (browser) => {
    browser
      .assert.visible("#ExamplesNav", "Check if ExamplesNav has rendered")
      .assert.containsText("#ExamplesNav li.list a", "List view")
  },
  "Tags Nav has rendered": (browser) => {
    browser
      .assert.visible("#TagsNav", "Check if TagsNav has rendered")
  },
  after: browser => browser.end(),
}
