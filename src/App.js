import React from "react"
import { Route } from "react-router-dom"
import Examples from "./components/core/examples/Examples"
import "./App.css"

const App = () => (
  <main className="App">
    <Route path="/" component={ Examples } />
  </main>
)

export default App

