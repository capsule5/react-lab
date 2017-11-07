import React from "react"
import { Route, Redirect } from "react-router-dom"
import Examples from "./components/core/examples/Examples"
import "./App.css"


const App = () => (
  <main className="App">
    <Route path="/" component={ Examples } />
    <Redirect to="/examples/list" />
  </main>
)

export default App

