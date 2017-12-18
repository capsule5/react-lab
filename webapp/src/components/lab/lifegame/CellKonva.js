import React, { PureComponent } from "react"
import { Rect } from "react-konva"
import { LGCONF } from "./lg.conf"

class CellKonva extends PureComponent {
  componentWillUnmount() {
    clearTimeout(this.to)
  }

  render() {
    const { isAlive, x, y, color, toggleCell, isBirth, size } = this.props

    const c = isBirth ? color.slice(0, -1) : color
    if (isBirth) c.push(0.5)
    const colorString = isAlive ? c.join(",") : "255,255,255,0"
    const cSize = 500 / size

    return (
      <Rect
        x={ x * cSize }
        y={ y * cSize }
        width={ cSize }
        height={ cSize }
        fill={ `rgba(${colorString})` }
        onClick={ () => {
          toggleCell(x, y, LGCONF.startColor)
        } }
        onMouseOver={ () => {
          if (LGCONF.isMouseDown) toggleCell(x, y, LGCONF.startColor)
        } }
      />
    )
  }
}

export default (CellKonva)
