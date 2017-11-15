import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import withTags from "../withTags"
import ButtonTag from "../ButtonTag"

const Wrapper = styled.div`
  a{
    text-decoration:none;
    color:#222;
    &:hover{
      text-decoration:underline;
    }
  }
`

const Tags = ({ tags, onSelectTag, onDeselectTag }) => (
  <Wrapper className="data">
    {
      tags.map(tag => (
        <ButtonTag
          className="light"
          key={ tag.id }
          tag={ tag }
          isSelected={ tag.isSelected }
          onSelectTag={ onSelectTag }
          onDeselectTag={ onDeselectTag }
        />
      ))
    }
  </Wrapper>
)


Tags.defaultProps = {}
Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  onSelectTag: PropTypes.func.isRequired,
  onDeselectTag: PropTypes.func.isRequired,
}

export default withTags(Tags)
