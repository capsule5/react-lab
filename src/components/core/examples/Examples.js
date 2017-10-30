import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { EXAMPLES } from "api/examples"
import withExamples from "./withExamples"
import Layout from "../Layout"
import SideNav from "./SideNav"
import SelectedTags from "./selected-tags/SelectedTags"
import ExamplesRouter from "./ExamplesRouter"


const Wrapper = styled.div`
  display:flex;
  .content{
    flex:1
  }
`

const Examples = ({ selectedTags }) => {
  const filteredExamples = selectedTags.length > 0 ?
    EXAMPLES.filter(e => (selectedTags.map(t => t.value).every(t => e.tags.includes(t)))) :
    EXAMPLES

  return (
    <Layout>
      <SelectedTags tags={ selectedTags } />
      <Wrapper>
        <SideNav examples={ filteredExamples } />
        <div className="content">
          <ExamplesRouter examples={ filteredExamples } />
        </div>
      </Wrapper>
    </Layout>
  )
}

Examples.propTypes = {
  selectedTags: PropTypes.array.isRequired,
}

export default withExamples(Examples)
