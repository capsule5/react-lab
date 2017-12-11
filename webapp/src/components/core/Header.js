import React from "react"
import styled from "styled-components"
import logo from "assets/logo.svg"
import LiveSearch from "./livesearch/LiveSearch"

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #222;
  padding: 5px 0;
  color: white;

  .left{
    display: flex;
    align-items: center;
  }

  .header-logo {
    animation: header-logo-spin infinite 20s linear;
    height: 80px;
  }

  .header-title {
    font-size: 1.5em;
  }

  @keyframes header-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

`

const Header = () => (
  <Wrapper>
    <div className="left">
      <img src={ logo } className="header-logo" alt="logo" />
      <h1 className="header-title">JT React Lab</h1>
    </div>
    <LiveSearch />
  </Wrapper>
)

export default Header

