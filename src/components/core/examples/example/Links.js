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

const Links = ({ links }) => (
  <Wrapper className="data">
    {
      links.map(link => (
        <li key={ link.id }>
          <a href={ link.value } target="_blank" rel="noopener noreferrer" >{link.value}</a>
        </li>
      ))
    }
  </Wrapper>
)


Links.defaultProps = {}
Links.propTypes = {
  links: PropTypes.array.isRequired,
}

export default Links
