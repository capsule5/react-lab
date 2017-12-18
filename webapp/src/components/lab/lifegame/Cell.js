import React, { PureComponent } from "react"
import styled from "styled-components"
import { LGCONF } from "./lg.conf"

const Wrapper = styled.td`
    //border:1px solid #F6F6F6;
    width: ${props => 500 / props.size}px;
    height: ${props => 500 / props.size}px;
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
    const { isAlive, isBirth, color, toggleCell, x, y, addPattern, size } = this.props

    return (
      <Wrapper
        size={ size }
        color={ color || LGCONF.startColor }
        className={ `${isAlive ? "isAlive" : ""} ${isBirth ? "isBirth" : ""}` }
        onMouseDown={ (e) => {
          e.preventDefault()
          if (!this.state.isDragOver) toggleCell(x, y, LGCONF.startColor)
        } }
        onMouseOver={ () => {
          if (LGCONF.isMouseDown && !this.state.isDragOver) toggleCell(x, y, LGCONF.startColor)
        } }
        onDrop={ (e) => {
          e.preventDefault()
          const pattern = JSON.parse(e.dataTransfer.getData("pattern"))
          addPattern(x - Math.floor((pattern[0].length / 2)), y - Math.floor((pattern.length / 2)), pattern)
          LGCONF.isMouseDown = false
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
