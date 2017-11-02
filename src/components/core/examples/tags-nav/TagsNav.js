import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import withTagsNav from "./withTagsNav"
import ButtonTag from "./ButtonTag"

const Nav = styled.nav`
  text-align:left;
  padding:0 30px;
  min-width:150px;

  ul{
    list-style:none;
    padding:0;
    margin:0;
  }
  li{
    margin-bottom:1px;
    a{ 
      color:#000;
      text-decoration:none;
    }
    &.all{
      margin-bottom:20px;
      font-weight:bold
    }
  }
`


const TagsNav = ({ examples, selectedTags, onSelectTag, onDeselectTag }) => {
  const tags = examples
    .map(e => e.tags)
    .reduce((a, b) => a.concat(b), [])
    .filter((tag, index, self) => self.findIndex(t => t.value === tag.value) === index) // uniq based on value
    .sort((a, b) => a.value > b.value)

  tags.forEach((tag) => {
    tag.isSelected = selectedTags.map(t => t.value).includes(tag.value)
  })

  return (
  
    <Nav>
      <ul>
        {
          tags.map(tag => (
            <li key={ tag.id }>
              <ButtonTag
                key={ tag.id }
                tag={ tag }
                isSelected={ tag.isSelected }
                onSelectTag={ onSelectTag }
                onDeselectTag={ onDeselectTag }
              />
            </li>
          ))
        }
      </ul>
    </Nav>
  )
}

TagsNav.propTypes = {
  examples: PropTypes.array.isRequired,
  selectedTags: PropTypes.array.isRequired,
  onSelectTag: PropTypes.func.isRequired,
  onDeselectTag: PropTypes.func.isRequired,
}

export default withTagsNav(TagsNav)
