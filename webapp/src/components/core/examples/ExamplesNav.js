import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { EXAMPLES_URL } from "api/examples"
import TransitionGroup from "react-transition-group/TransitionGroup"
import ItemAnimated from "./ItemAnimated"
import withScroll from "../withScroll"

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
      transform:translateY(-${props => props.scroll.headerHeight}px);
    }
  }
  li{
    margin-bottom:1px;
    &.list{
      margin-bottom:20px;
      font-weight:bold
    }
    a{
      display:inline-block;
      padding: 8px;
      text-decoration:none;
      color:#000;
      &:hover{
        text-decoration:underline;
      }
    }
  }
`

const ExamplesNav = ({ examples, scroll }) => (
  <Nav id="ExamplesNav" scroll={ scroll }>
    <ul className={ scroll.isScrolled ? "isSticky" : "" }>
      <li className="list">
        ≡ <Link to={ `${EXAMPLES_URL}list` }>List view ({examples.length})</Link>
      </li>
      <TransitionGroup>
        {
          examples.map(example => (
            <ItemAnimated key={ example.id }>
              <li>› <Link to={ example.path }>{ example.title }</Link></li>
            </ItemAnimated>
          ))
        }
      </TransitionGroup>
    </ul>
  </Nav>
)

ExamplesNav.propTypes = {
  examples: PropTypes.array.isRequired,
  scroll: PropTypes.object.isRequired,
}

export default withScroll(ExamplesNav)
