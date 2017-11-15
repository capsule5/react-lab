import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import Examples from "./examples/Examples"


const App = () => (
  <main className="App">
    <Switch>
      <Route path="/" component={ Examples } />
      <Redirect to="/examples/list" />
    </Switch>
  </main>
)

export default App

