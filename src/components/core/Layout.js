import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "./Header"

const Wrapper = styled.div`
  padding-top:30px;
`

const Layout = ({ children }) => (
  <div className="Layout">
    <Header />
    <Wrapper>
      {children}
    </Wrapper>
  </div>
)

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Layout

