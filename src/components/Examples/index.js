import React from "react"
import { Switch, Route } from "react-router-dom"
import styled from "styled-components"
import Layout from "../Layout"
import SideNav from "./SideNav"
import { EXAMPLES } from "../../store/examples"

const Wrapper = styled.div`
  display:flex;
  .content{
    flex:1
  }
`

const Examples = ({ ...props }) => {
  const tag = props.match.params.tag
  const filteredExamples = tag ? EXAMPLES.filter(e => (e.tags.includes(tag))) : EXAMPLES

  return (
    <Layout>
      <Wrapper>
        <SideNav examples={ filteredExamples } />
        <div className="content">
          {
            tag ?
              <div>
                {
                  filteredExamples.map((ex) => {
                    const { component, ...moreData } = ex
                    return (
                      <ex.component key={ ex.id } data={ moreData } />
                    )
                  })
                }
              </div> :
              <Switch>
                {
                  filteredExamples.map((ex) => {
                    const { component, ...moreData } = ex
                    return (
                      <Route
                        key={ ex.id }
                        path={ ex.path }
                        component={ () => <ex.component data={ moreData } /> }
                      />
                    )
                  })
                }
              </Switch>
          }
          
        </div>
      </Wrapper>
    </Layout>
  )
}

export default Examples
