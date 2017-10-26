import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ExampleStyle } from "./styles"

const Wrapper = styled.div` ${ExampleStyle}`

const Example = ({ data, children }) => (
  <Wrapper>
    <h1>{data.title}</h1>
    <div className="sources">
      { data.sources.map((source, index) => (<a href={ source } target="_blank" rel="noopener noreferrer" key={ `source_${index}` }>{source}</a>)) }
    </div>
    { children}
  </Wrapper>
)

Example.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default Example
