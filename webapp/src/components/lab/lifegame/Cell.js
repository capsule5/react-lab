import React from "react"
import styled from "styled-components"
import { LGCONF } from "./lg.conf"

let isMouseDown = 0
const getHex = () => Math.floor(Math.random() * (255))
let startColor = "violet"
document.body.onmousedown = (e) => {
  if (e.target.localName === "td") {
    isMouseDown = 1
    startColor = `rgb(${getHex()}, ${getHex()}, ${getHex()})`
  }
}
document.body.onmouseup = () => {
  isMouseDown = 0
}

const Wrapper = styled.td`
    border:1px solid #F6F6F6;
    width: ${LGCONF.cellSize}px;
    height: ${LGCONF.cellSize}px;
    background:#FFF;
    cursor:pointer;
    &.isAlive{
      background:${props => props.color};
      &:hover{
        background:#CCC;
      }
    }
    &:hover{
      background:black;
    }
`

class Cell extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     color: "violet",
  //   }
  // }

  shouldComponentUpdate(nextProps) {
    return nextProps.isAlive !== this.props.isAlive || nextProps.color !== this.props.color
  }


  render() {
    const { isAlive, toggleCell, color, x, y } = this.props

    return (
      <Wrapper
        color={ color }
        className={ isAlive ? "isAlive" : "" }
        onMouseDown={ () => {
          toggleCell(x, y, startColor)
        } }
        onMouseOver={ () => {
          if (isMouseDown) toggleCell(x, y, startColor)
        } }
      />
    )
  }
}

export default (Cell)
