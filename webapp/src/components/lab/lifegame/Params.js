import React from "react"
import styled from "styled-components"
import { LGCONF } from "./lg.conf"

const Wrapper = styled.div`
  font-size: 12px;
  display:flex;
  align-items:center;
  margin-top:20px;
  
  .options{
    margin-right:20px;
  }
`

class Params extends React.PureComponent {
  renderParams() {
    const { onParamChange, paramsValues } = this.props
    const params = []
    Object.keys(LGCONF.params).forEach((param) => {
      const options = LGCONF.params[param]
      params.push(
        <div className="options" key={ param }>
          {param}
          <select
            name={ param }
            id={ param }
            onChange={ (e) => {
              onParamChange(param, e.target.value)
            } }
            value={ paramsValues[param] }
          >
            {
              this.renderParam(options)
            }
          </select>
        </div>
      )
    })
    return params.map(param => param)
  }

  renderParam(param) {
    const values = []
    Object.keys(param).forEach((key) => {
      const value = param[key]
      values.push(<option value={ key } key={ key } > {value}</option>)
    })
    return values.map(value => value)
  }

  render() {
    return (
      <Wrapper>
        {
          this.renderParams()
        }
      </Wrapper>
    )
  }
}

export default (Params)
