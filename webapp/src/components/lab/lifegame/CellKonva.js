import React, { PureComponent } from "react"
import { Rect } from "react-konva"
import { LGCONF } from "./lg.conf"

class CellKonva extends PureComponent {
  componentWillUnmount() {
    clearTimeout(this.to)
  }

  render() {
    const { isAlive, x, y, color, toggleCell } = this.props

    const colorString = isAlive ? color.slice(0, -1).join(",") : "255,255,255"
    const cSize = LGCONF.cellSize

    return (
      <Rect
        x={ x * cSize }
        y={ y * cSize }
        width={ cSize }
        height={ cSize }
        fill={ `rgb(${colorString})` }
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
