import React from "react"
import Example from "../Example"
import ReactMotionExample from "./ReactMotionExample"
import { TAGS } from "../../../utils/tags"

const DATA = {
  title: "React Motion",
  tags: [
    TAGS.animation,
  ],
  sources: [
    "https://github.com/chenglou/react-motion",
    "https://react.rocks/tag/react-motion",
  ],
}

const ReactMotion = () => (
  <Example data={ DATA }>
    <ReactMotionExample />
  </Example>
)

export default ReactMotion
