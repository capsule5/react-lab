import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  a{
    text-decoration:none;
    color:#222;
    &:hover{
      text-decoration:underline;
    }
  }
`

const Tags = ({ tags, onSelectTag }) => (
  <Wrapper className="data">
    {
      tags.map(tag => (
        <span key={ tag.id }>
          <a href="" onClick={ e => onSelectTag(tag, e) } >#{tag.value} </a>
        </span>
      ))
    }
  </Wrapper>
)


Tags.defaultProps = {}
Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  onSelectTag: PropTypes.func.isRequired,
}

export default Tags
