import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
  text-align:left;
  padding:20px;
  min-width:150px;

  ul{
    list-style:none;
    padding:0;
    margin:0;
  }
  li{
    margin-bottom:10px;
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
      {
        examples.map(example => (
          <li key={ example.id }><Link to={ example.path }>{ example.title }</Link></li>
        ))
      }
    </ul>
  </Nav>
)

export default SideNav
