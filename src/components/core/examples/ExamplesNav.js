import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { EXAMPLES_URL } from "api/examples"
import TransitionGroup from "react-transition-group/TransitionGroup"
import ItemAnimated from "./ItemAnimated"

const Nav = styled.nav`
  text-align:left;
  padding:0 30px;
  min-width:250px;

  ul{
    list-style:none;
    padding:0;
    margin:0;
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

const ExamplesNav = ({ examples }) => (
  <Nav id="ExamplesNav">
    <ul>
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
}

export default ExamplesNav
