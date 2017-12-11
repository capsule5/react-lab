import React from "react"
import styled from "styled-components"
import Row from "./Row"

const Wrapper = styled.table`
  border-collapse:collapse;
  border:1px solid #eee;
`

class Board extends React.Component {
  render() {
    const { cells, toggleCell } = this.props
    return (
      <Wrapper>
        <tbody>
          {cells.map((row, y) => (
            <Row key={ `row${y}` } row={ row } y={ y } toggleCell={ toggleCell } />
          ))}
        </tbody>
      </Wrapper>
    )
  }
}

export default Board
