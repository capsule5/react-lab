import React from "react"
import { Route, Redirect } from "react-router-dom"
import Examples from "./examples/Examples"


const App = () => (
  <main className="App">
    <Route path="/" component={ Examples } />
    <Redirect to="/examples/list" />
  </main>
)

export default App

