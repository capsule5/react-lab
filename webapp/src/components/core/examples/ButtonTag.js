import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"


const Wrapper = styled.a`
  &.inSideNav{
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
  }

  &.light{
    background:none;
    text-decoration:none;
    color:#222;
    margin-right:5px;
    &:hover{
      text-decoration:underline;
    }
    &.isSelected{
      color:#7ED8F7;
      text-decoration:none;
    }
  }

  .exLength{
    font-size:11px;
    color:#999;
  }
`

const ButtonTag = ({ tag, className, isSelected, onSelectTag, onDeselectTag, relatedExamplesLength }) => (

  <Wrapper
    href=""
    onClick={ e => (isSelected ? onDeselectTag(tag, e) : onSelectTag(tag, e)) }
    className={ `${className} ${isSelected && "isSelected"}` }
  >
    #{tag.value}
    {relatedExamplesLength && <span className="exLength"> ({relatedExamplesLength})</span>}
  </Wrapper>
)

ButtonTag.defaultProps = {
  relatedExamplesLength: null,
}

ButtonTag.propTypes = {
  className: PropTypes.string.isRequired,
  tag: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelectTag: PropTypes.func.isRequired,
  onDeselectTag: PropTypes.func.isRequired,
  relatedExamplesLength: PropTypes.number,
}

export default ButtonTag
