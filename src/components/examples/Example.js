import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  border-top: 1px solid #000;
  height:500px;
  text-align:left;
  padding: 10px;

  h1{}
  .sources{
    margin-bottom:20px;
  }
  .content{
    color:#CCC;
  }
`

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
