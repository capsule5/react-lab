import React, { PureComponent } from "react"
import styled from "styled-components"
import { LGCONF } from "./lg.conf"

const Wrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    cursor:crosshair;
    user-select: none;
    &.isAlive{
      background:rgba(${props => props.color.join(",")});
      opacity:1;
       &.isBirth{
       opacity:.7;
      }
    }
`

class CellDiv extends PureComponent {
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
    const { isAlive, x, y, color, toggleCell, isBirth, size, addPattern } = this.props

    const cSize = 500 / size
    const style = {
      transform: `translate(${x * cSize}px, ${y * cSize}px)`,
      width: `${cSize}px`,
      height: `${cSize}px`,
    }

    return (
      <Wrapper
        style={ style }
        color={ color || LGCONF.startColor }
        className={ `cell ${isAlive ? "isAlive" : ""} ${isBirth ? "isBirth" : ""}` }
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

export default (CellDiv)
