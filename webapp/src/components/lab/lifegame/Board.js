import React, { Component } from "react"
import styled from "styled-components"
import Row from "./Row"

const Wrapper = styled.table`
  border-collapse:collapse;
  border:1px solid #EEE;
  transition:background .6s ease-in;
  background:${props => (props.theme === "dark" ? "#120A6B" : "#FFF")};
`

class Board extends Component {
  render() {
    const { cells, toggleCell, addPattern, theme, edgeColor } = this.props
    return (
      <Wrapper theme={ theme } edgeColor={ edgeColor }>
        <tbody>
          {cells.map((row, y) => (
            <Row
              key={ `row${y}` }
              row={ row }
              y={ y }
              toggleCell={ toggleCell }
              addPattern={ addPattern }
            />
          ))}
        </tbody>
      </Wrapper>
    )
  }
}

export default Board
