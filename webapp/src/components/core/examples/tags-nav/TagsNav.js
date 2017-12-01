import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import TransitionGroup from "react-transition-group/TransitionGroup"
import { compose } from "utils/helpers"
import ItemAnimated from "../ItemAnimated"
import withTags from "../withTags"
import ButtonTag from "../ButtonTag"
import withScroll from "../../withScroll"

const Nav = styled.nav`
  text-align:left;
  padding:0 30px;
  min-width:250px;

  ul{
    list-style:none;
    padding:0;
    margin:0;
    &.isSticky{
      position:fixed;
      transform:translateY(-${props => props.headerHeight}px);
    }
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


const TagsNav = ({ availableTags, onSelectTag, onDeselectTag, scroll }) => (
  <Nav id="TagsNav" headerHeight={ scroll.headerHeight }>
    <ul className={ scroll.isScrolled ? "isSticky" : "" }>
      <TransitionGroup>
        {
          availableTags.map(tag => (
            <ItemAnimated key={ tag.id }>
              <li>
                <ButtonTag
                  className="inSideNav"
                  key={ tag.id }
                  tag={ tag }
                  relatedExamplesLength={ tag.relatedExamplesLength }
                  isSelected={ tag.isSelected }
                  onSelectTag={ onSelectTag }
                  onDeselectTag={ onDeselectTag }
                />
              </li>
            </ItemAnimated>
          ))
        }
      </TransitionGroup>
    </ul>
  </Nav>
)

TagsNav.propTypes = {
  availableTags: PropTypes.array.isRequired,
  onSelectTag: PropTypes.func.isRequired,
  onDeselectTag: PropTypes.func.isRequired,
  scroll: PropTypes.object.isRequired,
}

export default compose(
  withTags,
  withScroll
)(TagsNav)
