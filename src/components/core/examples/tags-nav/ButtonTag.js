import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"


const Wrapper = styled.a`
  box-sizing:border-box;
  display:inline-block;
  background:#FFF;
  color:#000;
  text-decoration:none;
  border-radius:3px;
  padding: 8px;
  transition:all .2s ease-in-out;
  min-width:0;
  &:hover{
    text-decoration:underline;
  }
  &.isSelected{
    text-decoration:none;
    background: #7ED8F7;
    min-width:100%;
  }
`

const ButtonTag = ({ tag, isSelected, onSelectTag, onDeselectTag }) => (

  <Wrapper
    href=""
    onClick={ e => (isSelected ? onDeselectTag(tag, e) : onSelectTag(tag, e)) }
    className={ isSelected && "isSelected" }
  >
    #{tag.value}
  </Wrapper>
)


ButtonTag.propTypes = {
  tag: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelectTag: PropTypes.func.isRequired,
  onDeselectTag: PropTypes.func.isRequired,
}

export default ButtonTag
