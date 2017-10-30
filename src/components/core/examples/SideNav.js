import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { EXAMPLES_URL } from "api/examples"

const Nav = styled.nav`
  text-align:left;
  padding:0 20px;
  min-width:150px;

  ul{
    list-style:none;
    padding:0;
    margin:0;
  }
  li{
    margin-bottom:10px;
    &.all{
      margin-bottom:20px;
      font-weight:bold
    }
    a{
      text-decoration:none;
      color:#000;
      &:hover{
        text-decoration:underline;
      }
    }
  }
`

const SideNav = ({ examples }) => (
  <Nav>
    <ul>
      <li className="all">
        <Link to={ `${EXAMPLES_URL}all` }> View all</Link>
      </li>
      {
        examples.map(example => (
          <li key={ example.id }>› <Link to={ example.path }>{ example.title }</Link></li>
        ))
      }
    </ul>
  </Nav>
)

SideNav.propTypes = {
  examples: PropTypes.array.isRequired,
}

export default SideNav
