import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import RenderProps from "./render-props/RenderProps"
import UsingHOC from "./hoc/UsingHOC"

const Wrapper = styled.div`
  display:flex;
  .rpvshoc-container{
    border:1px solid #EEE;
    width:100%;
    padding:20px;
    h4{ padding:0; margin:0;}
  }
`

class RenderPropsVsHoc extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <Wrapper>
          <div className="rpvshoc-container">
            <h4>Render Props</h4>
            <RenderProps />
          </div>
          <div className="rpvshoc-container">
            <h4>HOC</h4>
            <UsingHOC />
          </div>
        </Wrapper>
      </Example>
    )
  }
}

RenderPropsVsHoc.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RenderPropsVsHoc
