import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import withButtonTag from "./withButtonTag"

const Wrapper = styled.div`
  background: #7ED8F7;
  border-radius:3px;
  padding: 8px;
  margin-right:10px;

  .close{
    color:#000;
    margin-left:10px;
    text-decoration:none;
    &:hover{
      color:#666
    };
  }
`

const ButtonTag = ({ tag, onDeselectTag }) => (
  <Wrapper>
    {tag.value}
    <a href="" onClick={ e => onDeselectTag(tag, e) } className="close">×</a>
  </Wrapper>
)


ButtonTag.propTypes = {
  tag: PropTypes.object.isRequired,
  onDeselectTag: PropTypes.func.isRequired,
}

export default withButtonTag(ButtonTag)
