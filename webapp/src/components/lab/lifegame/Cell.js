import React, { PureComponent } from "react"
import styled from "styled-components"
import { LGCONF } from "./lg.conf"


let isMouseDown = 0
let startColor = [ 0, 0, 0, 1 ]
document.body.onmousedown = (e) => {
  if (e.target.localName === "td") {
    isMouseDown = 1
    startColor = LGCONF.colors[Math.floor(Math.random() * (LGCONF.colors.length))]
  }
}
document.body.onmouseup = () => {
  isMouseDown = 0
}

const Wrapper = styled.td`
    //border:1px solid #F6F6F6;
    width: ${LGCONF.cellSize}px;
    height: ${LGCONF.cellSize}px;
    padding:0;
    //background:#FFF;
    cursor:crosshair;
    user-select: none; 
    //transition:background .1s;
    &.isAlive{
      background:rgba(${props => props.color.join(",")});
      opacity:1;
       &.isBirth{
       opacity:.7;
      }
    }
`

class Cell extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isDragOver: false,
    }
  }

  componentWillUnmount() {
    clearTimeout(this.to)
  }

  render() {
    const { isAlive, isBirth, color, toggleCell, x, y, addPattern } = this.props

    return (
      <Wrapper
        color={ color || startColor }
        className={ `${isAlive ? "isAlive" : ""} ${isBirth ? "isBirth" : ""}` }
        onMouseDown={ (e) => {
          e.preventDefault()
          if (!this.state.isDragOver) toggleCell(x, y, startColor)
        } }
        onMouseOver={ () => {
          if (isMouseDown && !this.state.isDragOver) toggleCell(x, y, startColor)
        } }
        onDrop={ (e) => {
          e.preventDefault()
          const pattern = JSON.parse(e.dataTransfer.getData("pattern"))
          addPattern(x - Math.floor((pattern[0].length / 2)), y - Math.floor((pattern.length / 2)), pattern)
          isMouseDown = false
          this.to = setTimeout(() => {
            this.setState({ isDragOver: false })
          }, 50)
        } }
        onDragOver={ (e) => {
          this.setState({ isDragOver: true })
          e.preventDefault()
        } }
      />
    )
  }
}

export default (Cell)
