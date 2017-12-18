import React, { Component } from "react"
import Cell from "./Cell"


class Row extends Component {
  shouldComponentUpdate(nextProps) {
    return (JSON.stringify(nextProps.row.map(cell => JSON.stringify(cell))) !== JSON.stringify(this.props.row.map(cell => JSON.stringify(cell)))) ||
          nextProps.size !== this.props.size
  }

  render() {
    const { row, y, toggleCell, addPattern, size } = this.props

    return (
      <tr>
        {row.map((cell, x) => (
          <Cell
            key={ `cell${y}_${x}` }
            isAlive={ cell.isAlive }
            color={ cell.color }
            isBirth={ cell.isBirth }
            toggleCell={ toggleCell }
            x={ x }
            y={ y }
            addPattern={ addPattern }
            size={ size }
          />
        )) }
      </tr>
    )
  }
}

export default (Row)
