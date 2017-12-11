import React from "react"
import Cell from "./Cell"


class Row extends React.Component {
  shouldComponentUpdate(nextProps) {
    return JSON.stringify(nextProps.row.map(cell => cell.isAlive)) !== JSON.stringify(this.props.row.map(cell => cell.isAlive))
  }

  render() {
    const { row, y, toggleCell } = this.props

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
          />
        )) }
      </tr>
    )
  }
}

export default (Row)
