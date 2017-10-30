import React from "react"
import PropTypes from "prop-types"
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

const Examples = ({ match }) => {
  const tag = match.params.tag // router param
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

Examples.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Examples
