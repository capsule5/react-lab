import React from "react"
import { Switch, Route } from "react-router-dom"
import Examples from "./components/core/examples/Examples"
import "./App.css"

const App = () => (
  <main className="App">
    <Switch>
      <Route path="/" component={ Examples } />
    </Switch>
  </main>
)

export default App

