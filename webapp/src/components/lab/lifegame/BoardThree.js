import React, { Component } from "react"
import styled from "styled-components"
import * as THREE from "three"
import ReactDOM from "react-dom"

const Wrapper = styled.div`
  border:1px solid #EEE;
  transition:background .6s ease-in;
  background:${props => (props.theme === "dark" ? "#120A6B" : "#FFF")};
`

class BoardThree extends Component {
  constructor(props) {
    super(props)
    this.three = {
      scene: null,
      camera: null,
      renderer: null,
    }
    this.cells = []
  }

  componentDidMount() {
    this.DOMNode = ReactDOM.findDOMNode(this) // eslint-disable-line
    this.init()
    this.renderBoard(this.props.cells)
    this.renderScene()
  }

  componentWillReceiveProps(nextProps) {
    this.renderBoard(nextProps.cells)
  }

  init() {
    this.three.scene = new THREE.Scene()
    // this.three.camera = new THREE.PerspectiveCamera(75, 1, 0.5, 100)

    const width = 50
    const height = 50
    this.three.camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000)
    // this.three.camera.rotation.y = 1

    this.three.camera.position.z = 25
    this.three.camera.position.x = 25
    this.three.camera.position.y = 25
    this.three.renderer = new THREE.WebGLRenderer({ antialias: false })
    this.three.renderer.setSize(500, 500)
    this.DOMNode.appendChild(this.three.renderer.domElement)
    this.three.renderer.render(this.three.camera)
  }

  renderBoard(nextCells) {
    nextCells.forEach((row, x) => {
      row.forEach((cell, y) => {
        if (cell.isAlive) {
          if (!this.cells[x][y].isAlive) {
            this.addCell(x, y)
          } else {
            this.removeCell(x, y)
          }
        } else if (this.cells[x] && this.cells[x][y] && this.cells[x][y].isAlive) {
          this.removeCell(x, y)
        }
      })
    })
    
    this.renderScene()
    this.cells = nextCells
  }

  addCell(x, y) {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
    const cube = new THREE.Mesh(geometry, material)
    cube.name = `cell_${x}_${y}`
    cube.position.x = x
    cube.position.y = y
    this.three.scene.add(cube)
    this.renderScene()
  }

  removeCell(x, y) {
    const cell = this.three.scene.getObjectByName(`cell_${x}_${y}`)
    this.three.scene.remove(cell)
  }

  resetBoard() {
    while (this.three.scene.children.length > 0) {
      this.three.scene.remove(this.three.scene.children[0])
    }
  }
  
  renderScene() {
    this.three.renderer.render(this.three.scene, this.three.camera)
  }

  render() {
    // const { cells, toggleCell, addPattern, theme, isLive, size } = this.props
    // console.log("[stab]", { cells, toggleCell, addPattern, theme, isLive, size })

    return (
      <Wrapper
        theme={ this.props.theme }
      />
    )
  }
}

export default BoardThree

  
