import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { EXAMPLES } from "api/examples"
import withExamples from "./withExamples"
import Layout from "../Layout"
import ExamplesNav from "./ExamplesNav"
import TagsNav from "./tags-nav/TagsNav"
import ExamplesRouter from "./ExamplesRouter"


const Wrapper = styled.div`
  display:flex;
  .content{
    flex:1
  }
`

const Examples = ({ selectedTags }) => {
  const filteredExamples = selectedTags.length > 0 ?
    EXAMPLES.filter(e => (selectedTags.map(t => t.value).every(t => e.tags.map(ta => ta.value).includes(t)))) :
    EXAMPLES

  return (
    <Layout>
      <Wrapper>
        <ExamplesNav examples={ filteredExamples } />
        <div className="content">
          <ExamplesRouter examples={ filteredExamples } />
        </div>
        <TagsNav examples={ EXAMPLES } selectedTags={ selectedTags } />
      </Wrapper>
    </Layout>
  )
}

Examples.propTypes = {
  selectedTags: PropTypes.array.isRequired,
}

export default withExamples(Examples)
