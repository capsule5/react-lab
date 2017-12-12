import React, { Component } from "react"
import Cell from "./Cell"


class Row extends Component {
  shouldComponentUpdate(nextProps) {
    return JSON.stringify(nextProps.row.map(cell => cell.isAlive)) !== JSON.stringify(this.props.row.map(cell => cell.isAlive))
  }

  render() {
    const { row, y, toggleCell, addPattern } = this.props

    return (
      <tr>
        {row.map((cell, x) => (
          <Cell
            key={ `cell${y}_${x}` }
            isAlive={ cell.isAlive }
            color={ cell.color }
            toggleCell={ toggleCell }
            x={ x }
            y={ y }
            addPattern={ addPattern }
          />
        )) }
      </tr>
    )
  }
}

export default (Row)
