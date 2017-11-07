import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import configStore from "redux/configStore"
import App from "App"
import renderer from "react-test-renderer"

const store = configStore()

it("renders without crashing", () => {
  const component = renderer.create(
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
