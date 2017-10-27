import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "./Header"

const Wrapper = styled.div`
  padding-top:20px;
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
  children: PropTypes.object.isRequired,
}

export default Layout

