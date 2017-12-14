import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  font-size: 12px;
  display:flex;
  align-items:center;
  margin-top:10px;
  
  .options{
    margin-right:20px;
  }
`

const blendModes = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "colorDodge",
  "colorBurn",
  "hardLight",
  "softLight",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
]

const themes = [
  "light",
  "dark",
]

const edges = [
  "torus",
  "wall",
]

class Params extends React.PureComponent {
  render() {
    const { blendMode, blendChange, themeChange, theme, edgeChange, edge } = this.props

    return (
      <Wrapper>
        <div className="options">
          blend
          <select name="blendMode" id="blendMode" onChange={ blendChange } value={ blendMode }>
            {
              blendModes.map((blend, i) => (
                <option value={ blend } key={ `blend${i}` }>{blend}</option>
              ))
            }
          </select>
        </div>

        <div className="options">
          theme
          <select name="theme" id="theme" onChange={ themeChange } value={ theme }>
            {
              themes.map((th, i) => (
                <option value={ th } key={ `th${i}` }>{th}</option>
              ))
            }
          </select>
        </div>

        <div className="options">
          edges
          <select name="edges" id="edges" onChange={ edgeChange } value={ edge }>
            {
              edges.map((edg, i) => (
                <option value={ edg } key={ `edg${i}` }>{edg}</option>
              ))
            }
          </select>
        </div>
        
      </Wrapper>
    )
  }
}

export default (Params)
