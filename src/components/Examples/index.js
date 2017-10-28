import React from "react"
import styled from "styled-components"
import Layout from "../Layout"
import SideNav from "./SideNav"
import List from "./List"
import ExamplesRouter from "./ExamplesRouter"
import { EXAMPLES } from "../../store/examples"

const Wrapper = styled.div`
  display:flex;
  .content{
    flex:1
  }
`

const Examples = (props) => {
  const tag = props.match.params.tag // router param
  const filteredExamples = tag ? EXAMPLES.filter(e => (e.tags.includes(tag))) : EXAMPLES

  return (
    <Layout>
      <Wrapper>
        <SideNav examples={ filteredExamples } />
        <div className="content">
          { tag ?
            <List examples={ filteredExamples } /> :
            <ExamplesRouter examples={ filteredExamples } />
          }
        </div>
      </Wrapper>
    </Layout>
  )
}

export default Examples
