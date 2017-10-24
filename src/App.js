import React from "react"
import logo from "./logo.svg"
import "./App.css"


const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={ logo } className="App-logo" alt="logo" />
      <h1 className="App-title">Animation with React</h1>
    </header>
    <div className="App-examples" />
  </div>
)

export default App

