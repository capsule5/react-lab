import React from "react"
import styled from "styled-components"
import logo from "../../logo.svg"

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: #222;
  padding: 5px 0;
  color: white;

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
    <img src={ logo } className="header-logo" alt="logo" />
    <h1 className="header-title">JT React Lab</h1>
  </Wrapper>
)

export default Header

