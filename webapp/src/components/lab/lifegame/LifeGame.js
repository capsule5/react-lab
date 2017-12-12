import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import { recursiveDeepCopy } from "utils/helpers"
import blender from "color-blend"
import { LGCONF } from "./lg.conf"
import Board from "./Board"
import Menu from "./Menu"
import Patterns from "./Patterns"


const Wrapper = styled.div`
  display:flex;
  .patterns{
    margin:34px 0 0 20px;
  }
`

const RGBToBlend = arr => ({ r: arr[0], g: arr[1], b: arr[2], a: arr[3] })
const BlendToRGB = obj => ([ obj.r, obj.g, obj.b, obj.a ])
const blend = (c1, c2) => BlendToRGB(blender.hue(RGBToBlend(c1), RGBToBlend(c2)))

class LifeGame extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLive: false,
      cells: this.initCells(),
      history: [],
      count: 0,
    }
    this.tick = this.tick.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.reset = this.reset.bind(this)
    this.toggleCell = this.toggleCell.bind(this)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.addPattern = this.addPattern.bind(this)
    this.ti = null
  }

  componentWillUnmount() {
    clearInterval(this.ti)
  }

  next() {
    this.tick()
  }
  
  previous() {
    if (this.state.history.length > 1) {
      const newHistory = recursiveDeepCopy(this.state.history).slice(0, -1)
      this.setState({
        history: newHistory,
      }, () => {
        this.setState({
          cells: this.state.history[this.state.history.length - 1],
          count: this.state.count - 1,
        }, () => {
          if (this.state.count === 0) this.setState({ history: [] })
        })
      })
    }
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
    this.setState({ cells: this.initCells(), count: 0, history: [] })
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

  getNeighbours(x, y) {
    const { cells } = this.state
    const neighbours = { count: 0, color: null, isEdge: false }
    // let isEdge = false
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
      const inBoard = ax >= 0 && ax < LGCONF.cellsX && ay >= 0 && ay < LGCONF.cellsY
      if (inBoard && cells[ay][ax] && cells[ay][ax].isAlive) {
        neighbours.count = neighbours.count + 1
        if (neighbours.color) {
          neighbours.color = blend(cells[ay][ax].color, neighbours.color)
        } else {
          neighbours.color = cells[ay][ax].color
        }
      }
      if (!inBoard) neighbours.isEdge = true
    }
    return neighbours
  }


  tick() {
    const { cells, count } = this.state
    // const nextCells = [ ...cells ] // JSON.parse(JSON.stringify(cells)) // deep clone vs shallow [...cells]
    const nextCells = cells.slice().map(row => [ ...row ])
    // const nextCells = recursiveDeepCopy(this.state.cells)
    const nextHistory = this.state.history.slice().map(c => [ ...c ])
    
    if (count === 0) {
      nextHistory.push(recursiveDeepCopy(nextCells))
    }

    const edgeColor = LGCONF.colors[Math.floor(Math.random() * (2) * 6)]

    for (let y = 0; y < LGCONF.cellsY; y++) {
      for (let x = 0; x < LGCONF.cellsX; x++) {
        const isAlive = cells[y][x].isAlive
        const neighbours = this.getNeighbours(x, y)
        let cell = nextCells[y][x]
        // apply life rules
        if (isAlive) {
          if (neighbours.count < 2 || neighbours.count > 3) {
            // die
            cell = { isAlive: false, color: null }
          } else if (JSON.stringify(neighbours.color) !== JSON.stringify(cell.color)) {
            // stay alive
            cell.color = blend(cell.color, neighbours.color)
          }
        } else if (neighbours.count === 3) {
          // live
          cell = { isAlive: true, color: neighbours.isEdge ? blend(neighbours.color, edgeColor) : neighbours.color }
        }
        nextCells[y][x] = cell
      }
    }

    // max history of 20
    if (nextHistory.length > 20) {
      nextHistory.shift()
    }
    nextHistory.push(nextCells)

    this.setState({
      cells: nextCells,
      count: this.state.count + 1,
      history: nextHistory,
    })
  }

  toggleCell(x, y, color) {
    const nextCells = recursiveDeepCopy(this.state.cells) // JSON.parse(JSON.stringify(this.state.cells))
    nextCells[y][x].isAlive = !nextCells[y][x].isAlive
    nextCells[y][x].color = color
    this.setState({ cells: nextCells })
  }
  
  addPattern(ox, oy, pattern) {
    const color = LGCONF.colors[Math.floor(Math.random() * (LGCONF.colors.length))]
    const nextCells = recursiveDeepCopy(this.state.cells)
    for (let y = 0; y < pattern.length; y++) {
      const row = pattern[y]
      for (let x = 0; x < row.length; x++) {
        const cell = row[x]
        if (nextCells[oy + y] && nextCells[oy + y][ox + x]) {
          nextCells[oy + y][ox + x] = { isAlive: cell, color }
        }
      }
    }
    this.setState({ cells: nextCells })
  }

  render() {
    const { cells, count, isLive, history } = this.state
    return (
      <Example data={ this.props.data }>
        <Wrapper>
          <div>
            <Menu
              count={ count }
              start={ this.start }
              stop={ this.stop }
              reset={ this.reset }
              next={ this.next }
              previous={ this.previous }
              isLive={ isLive }
              historyLength={ history.length }
            />
            <Board
              cells={ cells }
              toggleCell={ this.toggleCell }
              addPattern={ this.addPattern }
            />
          </div>
          <div className="patterns">
            <Patterns addPattern={ this.addPattern } />
          </div>
        </Wrapper>
      </Example>
    )
  }
}

LifeGame.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LifeGame
