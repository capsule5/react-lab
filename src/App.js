import React from "react"
import { Switch, Route } from "react-router-dom"
import Examples from "./components/Examples"
import "./App.css"

const App = () => (
  <main className="App">
    <Switch>
      <Route path="/examples/tags/:tag" component={ Examples } />
      <Route path="/" component={ Examples } />
    </Switch>
  </main>
)

export default App

