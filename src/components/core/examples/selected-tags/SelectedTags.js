import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ButtonTag from "./ButtonTag"

const Wrapper = styled.div`
display:flex;
padding: 0 0 30px 20px;
`

const SelectedTags = ({ tags }) => (
  <Wrapper>
    {
      tags.map(tag => (
        <ButtonTag key={ tag.id } tag={ tag } />
      ))
    }
  </Wrapper>
)


SelectedTags.defaultProps = {}
SelectedTags.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default SelectedTags
