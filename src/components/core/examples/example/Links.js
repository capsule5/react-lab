import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  padding:0;
  margin:0;
  li{

    list-style:none;
    margin-bottom:2px;
  }
  a{
    text-decoration:none;
    color:#999;
    font-size:13px;
    &:hover{
      text-decoration:underline;
    }
  }
`

const Links = ({ sources }) => (
  <Wrapper className="data">
    {
      sources.map(source => (
        <li key={ source.id }>
          <a href={ source.value } target="_blank" rel="noopener noreferrer" >{source.value}</a>
        </li>
      ))
    }
  </Wrapper>
)


Links.defaultProps = {}
Links.propTypes = {
  sources: PropTypes.array.isRequired,
}

export default Links
