import React, { Component } from "react"
import styled from "styled-components"
import CellDiv from "./CellDiv"

const Wrapper = styled.div`
  border:1px solid #EEE;
  transition:background .6s ease-in;
  background:${props => (props.theme === "dark" ? "#120A6B" : "#FFF")};
  position:relative;
  width:${props => props.sizePx}px;
  height:${props => props.sizePx}px;
`

class BoardDiv extends Component {
  render() {
    const { cells, toggleCell, addPattern, theme, size, isLive } = this.props
    const sizePx = size * (500 / size)
    return (
      <Wrapper theme={ theme } sizePx={ sizePx }>
        {
          cells.map((row, y) => (
            row.map((cell, x) => {
              if (!cell.isAlive && isLive) return null
              return (
                <CellDiv
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
              )
            })
          ))
        }
      </Wrapper>
    )
  }
}

export default BoardDiv
