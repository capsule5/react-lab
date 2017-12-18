import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import { recursiveDeepCopy } from "utils/helpers"
import blender from "color-blend"
import { LGCONF } from "./lg.conf"
import Board from "./Board"
import Menu from "./Menu"
import Params from "./Params"
import Patterns from "./Patterns"
import BoardKonva from "./BoardKonva"


const Wrapper = styled.div`
  display:flex;
  .patterns{
    margin:34px 0 0 20px;
  }
`

const RGBToBlend = arr => ({ r: arr[0], g: arr[1], b: arr[2], a: arr[3] })
const BlendToRGB = obj => ([ obj.r, obj.g, obj.b, obj.a ])


class LifeGame extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLive: false,
      cells: null,
      history: [],
      count: 0,
      edgeColor: [ 240, 240, 240, 1 ],
      params: {
        blendMode: LGCONF.params.blendMode.hue,
        theme: LGCONF.params.theme.light,
        edge: LGCONF.params.edge.wall,
        rendering: LGCONF.params.rendering.HTMLTable,
        speed: LGCONF.params.speed["50"],
        size: LGCONF.params.size["50"],
      },
    }
    this.tick = this.tick.bind(this)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.reset = this.reset.bind(this)
    this.toggleCell = this.toggleCell.bind(this)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.addPattern = this.addPattern.bind(this)
    this.updateEdgeColor = this.updateEdgeColor.bind(this)
    this.onParamChange = this.onParamChange.bind(this)
    this.blend = this.blend.bind(this)
    this.initCells = this.initCells.bind(this)
    this.ti = null
  }
  componentWillMount() {
    this.initCells()
  }

  componentWillUnmount() {
    clearInterval(this.ti)
    clearInterval(this.ti2)
  }


  initCells() {
    const { params } = this.state

    const cells = []
    for (let y = 0; y < params.size; y++) {
      const row = []
      for (let x = 0; x < params.size; x++) {
        const cell = {
          isAlive: false,
          color: null,
          isBirth: false,
        }
        row.push(cell)
      }
      cells.push(row)
    }

    this.setState({ cells })
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
      this.ti = setInterval(this.tick, this.state.params.speed)
      this.updateEdgeColor()
      this.ti2 = setInterval(this.updateEdgeColor, 5000)
    }
  }

  stop() {
    this.setState({ isLive: false })
    clearInterval(this.ti)
    clearInterval(this.ti2)
    this.ti = null
  }

  reset() {
    this.stop()
    this.setState({
      cells: [],
      count: 0,
      history: [],
      edgeColor: [ 240, 240, 240, 1 ],
    })
    this.initCells()
  }


  getNeighbours(x, y) {
    const { cells, params } = this.state
    const neighbours = { count: 0, color: null }
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
      let ax = x + cellsAround[c].dx
      let ay = y + cellsAround[c].dy

      if (params.edge === LGCONF.params.edge.torus) {
        if (ax < 0) ax = params.size - 1
        else if (ax === params.size) ax = 0
        if (ay < 0) ay = params.size - 1
        else if (ay === params.size) ay = 0
      }

      if (cells[ay] && cells[ay][ax] && cells[ay][ax].isAlive) {
        neighbours.count = neighbours.count + 1
        // neighbour colors are blended 
        if (neighbours.color) {
          neighbours.color = this.blend(cells[ay][ax].color, neighbours.color)
        } else {
          neighbours.color = cells[ay][ax].color
        }
      }
    }
    return neighbours
  }


  updateEdgeColor() {
    this.setState({
      edgeColor: LGCONF.colors[Math.floor(Math.random() * (LGCONF.colors.length - 1))], // eslint-disable-line
    })
  }


  tick() {
    const { cells, count, params } = this.state
    const nextCells = cells.map(row => row.map(c => ({ ...c })))
    // const nextCells = recursiveDeepCopy(this.state.cells)
    const nextHistory = this.state.history.map(c => [ ...c ])
    
    if (count === 0) {
      nextHistory.push(recursiveDeepCopy(nextCells))
    }

    for (let y = 0; y < params.size; y++) {
      for (let x = 0; x < params.size; x++) {
        const isAlive = cells[y][x].isAlive
        const neighbours = this.getNeighbours(x, y)
        let cell = nextCells[y][x]
        // apply life rules
        if (isAlive) {
          cell.isBirth = false
          if (neighbours.count < 2 || neighbours.count > 3) {
            // die
            cell = { isAlive: false, isBirth: false, color: null }
          } else if (neighbours.color[0] !== cell.color[0]) {
            // stay alive
            // alive cell blends with neighbour color
            cell.color = this.blend(neighbours.color, cell.color)
          }
        } else if (neighbours.count === 3) {
          // birth
          // cell born at edge get edgeColor
          const isEdge = x === 0 || x === params.size - 1 || y === 0 || y === params.size - 1
          cell = { isAlive: true, isBirth: true, color: isEdge ? this.state.edgeColor : neighbours.color }
        }
        nextCells[y][x] = cell
      }
    }

    // max history of 20
    if (nextHistory.length > LGCONF.historyMax) {
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
    const nextCells = this.state.cells.map(row => row.map(c => ({ ...c }))) // JSON.parse(JSON.stringify(this.state.cells))
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

  blend(c1, c2) {
    return BlendToRGB(blender[this.state.params.blendMode](RGBToBlend(c1), RGBToBlend(c2)))
  }

  onParamChange(param, value) {
    // console.log("[stab]", { param, value })
    const isLive = this.state.isLive
    if (isLive) this.stop()
    const newParams = { ...this.state.params }
    newParams[param] = LGCONF.params[param][value]
    this.setState({
      params: newParams,
    }, () => {
      // console.log("[stab]", { state: this.state.params })
      if (isLive) this.start()
      if (param === "size") this.reset()
    })
  }

  render() {
    const { cells, count, isLive, history, edgeColor, params } = this.state
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
            {
              params.rendering === LGCONF.params.rendering.canvas ?
                <BoardKonva
                  cells={ cells }
                  toggleCell={ this.toggleCell }
                  addPattern={ this.addPattern }
                  theme={ params.theme }
                  edgeColor={ edgeColor }
                  isLive={ isLive }
                  size={ params.size }
                /> :
                <Board
                  cells={ cells }
                  toggleCell={ this.toggleCell }
                  addPattern={ this.addPattern }
                  theme={ params.theme }
                  edgeColor={ edgeColor }
                  size={ params.size }
                />
            }
          </div>
          <div className="patterns">
            <Patterns addPattern={ this.addPattern } size={ params.size } />
          </div>
        </Wrapper>
        <Params
          onParamChange={ this.onParamChange }
          paramsValues={ params }
        />
      </Example>
    )
  }
}

LifeGame.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LifeGame
