import React from "react"
import Example from "../Example"
import ReactAnimationExample from "./ReactAnimationExample"

const DATA = {
  title: "React Animation",
  sources: [
    "https://github.com/chenglou/react-motion",
  ],
}

const ReactAnimation = () => (
  <Example data={ DATA }>
    <ReactAnimationExample />
  </Example>
)

export default ReactAnimation
