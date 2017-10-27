import React from "react"
import { Switch, Route } from "react-router-dom"
import styled from "styled-components"
import Layout from "./Layout"
import SideNav from "./SideNav"
import ReactMotion from "./examples/ReactMotion"
import UnmountAnimation from "./examples/UnmountAnimation"

const Wrapper = styled.div`
  display:flex;
  .content{
    flex:1
  }
`

const Examples = () => (
  <Layout>
    <Wrapper>
      <SideNav />
      <div className="content">
        <Switch>
          <Route path="/examples/react-motion" component={ ReactMotion } />
          <Route path="/examples/unmount-animation" component={ UnmountAnimation } />
        </Switch>
      </div>
    </Wrapper>
  </Layout>
)

export default Examples
