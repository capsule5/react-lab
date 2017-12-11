import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import { LGCONF } from "./lg.conf"
import Board from "./Board"
import Menu from "./Menu"

const Wrapper = styled.div`
  
`

class LifeGame extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLive: false,
      cells: this.initCells(),
      count: 0,
    }
    this.tick = this.tick.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.reset = this.reset.bind(this)
    this.toggleCell = this.toggleCell.bind(this)
    this.ti = null
  }

  componentWillUnmount() {
    clearInterval(this.ti)
  }

  start() {
    if (!this.state.isLive) {
      this.setState({ isLive: true })
      this.ti = setInterval(this.tick, LGCONF.speed)
    }
  }

  stop() {
    this.setState({ isLive: false })
    clearInterval(this.ti)
    this.ti = null
  }

  reset() {
    this.stop()
    this.setState({ cells: this.initCells(), count: 0 })
  }

  initCells() {
    const cells = []
    for (let y = 0; y < LGCONF.cellsY; y++) {
      const row = []
      for (let x = 0; x < LGCONF.cellsX; x++) {
        const cell = {
          isAlive: false,
          color: null,
        }
        row.push(cell)
      }
      cells.push(row)
    }

    return cells
  }

  tick() {
    const { cells } = this.state
    // const nextCells = [ ...cells ] // JSON.parse(JSON.stringify(cells)) // deep clone vs shallow [...cells]
    // const nextCells = cells.map(row => [ ...row ])
    const nextCells = []

    const getNeighbours = (x, y) => {
      const neighbours = { count: 0, color: null }
      const cellsAround = [
        { dx: -1, dy: -1 },
        { dx: 0, dy: -1 },
        { dx: 1, dy: -1 },
        { dx: -1, dy: 0 },
        { dx: 1, dy: 0 },
        { dx: -1, dy: 1 },
        { dx: 0, dy: 1 },
        { dx: 1, dy: 1 },
      ]

      // check life around
      for (let c = 0; c < 8; c++) {
        const ax = x + cellsAround[c].dx
        const ay = y + cellsAround[c].dy
        const inBoard = ax >= 0 && ax <= LGCONF.cellsX && ay >= 0 && ay < LGCONF.cellsY
        if (inBoard && cells[ay][ax] && cells[ay][ax].isAlive) {
          neighbours.count = neighbours.count + 1
          neighbours.color = cells[ay][ax].color
        }
      }

      return neighbours
    }

    for (let y = 0; y < LGCONF.cellsY; y++) {
      const row = []
      for (let x = 0; x < LGCONF.cellsX; x++) {
        const isAlive = cells[y][x].isAlive
        const neighbours = getNeighbours(x, y)

        // apply life rules
        if (isAlive) {
          if (neighbours.count < 2 || neighbours.count > 3) {
            row.push({ isAlive: false, color: null })
          } else {
            row.push({ isAlive: true, color: neighbours.color })
          }
        } else if (neighbours.count === 3) {
          row.push({ isAlive: true, color: neighbours.color })
        } else {
          row.push({ isAlive: false, color: null })
        }
      }

      nextCells.push(row)
    }

    this.setState({ cells: nextCells, count: this.state.count + 1 })
  }

  toggleCell(x, y, color) {
    const nextCells = JSON.parse(JSON.stringify(this.state.cells))
    nextCells[y][x].isAlive = !nextCells[y][x].isAlive
    nextCells[y][x].color = color
    this.setState({ cells: nextCells })
    // console.log("[stab]", { cells: this.state.cells })
  }

  render() {
    const { cells, count, isLive } = this.state
    return (
      <Example data={ this.props.data }>
        <Wrapper>
          <Menu
            count={ count }
            start={ this.start }
            stop={ this.stop }
            reset={ this.reset }
            isLive={ isLive }
          />
          <Board
            cells={ cells }
            toggleCell={ this.toggleCell }
          />
        </Wrapper>
      </Example>
    )
  }
}

LifeGame.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LifeGame
