import React from "react"
import { Switch, Route } from "react-router-dom"
import styled from "styled-components"
import Layout from "./Layout"
import SideNav from "./examples/SideNav"
import { EXAMPLES } from "../store/examples"

const Wrapper = styled.div`
  display:flex;
  .content{
    flex:1
  }
`

const Examples = () => (
  <Layout>
    <Wrapper>
      <SideNav examples={ EXAMPLES } />
      <div className="content">
        <Switch>
          {
            EXAMPLES.map((ex) => {
              const { component, ...others } = ex
              return (
                <Route
                  key={ ex.id }
                  path={ ex.path }
                  component={ () => <ex.component data={ others } /> }
                />
              )
            })
          }
        </Switch>
      </div>
    </Wrapper>
  </Layout>
)

export default Examples
