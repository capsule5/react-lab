import React from "react"
import logo from "./logo.svg"
import Examples from "./components/Examples"
import "./App.css"


const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={ logo } className="App-logo" alt="logo" />
      <h1 className="App-title">JT React Lab</h1>
    </header>
    <Examples />
  </div>
)

export default App

