import React from "react"
import styled from "styled-components"
import { LGCONF } from "./lg.conf"

const Wrapper = styled.div`

  height:${LGCONF.cellsY * (LGCONF.cellSize + 2)}px;
  overflow:auto;
  padding-right:20px;

  .pattern-box{
    margin:0 0 20px;
  }
  .name{
    margin-bottom:5px;
    font-size:12px;
  }
  table{
    cursor:pointer;
    border-collapse:collapse;
    border:1px solid #eee;
    td{
      border:1px solid #fff;
      width: 6px;
      height: 6px;
      background:#FFF;
      &.isAlive{
        background:#000;
      }
    }
  }
`

const patterns = [
  {
    name: "pi",
    code: [
      [ 1, 1, 1 ],
      [ 1, 0, 1 ],
      [ 1, 0, 1 ],
    ],
  },
  {
    name: "glider",
    code: [
      [ 0, 1, 0 ],
      [ 0, 0, 1 ],
      [ 1, 1, 1 ],
    ],
  },
  {
    name: "small exploder",
    code: [
      [ 0, 1, 0 ],
      [ 1, 1, 1 ],
      [ 1, 0, 1 ],
      [ 0, 1, 0 ],
    ],
  },
  {
    name: "lwss",
    code: [
      [ 0, 1, 1, 1, 1 ],
      [ 1, 0, 0, 0, 1 ],
      [ 0, 0, 0, 0, 1 ],
      [ 1, 0, 0, 1, 0 ],
    ],
  },
  {
    name: "mwss",
    code: [
      [ 0, 1, 1, 1, 1, 1 ],
      [ 1, 0, 0, 0, 0, 1 ],
      [ 0, 0, 0, 0, 0, 1 ],
      [ 1, 0, 0, 0, 1, 0 ],
      [ 0, 0, 1, 0, 0, 0 ],
    ],
  },
  // {
  //   name: "piston",
  //   code: [
  //     [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0 ],
  //     [ 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0 ],
  //     [ 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1 ],
  //     [ 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0 ],
  //     [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0 ],
  //   ],
  // },
  {
    name: "pulsar",
    code: [
      [ 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ],
      [ 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ],
      [ 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ],
      [ 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0 ],
      [ 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ],
      [ 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ],
      [ 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0 ],
    ],
  },
  {
    name: "gosper glider gun",
    code: [
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ],
      [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    ],
  },
  {
    name: "kok galaxy",
    code: [
      [ 1, 1, 1, 1, 1, 1, 0, 1, 1 ],
      [ 1, 1, 1, 1, 1, 1, 0, 1, 1 ],
      [ 0, 0, 0, 0, 0, 0, 0, 1, 1 ],
      [ 1, 1, 0, 0, 0, 0, 0, 1, 1 ],
      [ 1, 1, 0, 0, 0, 0, 0, 1, 1 ],
      [ 1, 1, 0, 0, 0, 0, 0, 1, 1 ],
      [ 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
      [ 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
      [ 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
    ],
  },
  {
    name: "pi ship",
    code: [
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ],
      [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ],
    ],
  },
]

  
class Patterns extends React.Component {
  render() {
    return (
      <Wrapper>
        {patterns.map(pattern => (
          <div key={ `${pattern.name}` } className="pattern-box">
            <div className="name">{pattern.name}</div>
            <table
              draggable="true"
              onDragStart={
                (e) => {
                  e.dataTransfer.setData("pattern", JSON.stringify(pattern.code))
                }
              }
              onClick={ () => {
                const x = LGCONF.cellsX / 2 - Math.floor((pattern.code[0].length / 2)) // eslint-disable-line
                const y = LGCONF.cellsY / 2 - Math.floor((pattern.code.length / 2)) // eslint-disable-line
                this.props.addPattern(x, y, pattern.code)
              } }
            >
              <tbody>
                {pattern.code.map((row, y) => (
                  <tr key={ `${pattern.name}_${y}` }>
                    {row.map((cell, x) => (
                      <td key={ `${pattern.name}_${y}_${x}` } className={ cell ? "isAlive" : "" } />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </Wrapper>
    )
  }
}

export default Patterns
