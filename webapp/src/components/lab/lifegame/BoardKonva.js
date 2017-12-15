import React, { Component } from "react"
import { Stage, Layer } from "react-konva"
import styled from "styled-components"
import CellKonva from "./CellKonva"
import { LGCONF } from "./lg.conf"


const Wrapper = styled.div`
  border:1px solid #EEE;
  transition:background .6s ease-in;
  background:${props => (props.theme === "dark" ? "#120A6B" : "#FFF")};
`

class BoardKonva extends Component {
  render() {
    const { cells, toggleCell, addPattern, theme, isLive } = this.props
    // console.log("[stab]", { cells, toggleCell, addPattern, theme, edgeColor })
    return (
      <Wrapper theme={ theme } >
        <Stage width={ LGCONF.cellsX * LGCONF.cellSize } height={ LGCONF.cellsY * LGCONF.cellSize }>
          <Layer>
            {
              cells.map((row, y) => (
                row.map((cell, x) => {
                  if (!cell.isAlive && isLive) return null
                  return (
                    <CellKonva
                      key={ `cell${y}_${x}` }
                      isAlive={ cell.isAlive }
                      color={ cell.color }
                      isBirth={ cell.isBirth }
                      toggleCell={ toggleCell }
                      x={ x }
                      y={ y }
                      addPattern={ addPattern }
                    />
                  )
                })
              ))
            }
          </Layer>
        </Stage>
      </Wrapper>
    )
  }
}

export default BoardKonva

  
