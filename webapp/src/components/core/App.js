import React from "react"
import { Route } from "react-router-dom"
import Examples from "./examples/Examples"


const App = () => (
  <main className="App">
    <Route path="/" component={ Examples } />
  </main>
)

export default App

