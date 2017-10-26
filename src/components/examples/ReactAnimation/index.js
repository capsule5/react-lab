import React from "react"
import Example from "../Example"
import Content from "./content"

const DATA = {
  title: "React Animation",
  sources: [
    "https://github.com/chenglou/react-motion",
  ],
}

const ReactAnimation = () => (
  <Example data={ DATA }>
    <Content />
  </Example>
)

export default ReactAnimation
