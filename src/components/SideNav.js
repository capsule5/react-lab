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

const SideNav = () => (
  <Nav>
    <ul>
      <li><Link to="/examples/react-motion">React Motion</Link></li>
      <li><Link to="/examples/unmount-animation">Unmount Animation</Link></li>
    </ul>
  </Nav>
)

export default SideNav
