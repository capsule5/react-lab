import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
  text-align:left;
  padding:20px;

  ul{
    list-style:none;
    padding:0;
    margin:0;
  }
  li{
    margin-bottom:10px;
  }
`

const SideNav = ({ examples }) => (
  <Nav>
    <ul>
      {
        examples.map(example => (
          <li key={ example.id }><Link to={ example.path }>{ example.title }</Link></li>
        ))
      }
    </ul>
  </Nav>
)

export default SideNav
